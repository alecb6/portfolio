import { useState } from "react";
import { useLocalStorage } from '@/hooks/useLocalStorage';

function DarkTheme({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center space-x-3 justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-700 focus-visible:ring-neutral-500 hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 h-9 w-9 group opacity-80 transition-opacity duration-150 hover:opacity-100"
      title="Change theme"
      data-button-root=""
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide-icon lucide lucide-sun duration-500 group-hover:rotate-12"
      >
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="m6.34 17.66-1.41 1.41"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
      </svg>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
function LightTheme({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center space-x-3 justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-700 focus-visible:ring-neutral-500 hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 h-9 w-9 group opacity-80 transition-opacity duration-150 hover:opacity-100"
      title="Change theme"
      data-button-root=""
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide-icon lucide lucide-moon duration-500 group-hover:-rotate-12"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
      </svg>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

function DarkModeButton() {
  const [storageTheme, setStorageTheme] = useLocalStorage("count", 0);
  const [theme, setTheme] = useState("dark");

  function handleClick() {
    setTheme(theme === "light" ? "dark" : "light");
    setStorageTheme("theme", theme);
    document.documentElement.classList.toggle("dark");
  }

  return (
    <>
      {theme !== "dark" ? (
        <DarkTheme onClick={handleClick} />
      ) : (
        <LightTheme onClick={handleClick} />
      )}
    </>
  );
}

export default DarkModeButton;
