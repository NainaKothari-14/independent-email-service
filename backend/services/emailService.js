const transporter = require("../config/nodemailer");

const sendEmail = async () => {
  // basic validation
  if (!to.trim() || !subject.trim() || !message.trim()) {
    setStatus("Error: Please fill To, Subject and Message");
    return;
  }

  if (!import.meta.env.VITE_API_BASE_URL) {
    setStatus("Error: VITE_API_BASE_URL is missing");
    return;
  }

  setStatus("Sending...");

  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/email/send`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: to.trim(),
          subject: subject.trim(),
          text: message.trim(),
        }),
      }
    );

    const data = await res.json().catch(() => ({}));

    // ✅ show backend error properly
    if (!res.ok) {
      setStatus(`Error: ${data.error || data.message || `HTTP ${res.status}`}`);
      return;
    }

    setStatus(data.message || "Email sent successfully!");
  } catch (err) {
    setStatus("Error: Network/CORS issue");
  }
};
module.exports = { sendEmail };
