# Troubleshooting & FAQ 🛠️

Common issues and how to fix them.

## 1. Contact Form: Email fails to send
### Error: `412 (Precondition Failed)`
- **Cause:** This usually means the EmailJS service (like Gmail) has been disconnected or the authentication scope has expired.
- **Fix:** Log into your [EmailJS Dashboard](https://dashboard.emailjs.com/), go to **Email Services**, disconnect your Gmail account, and re-connect it. Make sure to check the box for "Send email on your behalf" during the Google authorization.

### Error: `401 (Unauthorized)`
- **Cause:** Your Public Key, Service ID, or Template ID is incorrect.
- **Fix:** Check your `.env` file or `src/data/config.js` to ensure the IDs match exactly what is in your EmailJS dashboard.

## 2. Environment Variables not loading
- **Issue:** `process.env.REACT_APP_...` is undefined.
- **Fix:** 
  1. Restart your development server (`npm start`). React only loads `.env` on startup.
  2. Ensure variables start with `REACT_APP_`.
  3. Ensure the `.env` file is in the root directory (same level as `package.json`).

## 3. Blog images not showing
- **Issue:** Broken images in the blog/projects list.
- **Fix:** 
  - Ensure images are placed inside the `public/` folder.
  - In your data files, references should start with a slash (e.g., `/my-image.webp`), which points to the root of the `public` folder.

## 4. GitHub Pages / Vercel 404 on refresh
- **Issue:** Refreshing the page on a sub-route (e.g., `/blog`) shows a 404 error.
- **Fix:** 
  - **Vercel:** Create a `vercel.json` with a rewrite rule to redirect all traffic to `index.html`.
  - **Netlify:** Add a `_redirects` file with `/* /index.html 200`.

---
**Still stuck?** Open an issue on GitHub or check the [React official documentation](https://reactjs.org/docs/getting-started.html).
