"use client";
import { useTheme } from "next-themes";

export default function Btn() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return <button onClick={toggleTheme}>Dark Mode</button>;
}
