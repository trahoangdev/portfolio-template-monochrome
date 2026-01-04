# Theme & UI Customization 🎨

This project uses a **Monochrome Design System** powered by CSS Variables. This makes it extremely easy to tweak the look without changing the code structure.

## 1. Global CSS Variables
The main colors are defined in `src/index.css` under the `:root` and `.light-theme` selectors.

### Core Variables:
| Variable | Description |
| :--- | :--- |
| `--bg-color` | The main background color |
| `--text-color` | Global font color |
| `--card-bg` | Background for project/blog cards (semi-transparent) |
| `--primary-accent` | The "Pop" color (default: white/black) |

## 2. Changing the Accent Color
If you want to move away from pure monochrome, change `--primary-accent`. For example, for a **Cyberpunk Blue** look:

```css
:root {
  --primary-accent: #00f2ff; /* Change white to blue */
}
```

## 3. Adjusting Glass Intensity
The "Glassmorphism" effect is controlled by `backdrop-filter`. You can make it blurrier or more transparent:

```css
.card {
  backdrop-filter: blur(15px); /* Increase for more "fog" */
  background: rgba(255, 255, 255, 0.05); /* Decrease alpha for more transparency */
}
```

## 4. Typography
We use **Inter** (via Google Fonts). To change it:
1. Update the link in `public/index.html`.
2. Change the `--font-family` variable in `src/index.css`.

## 5. Animation Speeds
If the transitions feel too fast or slow, adjust these in `src/index.css`:
- `transition: 0.3s ease;` (Standard)
- `--animation-duration: 0.8s;` (Scroll animations)

---
**Note:** Always test both Light and Dark modes when changing color variables!
