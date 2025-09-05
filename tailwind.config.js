/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './App.tsx',
    './index.tsx',
    './components/Footer.tsx',
    './components/Header.tsx',
    './components/LanguageSwitcher.tsx',
    './components/Preloader.tsx',
    './components/ProjectCard.tsx',
    './components/ProjectList.tsx',
    './components/icons/FolderIcon.tsx',
    './components/icons/GithubIcon.tsx',
    './components/icons/LinkIcon.tsx',
    './contexts/LanguageContext.tsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
