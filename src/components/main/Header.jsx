"use client";
import React, { useEffect, useState } from "react";
import { WiMoonAltWaningGibbous6 } from "react-icons/wi";
import { MdOutlineWbSunny } from "react-icons/md";
import { setCookie, getCookie } from "cookies-next";

const Header = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const currentTheme = getCookie("theme") || "dark";
    setTheme(currentTheme);
  }, []);

  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 365);
    setCookie("theme", newTheme, { expires: expiryDate });
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="sticky top-0 flex justify-center max-md:hidden items-center">
      <div className="max-w-[1000px] mx-auto w-full bg-gray-200/30 dark:bg-black/30 backdrop-blur-sm p-4 rounded-3xl mt-[35px]">
        <div className="flex flex-row justify-between items-center w-full tracking-wider text-lg">
          <h2 className="w-full font-semibold">Mohamad Zubi</h2>
          <div className="flex flex-row justify-end gap-12 w-full items-center">
            <h1>About Me</h1>
            <h1>Projects</h1>
            <div className=" ease-linear duration-300">
              {theme === "light" ? (
                <MdOutlineWbSunny size={30} onClick={handleTheme} />
              ) : (
                <WiMoonAltWaningGibbous6 size={30} onClick={handleTheme} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
