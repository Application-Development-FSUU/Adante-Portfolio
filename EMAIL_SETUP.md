# Email Configuration Guide

## 1. Contact Form Emails (EmailJS)

### Step A: Get EmailJS Credentials
1. Go to https://www.emailjs.com
2. Sign up for a free account
3. Go to Dashboard → Copy your **Public Key**
4. Go to Email Services → Add Service (Gmail)
5. Follow the setup steps and copy the **Service ID**
6. Go to Email Templates → Create New Template
7. Name: `contact_form` and copy the **Template ID**

### Step B: Create .env.local
Copy `.env.example` to `.env.local` and fill in:
```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Step C: EmailJS Template Setup
In your EmailJS dashboard, create a template with these fields:
- `{{name}}` - Visitor name
- `{{email}}` - Visitor email
- `{{title}}` - Subject
- `{{message}}` - Message content

Example template body:
```
Name: {{name}}
Email: {{email}}
Subject: {{title}}

Message:
{{message}}
```

---

## 2. Vercel Deployment Notifications

### Step A: Set Up Vercel Webhook
1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to **Settings** → **Git**
4. Look for "Deploy Hooks" section
5. Create a hook with URL (choose one):
   - **Option 1**: Use Vercel's built-in notifications
   - **Option 2**: Use a webhook service like Discord/Slack

### Step B: Configure Email on Vercel
1. Go to **Settings** → **Notifications**
2. Enable email notifications for:
   - Production deployments
   - Deployment failures
3. Verify your email address

### Step C: GitHub + Vercel Integration
1. Vercel automatically syncs with GitHub
2. Each push triggers deployment automatically
3. Vercel sends email to your account email

---

## 3. Testing

### Test Contact Form Locally
```bash
npm run dev
```
Go to Contact section and submit a test message. Check your Gmail inbox.

### Test Deployment
```bash
git add .
git commit -m "test deployment"
git push origin main
```
Check your email for Vercel deployment notification.

---

## Troubleshooting

**Contact form not working?**
- Check that `.env.local` has correct credentials
- Verify EmailJS template ID matches
- Check browser console for errors
- Test at https://www.emailjs.com/docs/

**Not receiving Vercel emails?**
- Check Vercel Settings → Notifications
- Verify email is confirmed in Vercel account
- Check spam/promotions folder

**Gmail not receiving emails?**
- Verify EmailJS service is connected to Gmail
- Check Gmail "Less secure app access" (for non-OAuth)
- Allow Vercel's email service in Gmail filters
