import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

useEffect(() => {
  const savedTheme = localStorage.getItem("theme") || "light";

  document.documentElement.setAttribute("data-theme", savedTheme);
  setIsDark(savedTheme === "dark");
}, []);

  const toggleTheme = () => {
  const nextTheme = isDark ? "light" : "dark";

  setIsDark(nextTheme === "dark");
  document.documentElement.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
};

  return (
    <button
      className={styles.button}
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

function MoonIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="none">
      <path
        d="M20.5 15.8C19.3 16.5 17.9 16.9 16.4 16.9C11.9 16.9 8.2 13.2 8.2 8.7C8.2 7.2 8.6 5.8 9.3 4.6C5.9 5.7 3.5 8.9 3.5 12.7C3.5 17.4 7.3 21.2 12 21.2C15.8 21.2 19 18.8 20.5 15.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 3V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 19V21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M3 12H5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M19 12H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4.22 4.22L5.64 5.64" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18.36 18.36L19.78 19.78" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4.22 19.78L5.64 18.36" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default ThemeToggle;