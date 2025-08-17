# Firebase Email Template Configuration

## Steps to Reduce Spam Issues:

### 1. Custom Email Templates (Firebase Console)
1. Go to Firebase Console → Authentication → Templates
2. Select "Email address verification"
3. Customize the template:

**Subject Line:**
```
Bevestig je Tech2Wear account
```

**Email Body:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0a0a0a; color: #00ffff; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .button { background: #00ffff; color: #0a0a0a; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold; }
        .footer { padding: 20px; text-align: center; color: #666; font-size: 0.9em; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Tech2Wear</h1>
            <p>Bevestig je email adres</p>
        </div>
        <div class="content">
            <p>Hallo,</p>
            <p>Bedankt voor het aanmaken van je Tech2Wear account! Klik op de knop hieronder om je email adres te bevestigen:</p>
            
            <p style="text-align: center; margin: 30px 0;">
                <a href="%LINK%" class="button">Email Bevestigen</a>
            </p>
            
            <p>Als de knop niet werkt, kopieer dan deze link naar je browser:</p>
            <p style="word-break: break-all; background: #eee; padding: 10px;">%LINK%</p>
            
            <p>Deze link is 24 uur geldig.</p>
            
            <p>Met vriendelijke groet,<br>Het Tech2Wear Team</p>
        </div>
        <div class="footer">
            <p>Dit is een automatisch gegenereerde email. Reageer niet op dit bericht.</p>
            <p>Tech2Wear - Discover Tomorrow's Technology Today</p>
        </div>
    </div>
</body>
</html>
```

### 2. Custom SMTP Configuration (Advanced)
For production, consider using a dedicated email service like:
- SendGrid
- Mailgun  
- Amazon SES
- Postmark