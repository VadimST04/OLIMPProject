import React, { useEffect, useState } from "react";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="group relative flex h-10 w-full items-center justify-start gap-2 rounded-md text-soft-white sm:w-10 sm:justify-center sm:hover:bg-main-dark-green"
    >
      <p className="sm:hidden">Theme</p>
      <BsMoonFill className="text-xl transition-transform duration-150 group-hover:scale-[115%] dark:hidden" />
      <BsFillSunFill className="hidden text-2xl transition-transform duration-150 group-hover:scale-[115%] dark:block" />
    </button>
  );
};

export default ThemeToggle;
