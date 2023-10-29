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
    <>
      <div
        onClick={() => setTheme("dark")}
        className="group cursor-pointer rounded-md p-2 text-[20px] hover:bg-main-dark-green dark:hidden"
      >
        <div className="flex items-center justify-center text-soft-white transition-all duration-150 group-hover:scale-110">
          <BsMoonFill />
        </div>
      </div>
      <div
        onClick={() => setTheme("light")}
        className="group hidden cursor-pointer rounded-md p-2 text-[26px] hover:bg-main-dark-green dark:block"
      >
        <div className="flex items-center justify-center text-soft-white transition-all duration-150 group-hover:scale-110">
          <BsFillSunFill />
        </div>
      </div>
    </>
  );
};

export default ThemeToggle;
