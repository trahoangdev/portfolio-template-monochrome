# project for test

A modern, high-performance personal portfolio website built with **React**, **Redux**, and purely **CSS**. This project features a sleek **Monochrome (Black & White)** aesthetic with advanced **3D interactions**, **Glassmorphism** effects, and a fully responsive design.

## ✨ Key Features

- **🌓 Dynamic Dark/Light Theme**: 
  - A robust theming system using CSS variables.
  - Switches between a deep "Almost Black" dark mode and a crisp "Clean White" light mode.
  - All elements, including gradients, shadows, and glass effects, adapt instantly.

- **🖌️ Modern UI/UX**:
  - **3D Interactive Avatar**: Mouse-following 3D tilt effect with dynamic lighting/glare.
  - **Glassmorphism**: Premium frosted glass effects on cards, modals, and navigation.
  - **Smooth Animations**: Intersection Observer-based scroll animations for reveal effects.
  - **Detail Modals**: Expandable project cards with parallax images and detailed tech stacks.

- **📱 Fully Responsive**: Uses CSS Grid and Flexbox to ensure a perfect experience on Mobile, Tablet, and Desktop.

## 🛠️ Tech Stack

- **Frontend**: React.js (Hooks, Functional Components)
- **State Management**: Redux (for Theme and Navigation state)
- **Styling**: Modular CSS, CSS Variables (`var(--)`), CSS Modules approach
- **Icons**: FontAwesome
- **Hooks**: Custom `useScrollAnimation` for performance-optimized scroll events.

## 📂 Project Structure

```bash
src/
├── components/      # React Components (Home, NavBar, Projects, etc.)
├── data/            # Static data files (projects.js, skills.js)
├── hooks/           # Custom Hooks (useScrollAnimation.js)
├── redux/           # Redux setup (actions, reducers, store)
├── styles/          # Modular CSS files
│   ├── variables.css # Global theme variables
│   ├── global.css    # Global resets and typography
│   └── [Component].css
└── App.js           # Main Entry Point
```

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/trahoangdev/js-practice.git
    cd js-practice
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm start
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎨 Customization

You can easily customize the theme colors by editing `src/styles/variables.css`. The project uses a semantic naming convention (e.g., `--primary-accent`, `--bg-color`) making it easy to swap the monochrome theme for any color palette.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---
**Made with ❤️ by trahoangdev**