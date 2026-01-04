# Portfolio Documentation Guide

Welcome to your professional monochrome portfolio! This guide will help you understand, customize, and maintain your website.

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```
2. **Setup Environment Variables**
   Create a `.env` file in the root directory (one has been created for you) and add your EmailJS keys.
3. **Run Locally**
   ```bash
   npm start
   ```

---

## 🛠 Project Structure

- `src/components/`: React UI components (NavBar, Home, Projects, etc.)
- `src/styles/`: CSS files for styling (Glassmorphism & Monochrome theme)
- `src/data/`: JSON/JS files containing skill and project data.
- `src/redux/`: Global state management for theme and active tab.
- `public/posts/`: Markdown files for your blog posts.
- `public/*.webp`: Optimized image assets.

---

## 🎨 Customizing Content

### 1. Update Personal Information
Open `src/components/Home.js` to change:
- Your Name
- Bio/Description
- Download link for your CV

### 2. Manage Projects
Edit `src/data/projects.js`. Each project follows this structure:
```javascript
{
    id: 1,
    name: 'Project Name',
    des: 'Long description of the project...',
    mission: 'Your role (e.g., Lead Developer)',
    language: 'Tech stack list',
    images: '/project-image.webp',
    demoUrl: 'https://...',
    githubUrl: 'https://...'
}
```

### 3. Add Blog Posts
This portfolio uses a custom Markdown renderer.
1. Create a `.md` file in `public/posts/` (e.g., `my-new-post.md`).
2. Add Frontmatter at the top:
   ```markdown
   ---
   title: My New Post
   date: "2026-01-05"
   description: Briefly what it is about.
   ---
   # Your Content Here
   ```
3. Register the new post in `src/components/Blog.js` by adding it to the `posts` array with the matching `slug`.

### 4. Manage Skills
Edit `src/data/skills.js` to add/remove technical skills. You can use icons from FontAwesome.

---

## ✉️ Contact Form (EmailJS)

To make the contact form functional:
1. Create an account at [emailjs.com](https://www.emailjs.com/).
2. Add an "Email Service" (e.g., Gmail).
3. Create an "Email Template". Use variables like `{{from_name}}`, `{{from_email}}`, and `{{message}}`.
4. Update your `.env` file:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

---

## 🌓 Theme & Styles

The site uses CSS Variables for themes, defined in `src/index.css`.
- Core colors: `--bg-color`, `--text-primary`, `--primary-accent`.
- Glassmorphism effect: `--glass-bg`, `--glass-border`, `--glass-backdrop`.

To change the accent color, simply update the `--primary-accent` and `--secondary-accent` variables in `src/index.css`.

---

## 📦 Deployment

### Deploy to Vercel/Netlify
1. Connect your GitHub repository.
2. Set the build command: `npm run build`.
3. Set the output directory: `build`.
4. **CRITICAL**: Add your `.env` variables in the Vercel/Netlify dashboard under "Environment Variables".
