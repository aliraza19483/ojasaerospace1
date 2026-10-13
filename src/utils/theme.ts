import { useEffect, useState } from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "ojas_theme";

export function getInitialTheme(): Theme {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, "dark");
  }
  return "dark";
}

export function applyTheme(theme: Theme = "dark") {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", "dark");
  document.body.setAttribute("data-theme", "dark");
  localStorage.setItem(STORAGE_KEY, "dark");
  window.dispatchEvent(new CustomEvent("themechange", { detail: "dark" }));
}

export function toggleTheme(): Theme {
  const current = (document.documentElement.getAttribute("data-theme") as Theme) || getInitialTheme();
  const next: Theme = current === "light" ? "dark" : "light";
  applyTheme(next);
  return next;
}

export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);

    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<Theme>;
      if (customEvent.detail) {
        setTheme(customEvent.detail);
      } else {
        setTheme(getInitialTheme());
      }
    };

    window.addEventListener("themechange", handleThemeChange);
    return () => window.removeEventListener("themechange", handleThemeChange);
  }, []);

  return [theme, () => toggleTheme()];
}
