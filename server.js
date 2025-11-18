const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

// Security middlewares
app.use(helmet());

// Restrict CORS to known origin(s) in production via FRONTEND_ORIGIN env var; default to localhost static server
const allowedOrigin = process.env.FRONTEND_ORIGIN || 'http://localhost:8000';
app.use(cors({ origin: allowedOrigin }));

// Body size limits to mitigate large payload attacks
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Simple rate limiter for contact endpoint to reduce spam/abuse
const contactLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 6, // limit each IP to 6 requests per windowMs
  message: { ok: false, error: 'Too many requests, please try again later.' }
});

const DB = path.join(__dirname, 'submissions.json');

function saveSubmission(sub) {
  let arr = [];
  try {
    if (fs.existsSync(DB)) {
      const raw = fs.readFileSync(DB, 'utf8');
      arr = raw ? JSON.parse(raw) : [];
    }
  } catch (err) {
    console.error('Error reading submissions file', err);
  }
  arr.push(sub);
  try {
    fs.writeFileSync(DB, JSON.stringify(arr, null, 2), 'utf8');
  } catch (err) {
    console.error('Error writing submissions file', err);
  }
}

app.post('/api/contact', contactLimiter, (req, res) => {
  const { name, email, message } = req.body || {};
  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing fields' });
  }
  // Trim inputs and limit length
  const cleanName = String(name).trim().slice(0, 200);
  const cleanEmail = String(email).trim().slice(0, 200);
  const cleanMessage = String(message).trim().slice(0, 2000);
  // Basic email pattern check
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(cleanEmail)) {
    return res.status(400).json({ ok: false, error: 'Invalid email' });
  }
  // Simple sanitization: strip angle brackets to reduce HTML/script injection risk
  const sanitizedMessage = cleanMessage.replace(/[<>]/g, '');
  const submission = {
    name: cleanName,
    email: cleanEmail,
    message: sanitizedMessage,
    receivedAt: new Date().toISOString()
  };
  saveSubmission(submission);
  return res.json({ ok: true, message: 'Saved locally' });
});

app.get('/api/submissions', (req, res) => {
  try {
    if (fs.existsSync(DB)) {
      const raw = fs.readFileSync(DB, 'utf8');
      return res.json(JSON.parse(raw || '[]'));
    }
    return res.json([]);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false });
  }
});

app.listen(PORT, () => console.log(`Contact API running on http://localhost:${PORT}`));
