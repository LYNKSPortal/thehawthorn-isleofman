import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { guests, date, time, flexibleBooking, name, email, phone, details } = body

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
      subject: `New Reservation Request - ${name}`,
      html: `
        <h2>New Reservation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Number of Guests:</strong> ${guests}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Flexible Booking:</strong> ${flexibleBooking ? 'Yes' : 'No'}</p>
        ${details ? `<p><strong>Additional Details:</strong><br>${details}</p>` : ''}
        <hr>
        <p><em>This reservation was submitted via The Hawthorn website.</em></p>
      `,
    }

    // Email to customer
    const customerMailOptions = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Reservation Request Received - The Hawthorn',
      html: `
        <h2>Thank You for Your Reservation Request</h2>
        <p>Dear ${name},</p>
        <p>We have received your booking request and will be in touch to confirm this.</p>
        
        <h3>Your Reservation Details:</h3>
        <p><strong>Number of Guests:</strong> ${guests}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        ${details ? `<p><strong>Additional Details:</strong><br>${details}</p>` : ''}
        
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
