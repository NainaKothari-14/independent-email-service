const transporter = require("../config/nodemailer");

const sendEmail = async ({ to, subject, text, html, attachments }) => {
  try {
    const info = await transporter.sendMail({
      from: `"My App" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text,
      html,
      attachments, // optional, can be PDF, images, etc.
    });
    console.log("Email sent:", info.messageId);
    return info;
  } catch (err) {
    console.error("Email sending failed:", err);
    throw err;
  }
};

module.exports = { sendEmail };
