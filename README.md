# Sushant Jha - Portfolio

A modern, responsive portfolio website built with **React**, **Vite**, and **Tailwind CSS**.  
Showcases projects, skills, and contact information with smooth animations and a clean UI.

## Features

- Animated landing page and interactive sections
- Project gallery with live demo and code links
- Skills grid with proficiency bars
- Contact form and social links
- Responsive design for all devices
- Built with React Router for navigation

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [AOS](https://michalsnik.github.io/aos/) (Animate On Scroll)

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```

3. **Build for production:**
   ```sh
   npm run build
   ```

## Project Structure

```
src/
  assets/         # Images and resume
  common/         # Shared UI components (Header, Footer, Marque, SlideTabs)
  components/     # Feature components (Projects, SplitText, etc.)
  layout/         # Layout wrapper
  pages/          # Main pages (Home, About, Skills, Contact, Welcome)
  index.css       # Global styles
  App.jsx         # App entry
  main.jsx        # React root
```

## Customization

- Update your profile info in [`AboutPage`](src/pages/AboutPage.jsx)
- Add or edit projects in [`Projects`](src/components/Projects.jsx)
- Change social links in [`Footer`](src/common/Footer.jsx) and [`ContactPage`](src/pages/ContactPage.jsx)

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built and maintained by Sushant Jha.
