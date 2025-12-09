# Email Submission Backend Setup Guide

## Current Implementation

The form currently stores submissions in **localStorage** (browser storage). This is fine for testing but **not suitable for production** as data is only stored locally on each user's browser.

## Recommended Solutions

### Option 1: Formspree (Easiest - No Backend Needed) ⭐ Recommended for Quick Setup

**Pros:**
- Free tier available
- No backend code needed
- Email notifications
- Spam protection

**Setup:**
1. Sign up at https://formspree.io
2. Create a new form
3. Copy your form endpoint URL
4. In `dynamic.js`, uncomment and update the `sendToFormspree()` function:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(data)
   });
   ```

### Option 2: Firebase / Supabase (Backend-as-a-Service)

**Pros:**
- Real database
- Can build admin panel
- Free tier available
- Easy to integrate

**Setup:**
1. Create account at Firebase (https://firebase.google.com) or Supabase (https://supabase.com)
2. Create a database collection/table
3. Set up API keys
4. Update `dynamic.js` to use Firebase/Supabase SDK

**Database Structure:**
```json
{
  "employer_submissions": {
    "id": "auto-generated",
    "name": "string",
    "email": "string",
    "company": "string",
    "message": "text",
    "timestamp": "datetime",
    "status": "new|contacted|hired"
  }
}
```

### Option 3: Custom Backend (Most Control)

**Options:**
- **Node.js + Express + MongoDB/PostgreSQL**
- **Python + Flask/Django + SQLite/PostgreSQL**
- **PHP + MySQL**

**Example Node.js Endpoint:**
```javascript
// server.js
const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/submit-email', async (req, res) => {
  const { name, email, company, message } = req.body;
  // Save to database
  // Send email notification
  res.json({ success: true });
});

app.listen(3000);
```

**Database Schema (SQL):**
```sql
CREATE TABLE employer_submissions (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  message TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'new'
);
```

## Current Data Structure

Submissions are stored in localStorage with this structure:
```json
{
  "name": "John Doe",
  "email": "john@company.com",
  "company": "Tech Corp",
  "message": "Interested in hiring...",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

## Next Steps

1. **For quick setup**: Use Formspree (Option 1)
2. **For more control**: Use Firebase/Supabase (Option 2)
3. **For full control**: Build custom backend (Option 3)

Update the `handleEmailFormSubmission()` function in `dynamic.js` to use your chosen solution.

