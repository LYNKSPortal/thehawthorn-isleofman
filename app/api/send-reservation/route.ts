import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(ip)
  
  if (!limit || now > limit.resetTime) {
    // Reset or create new limit (5 requests per hour)
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60 * 60 * 1000 })
    return true
  }
  
  if (limit.count >= 5) {
    return false // Rate limit exceeded
  }
  
  limit.count++
  return true
}

// Helper function to sanitize input
function sanitizeInput(input: string): string {
  if (!input) return ''
  return input
    .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
    .trim()
    .substring(0, 500) // Limit length
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { guests, date, time, flexibleBooking, name, email, phone, details } = body

    // Validate required fields
    if (!name || !email || !phone || !guests || !date || !time) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name)
    const sanitizedEmail = sanitizeInput(email)
    const sanitizedPhone = sanitizeInput(phone)
    const sanitizedDetails = sanitizeInput(details || '')

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Email to restaurant
    const restaurantMailOptions = {
      from: process.env.SMTP_FROM,
      to: 'info@thehawthorn.im',
      subject: `New Reservation Request - ${sanitizedName}`,
      html: `
        <h2>New Reservation Request</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Phone:</strong> ${sanitizedPhone}</p>
        <p><strong>Number of Guests:</strong> ${guests}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Flexible Booking:</strong> ${flexibleBooking ? 'Yes' : 'No'}</p>
        ${sanitizedDetails ? `<p><strong>Additional Details:</strong><br>${sanitizedDetails}</p>` : ''}
        <hr>
        <p><em>This reservation was submitted via The Hawthorn website.</em></p>
      `,
    }

    // Email to customer
    const customerMailOptions = {
      from: process.env.SMTP_FROM,
      to: sanitizedEmail,
      subject: 'Reservation Request Received - The Hawthorn',
      html: `
        <h2>Thank You for Your Reservation Request</h2>
        <p>Dear ${sanitizedName},</p>
        <p>We have received your booking request and will be in touch to confirm this.</p>
        
        <h3>Your Reservation Details:</h3>
        <p><strong>Number of Guests:</strong> ${guests}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        ${sanitizedDetails ? `<p><strong>Additional Details:</strong><br>${sanitizedDetails}</p>` : ''}
        
        <p>If you have any issues in the meantime, please give us a call on <strong>01624 801268</strong>.</p>
        
        <hr>
        <p>Best regards,<br>The Hawthorn Team</p>
        <p style="font-size: 12px; color: #666;">
          The Hawthorn Bar & Bistro<br>
          Main Road, Greeba, Isle of Man<br>
          Email: info@thehawthorn.im<br>
          Phone: 01624 801268
        </p>
      `,
    }

    // Send both emails
    await transporter.sendMail(restaurantMailOptions)
    await transporter.sendMail(customerMailOptions)

    return NextResponse.json({ success: true, message: 'Reservation email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send reservation email' },
      { status: 500 }
    )
  }
}
