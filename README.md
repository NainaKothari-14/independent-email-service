# Independent Email Service

A lightweight email-sending microservice built with Node.js and Nodemailer. Designed for easy integration into any application to send OTPs, notifications, account updates, and attachments.

## Features

- Stateless and reusable email service
- SMTP integration (Gmail or other providers)
- Dynamic email content (to, subject, body)
- Optional file attachments
- Simple test UI for manual testing

## Project Structure

```
email-service/
├── backend/        # Email service API
├── frontend/       # Test UI (optional)
└── screenshots/    # Example images
```

## Quick Start

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Add your SMTP credentials to .env
node index.js
```

### Frontend Setup (Optional)

```bash
cd frontend
npm install
npm run dev
```

## Usage

Send emails through the API endpoint:

```bash
POST http://localhost:5001/api/email/send
Content-Type: application/json

{
  "to": "recipient@example.com",
  "subject": "Test Email",
  "text": "Hello from Email Service"
}
```

Or use the test UI to send emails manually.

## Screenshots

**Test UI**  
<img src="screenshots/ToSendEmail.png" width="400">

**Confirmation**  
<img src="screenshots/emailsent.png" width="400">

## Notes

- This service only sends emails, it does not receive them
- Database logging can be added later for auditing
- Test UI is for manual verification; the service can run headless

## Author

Naina Kothari
