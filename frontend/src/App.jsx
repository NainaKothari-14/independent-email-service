import { useState } from "react";

function App() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const sendEmail = async () => {
    setStatus("Sending...");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/email/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to,
          subject,
          text: message,
        }),
      });

      const data = await res.json();
      setStatus(data.message || "Sent!");
    } catch (err) {
      setStatus("Error sending email");
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f5f7fa',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '40px',
        maxWidth: '500px',
        width: '100%',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
      }}>
        <h2 style={{
          color: '#2d3748',
          marginBottom: '30px',
          fontSize: '28px',
          fontWeight: '600'
        }}> Email Service</h2>

        <input
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
            fontSize: '16px',
            marginBottom: '16px',
            outline: 'none',
            transition: 'border 0.3s',
            backgroundColor: '#fafafa',
            color: '#2d3748'
          }}
          onFocus={(e) => e.target.style.borderColor = '#93c5fd'}
          onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
        />

        <input
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
            fontSize: '16px',
            marginBottom: '16px',
            outline: 'none',
            transition: 'border 0.3s',
            backgroundColor: '#fafafa',
            color: '#2d3748'
          }}
          onFocus={(e) => e.target.style.borderColor = '#93c5fd'}
          onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
        />

        <textarea
          placeholder="Message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
            fontSize: '16px',
            marginBottom: '20px',
            outline: 'none',
            resize: 'vertical',
            fontFamily: 'inherit',
            transition: 'border 0.3s',
            backgroundColor: '#fafafa',
            color: '#2d3748'
          }}
          onFocus={(e) => e.target.style.borderColor = '#93c5fd'}
          onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
        />

        <button onClick={sendEmail} style={{
          width: '100%',
          background: '#60a5fa',
          border: 'none',
          padding: '14px',
          borderRadius: '8px',
          color: 'white',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'background 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.background = '#3b82f6'}
        onMouseLeave={(e) => e.target.style.background = '#60a5fa'}>
          Send Email
        </button>

        {status && (
          <p style={{
            marginTop: '20px',
            padding: '12px',
            borderRadius: '8px',
            background: status.includes('Error') ? '#fef2f2' : '#f0fdf4',
            color: status.includes('Error') ? '#dc2626' : '#16a34a',
            textAlign: 'center',
            fontWeight: '500',
            border: status.includes('Error') ? '1px solid #fecaca' : '1px solid #bbf7d0'
          }}>
            {status}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;