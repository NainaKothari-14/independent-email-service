const { sendEmail } = require("../services/emailService");

const sendMailController = async (req, res) => {
  try {
    const { to, subject, text, html, attachments } = req.body;

    if (!to || !subject || (!text && !html)) {
      return res.status(400).json({
        success: false,
        message: "Invalid input: 'to', 'subject' and ('text' or 'html') are required",
      });
    }

    const info = await sendEmail({ to, subject, text, html, attachments });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
      messageId: info.messageId,
    });
  } catch (err) {
    console.error("Send email error:", err);

    return res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: err.message,
      // Optional: uncomment if you want more detail while debugging
      // code: err.code,
      // response: err.response,
    });
  }
};

module.exports = { sendMailController };
