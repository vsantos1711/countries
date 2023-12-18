"use client";
import { useTheme } from "next-themes";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function Btn() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const icon = theme === "light" ? <IoMoon /> : <IoSunny />;
  const modeText = theme === "light" ? "Dark mode" : "Light mode";

  return (
    <button className="flex items-center gap-1" onClick={toggleTheme}>
      {icon} {modeText}
    </button>
  );
}
