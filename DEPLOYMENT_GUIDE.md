# 🚀 Deployment Guide - LaunchUpWeb Portfolio to Zircon Host

This guide will walk you through deploying your Next.js portfolio as a static website to Zircon Host.

---

## 📋 Prerequisites

Before you begin, make sure you have:
- ✅ Access to your Zircon Host cPanel
- ✅ Node.js and npm installed on your local machine
- ✅ Web3Forms access key (free - instructions below)

---

## 🔑 Step 1: Get Your Web3Forms Access Key

Your contact form now uses Web3Forms (free service) instead of the backend server.

1. Visit **https://web3forms.com/**
2. Enter your email: `Info@launchupweb.com`
3. Click "Get Access Key"
4. Check your email and copy the access key
5. Create a file named `.env.local` in the `next-client` folder:
   ```bash
   cd next-client
   nano .env.local
   ```
6. Add your access key:
   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=your_actual_access_key_here
   ```
7. Save and close (Ctrl+X, then Y, then Enter)

---

## 🏗️ Step 2: Build Your Static Site

Run these commands in your terminal:

```bash
# Navigate to the Next.js project
cd "/Users/rickyperera/Documents/Projects/My Projects/LaunchUp Web/LaunchUp Web Portfoloio/next-client"

# Install dependencies (if not already installed)
npm install

# Build the static export
npm run build
```

**Expected output:**
- A new `out` folder will be created
- You should see: `✓ Generating static pages`
- Build should complete without errors

**Verify the build:**
```bash
# Check the out folder exists
ls -la out/

# You should see:
# - index.html (homepage)
# - services/index.html
# - contact/index.html
# - about/index.html
# - portfolio/index.html
# - _next/ folder (with CSS/JS)
```

---

## 📤 Step 3: Upload to Zircon Host

### Option A: Using cPanel File Manager (Recommended for beginners)

1. **Log into Zircon Host cPanel**
   - Go to: https://www.zirconhost.com/clientarea.php
   - Navigate to your hosting cPanel

2. **Open File Manager**
   - Click "File Manager" in cPanel
   - Navigate to `public_html` (or your domain's root folder)

3. **Clear existing files** (if any)
   - Select all files in `public_html`
   - Click "Delete" (make backups first if needed!)

4. **Upload your static site**
   - Click "Upload" button
   - Select ALL files from your `out` folder
   - **Important:** Upload the CONTENTS of the `out` folder, not the folder itself
   - Wait for upload to complete

5. **Verify .htaccess file**
   - Check if `.htaccess` file is present in `public_html`
   - If not visible, click "Settings" (top right) and enable "Show Hidden Files"
   - The `.htaccess` file should be there (it was in the `public` folder)

### Option B: Using FTP (FileZilla)

1. **Download FileZilla** (if not installed)
   - Visit: https://filezilla-project.org/

2. **Get FTP credentials from cPanel**
   - In Zircon Host cPanel, find "FTP Accounts"
   - Create or use existing FTP account
   - Note: hostname, username, password

3. **Connect via FileZilla**
   - Host: `ftp.yourdomain.com` (or IP from cPanel)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21
   - Click "Quickconnect"

4. **Upload files**
   - Navigate to `public_html` on the remote side (right panel)
   - Navigate to your `out` folder on local side (left panel)
   - Select ALL contents of `out` folder
   - Drag to `public_html` on the right
   - Wait for transfer to complete

---

## 🌐 Step 4: Configure Your Domain

1. **In Zircon Host cPanel, go to "Domains"**
2. **Add or configure your domain:**
   - Primary domain: `launchupweb.com`
   - Document root: `/public_html`
3. **Update DNS settings** (if needed):
   - Point your domain's A record to Zircon Host's IP
   - Wait 24-48 hours for DNS propagation

---

## 🔒 Step 5: Enable SSL (HTTPS)

1. **In cPanel, find "SSL/TLS Status"**
2. **Select your domain**
3. **Click "Run AutoSSL"**
4. **Wait for certificate installation**
5. **Test:** Visit `https://launchupweb.com`

---

## ✅ Step 6: Test Your Website

Visit your website and test:

- ✅ Homepage loads correctly
- ✅ All navigation links work
- ✅ Services page displays properly
- ✅ Portfolio page loads
- ✅ About page loads
- ✅ Contact form submits successfully
- ✅ Check email for test submission
- ✅ Mobile responsiveness
- ✅ All images load

**Test the contact form:**
1. Fill out the form with test data
2. Submit
3. Check `Info@launchupweb.com` for the submission email
4. Verify all form fields are included

---

## 🔧 Troubleshooting

### Issue: Pages show 404 errors when navigating

**Solution:**
- Ensure `.htaccess` file is in `public_html`
- Check that mod_rewrite is enabled (contact Zircon Host support)
- Verify `.htaccess` contents match the provided file

### Issue: Contact form doesn't work

**Solution:**
- Verify Web3Forms access key is correct
- Check browser console for errors (F12 → Console)
- Test the access key at https://web3forms.com/
- Ensure email address in Web3Forms account is verified

### Issue: Images not loading

**Solution:**
- Check that `_next` folder uploaded correctly
- Verify file permissions (should be 644 for files, 755 for folders)
- Clear browser cache and reload

### Issue: Styles not applied

**Solution:**
- Ensure all CSS files in `_next/static/css/` uploaded
- Check browser console for 404 errors
- Verify base URL is correct in cPanel

### Issue: "Index of /" directory listing shows

**Solution:**
- Ensure `index.html` exists in `public_html`
- Check file permissions (should be 644)
- Rename if needed: `mv index.html index.html` (refresh permissions)

---

## 🔄 Updating Your Website

When you make changes to your website:

1. **Make your code changes locally**
2. **Rebuild the static site:**
   ```bash
   cd next-client
   npm run build
   ```
3. **Re-upload the `out` folder contents** to `public_html`
4. **Clear browser cache** to see changes

---

## 📊 Performance Optimization

Your site is already optimized with:
- ✅ Gzip compression (via .htaccess)
- ✅ Browser caching (via .htaccess)
- ✅ Minified CSS/JS (from Next.js build)
- ✅ Static HTML (fast loading)

**Optional improvements:**
- Enable Cloudflare (free CDN)
- Compress images before uploading
- Use WebP format for images

---

## 📞 Support

**Zircon Host Support:**
- If you encounter server-related issues, contact Zircon Host support
- Common issues: mod_rewrite, file permissions, SSL

**Web3Forms Support:**
- Visit: https://web3forms.com/docs
- Email: support@web3forms.com

**Code Issues:**
- Check the browser console (F12 → Console)
- Review build logs for errors

---

## 🎉 Success!

Your website should now be live at **https://launchupweb.com**

**Next steps:**
- Submit your sitemap to Google Search Console
- Set up Google Analytics
- Monitor contact form submissions
- Share your new website!

---

## 📝 Quick Reference

**Build command:**
```bash
cd next-client && npm run build
```

**Upload location:**
- Upload contents of `out/` → `public_html/`

**Environment variable:**
- File: `next-client/.env.local`
- Variable: `NEXT_PUBLIC_WEB3FORMS_KEY`

**Contact form email:**
- Submissions go to: `Info@launchupweb.com`

**Important files:**
- `.htaccess` - Must be in `public_html`
- `index.html` - Homepage
- `_next/` - Static assets (CSS/JS)
