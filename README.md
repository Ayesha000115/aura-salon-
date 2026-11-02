# Aura Ladies Beauty Lounge & Bridal Studio Website

A premium, elegant, high-contrast ladies salon and bridal studio website built for salons in Pakistan. Designed for maximum conversion through direct WhatsApp appointments (no contact forms, no fake availability calendars).

---

## 🚀 One-Click Deployment on Netlify (from GitHub)

This project is fully configured for seamless, zero-config deployment on **Netlify** (and GitHub Pages).

### Method 1: Deploy Automatically via GitHub to Netlify (Recommended)

1. **Push this project to your GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Aura Ladies Salon Website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [Netlify.com](https://app.netlify.com/) and log in.
   - Click **"Add new site"** → **"Import an existing project"**.
   - Select **GitHub** and choose your repository.
   - Netlify will automatically detect the settings from `netlify.toml`:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Click **"Deploy site"**!

Your site will be live on a fast, free global CDN with automatic HTTPS. Every time you push changes to GitHub, Netlify will automatically rebuild and deploy your site!

### Method 2: Instant Drag-and-Drop Deploy (No GitHub required)

1. Run the build command locally:
   ```bash
   npm run build
   ```
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the generated `dist` folder directly onto the page. Your website is instantly live!

---

## ⚙️ Customizing Salon Information & WhatsApp Number

All salon information, phone numbers, and WhatsApp messages are located in one single file:
👉 **`src/config/salon.ts`**

Update the following settings to match your salon:

```typescript
export const SALON_CONFIG = {
  name: "Aura Ladies Beauty Lounge",
  whatsappNumber: "923001234567", // Enter without '+' or spaces (Pakistan format: 923XXXXXXXXX)
  phone: "+92 300 1234567",       // Display phone number for calls
  address: "Plot 18-C, MM Alam Road, Gulberg III",
  city: "Lahore, Pakistan",
  openingHours: {
    weekdays: "Monday – Saturday: 11:00 AM – 8:00 PM",
    sunday: "Sunday: 12:00 PM – 7:00 PM (Bridal & Booked Appointments)",
  },
  social: {
    instagram: "https://instagram.com/auralounge.pk",
    facebook: "https://facebook.com/auralounge.pk",
    tiktok: "https://tiktok.com/@auralounge.pk",
  },
};
```

---

## 🎨 Features & Design Architecture

- **High-Contrast Palette**: Pure Warm Ivory (`#FFFDFC`), Soft Nude (`#F3E5DC`), Deep Charcoal Plum (`#100C14`), Deep Crimson Rose (`#9E2D44`), Burnished Gold (`#A2752B`), and WhatsApp Green (`#1EA952`).
- **Relevant South Asian Imagery**:
  - **Bridal Makeup**: Authentic Pakistani brides with traditional jewelry, dupattas, and intricate eye artistry.
  - **Party Makeup**: Dramatic evening party looks, cut-crease eyeshadow, and festive lipstick.
  - **Hair & Nails**: Balayage, volumizing blowouts, bridal nail art with gold accents, and relaxing spa pedicures.
  - **Salon Interior**: Luxury vanity stations, shampoo lounge, and private bridal dressing suites.
- **Categorized Masonry Gallery**: Filter by *Bridal*, *Party Makeup*, *Hair*, *Nails*, and *Salon Interior* with full-screen Lightbox and direct WhatsApp booking for specific looks.
- **WhatsApp Appointment Flow**: Interactive service selector with pre-filled WhatsApp message generation and live preview.
