const nodemailer = require("nodemailer");
require("dotenv").config();// to load .env elements

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),      // convert string to number
  secure: process.env.SMTP_SECURE === "true", // true for 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  }, 
});

transporter.verify()
  .then(() => console.log("SMTP server is ready"))
  .catch(err => console.error("SMTP connection error:", err));

module.exports = transporter;
