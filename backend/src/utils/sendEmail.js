const nodemailer = require('nodemailer')

const sendEmail = async (options) => {
  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })

  // Email options
  const mailOptions = {
    from: `"SunsysTechsol Solutions" <${process.env.SMTP_USER}>`,
    to: options.to,
    subject: options.subject,
    html: options.html
  }

  // Send email
  try {
    const info = await transporter.sendMail(mailOptions)
    console.log('✅ Email sent:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('❌ Email error:', error)
    throw new Error('Email could not be sent')
  }
}

module.exports = sendEmail