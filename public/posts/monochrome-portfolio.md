---
title: Building a Monochrome Portfolio in React
date: "2026-01-05"
description: How I handled theme switching, glassmorphism, and 3D interactions without cluttering the UI.
---

# Building a Monochrome Portfolio

Creating a portfolio that stands out but remains clean is a challenge. For my latest iteration, I chose a **strict monochrome palette**—black, white, and grays—accentuated only by depth and motion.

## 1. The Design Philosophy

> "Color is a distraction. Shape and motion tell the story."

I wanted the user to focus on the *structure* of my work. By removing color, I forced myself to rely on:
- **Spacing**: Generous whitespace to let content breathe.
- **Typography**: Using `Poppins` for a modern, geometric feel.
- **Depth**: Glassmorphism (blur + transparency) to create layers.

## 2. Implementing the 3D Avatar

The interactive 3D card on the homepage uses CSS 3D transforms driven by mouse events.

```javascript
const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation based on cursor position relative to center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // ... math logic
}
```

## 3. Glassmorphism System

I defined my glass styles in `variables.css` to ensure consistency:

```css
:root {
    --glass-bg: rgba(255, 255, 255, 0.05);
    --glass-border: 1px solid rgba(255, 255, 255, 0.1);
    --glass-backdrop: blur(15px);
}
```

This allows me to apply `background: var(--glass-bg)` anywhere and get that instant premium feel.

## Conclusion

Building this portfolio was a lesson in restraint. It turns out, you don't need a rainbow to make a splash.
