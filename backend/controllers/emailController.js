const { sendEmail } = require("../services/emailService");

const sendMailController = async (req, res) => {
  try {
    const { to, subject, text, html } = req.body;
    if (!to || !subject || (!text && !html)) {
      return res.status(400).json({ message: "Invalid input" });
    }

    const info = await sendEmail({ to, subject, text, html });
    res.status(200).json({ message: "Email sent successfully", id: info.messageId });
  } catch (err) {
    res.status(500).json({ message: "Failed to send email", error: err.message });
  }
};

module.exports = { sendMailController };
