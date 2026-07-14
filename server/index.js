import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const app = express()
const PORT = process.env.SERVER_PORT || 3001

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }))
app.use(express.json())

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})

app.post('/api/contact', async (req, res) => {
  const { first_name, last_name, from_email, company, subject, message } = req.body

  if (!first_name || !from_email || !subject || !message) {
    return res.status(400).json({ success: false, error: 'Missing required fields' })
  }

  const fullName = `${first_name} ${last_name || ''}`.trim()
  const companyLine = company ? `<p><strong>Company:</strong> ${company}</p>` : ''

  const internalHtml = `
    <h2>New Inquiry from Nextek Sol Website</h2>
    <p><strong>From:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${from_email}</p>
    ${companyLine}
    <p><strong>Subject:</strong> ${subject}</p>
    <hr/>
    <p>${message.replace(/\n/g, '<br/>')}</p>
  `

  const confirmationHtml = `
    <h2>Thank you for reaching out, ${first_name}!</h2>
    <p>We've received your inquiry and our team will get back to you shortly.</p>
    <br/>
    <p><strong>Your message:</strong></p>
    <p><em>Subject: ${subject}</em></p>
    <p>${message.replace(/\n/g, '<br/>')}</p>
    <br/>
    <p>Best regards,<br/><strong>Nextek Sol</strong></p>
  `

  // TODO: Re-enable email by uncommenting the sendMail blocks below
  try {
    // await transporter.sendMail({
    //   from: `"Nextek Sol Webapp" <${process.env.SMTP_USER}>`,
    //   to: process.env.CONTACT_EMAIL,
    //   replyTo: from_email,
    //   subject: `New Inquiry from Nextek Sol Website`,
    //   html: internalHtml
    // })

    // await transporter.sendMail({
    //   from: `"Nextek Sol" <${process.env.SMTP_USER}>`,
    //   to: from_email,
    //   subject: `We've received your message - Nextek Sol`,
    //   html: confirmationHtml
    // })

    console.log('Email disabled — form submission received:', { fullName, from_email, subject })
    res.json({ success: true })
  } catch (err) {
    console.error('Email error:', err)
    res.status(500).json({ success: false, error: 'Failed to send email' })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
