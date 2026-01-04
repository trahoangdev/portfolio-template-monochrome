# Markdown Blog Guide 📝

This portfolio includes a dynamic, file-based blog system. You don't need a database; just write Markdown files!

## 1. Creating a Post
1. Create a new `.md` file in `/public/posts/`.
2. Name it using a URL-friendly "slug" (e.g., `modern-web-design.md`).

## 2. Post Frontmatter
Every post **must** start with a JSON-like metadata block (Frontmatter) inside `---` delimiters:

```markdown
---
{
    "title": "Your Awesome Post Title",
    "date": "2024-03-20",
    "image": "/project1.webp",
    "excerpt": "A short summary of what this post is about."
}
---

Your content starts here...
```

### Metadata Fields:
- `title`: Shown as the main heading.
- `date`: Displayed below the title.
- `image`: The thumbnail used in the blog list.
- `excerpt`: A 1-2 sentence preview shown on the blog grid.

## 3. Registering the Post
After creating the file, you must tell the app it exists.
Open `src/components/Blog.js` and add your post to the `posts` array:

```javascript
const posts = [
    {
        title: "Your Post Title",
        slug: "modern-web-design", // Must match the filename exactly
        date: "March 20, 2024",
        excerpt: "A short summary...",
        image: "/project1.webp"
    },
    // Add new posts at the top
];
```

## 4. Markdown Features
Support is included for:
- **GFM**: Tables, task lists, and strikethrough.
- **Syntax Highlighting**: Code blocks with language labels (e.g., ```javascript).
- **HTML**: You can use raw HTML inside your markdown if needed.

---
**Tip:** Use high-quality `.webp` images for better performance!
