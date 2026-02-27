# 🚀 Lucas Pintos - Portfolio

> Personal portfolio and modern bilingual interactive resume of **Lucas Pintos**, Jr. DevOps Engineer & Full-Stack Developer.

![Astro](https://img.shields.io/badge/Astro%205-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## ✨ Key Features

- **⚡ Blazing Fast:** Built with [Astro 5](https://astro.build/) using purely Static Site Generation (SSG). Zero runtime UI frameworks, shipping minimal client-side JavaScript.
- **🌍 Native i18n:** Built-in internationalization (Spanish/English) powered by Astro's `routing` and i18n APIs, without heavy external libraries.
- **🛡 Type-Safe Content:** All data (Experience, Projects, Education) is driven by Markdown/JSON files and strictly validated during build using Astro **Content Collections** and Zod.
- **🎨 Minimalist Aesthetic:** "Geist UI" inspired design system implemented purely with Vanilla **Tailwind CSS**. Includes semantic tokens, smooth transitions, and a meticulously crafted typography hierarchy.
- **🌓 Dark Mode:** First-class dark mode support toggled instantly via CSS variables with `localStorage` persistence and preventing FOUC (Flash of Unstyled Content).
- **🚀 CI/CD & Automation:** Configured with GitHub Actions for automated semantic versioning, tagged releases, and ultra-fast deployment via Vercel Edge networks.

---

## 📂 Project Structure

```text
src/
├── assets/            # Static files, optimized automatically by Astro (images, icons)
├── components/        # Reusable UI elements (Header, Timeline, Cards, etc.)
├── content/           # Markdown and JSON data representing the resume info
│   ├── config.ts      # Zod schemas for strict data validation (Projects, Experience, etc.)
│   ├── education/
│   ├── experience/
│   └── projects/
├── i18n/              # Locale utilities and ES/EN string dictionaries
├── layouts/           # Page wrappers handling global SEO and document structure
├── pages/             # File-based routing (including the /[lang]/ dynamic handler)
└── styles/            # Global scope utilities, typography, and CSS custom variables
```

---

## 🛠️ Getting Started

### Prerequisites

You'll need [Node.js](https://nodejs.org/) (version `v18.17.1` or higher) installed on your system.

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/lucaspintos/l10s-portfolio.git
   cd l10s-portfolio
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server at `http://localhost:4321/`:
   ```bash
   npm run dev
   ```

### Building for Production

To create an optimized production build, run:

```bash
npm run build
```

This will generate the static minified HTML, CSS, and optimized WebP images inside the `dist/` directory, ready to be deployed to any static host.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE). Feel free to fork it, learn from it, and adapt it to create your own personal portfolio.
