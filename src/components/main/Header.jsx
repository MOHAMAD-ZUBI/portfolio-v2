"use client";
import React, { useEffect, useState } from "react";
import { WiMoonAltWaningGibbous6 } from "react-icons/wi";
import { HiMenuAlt4 } from "react-icons/hi";
import { MdOutlineWbSunny } from "react-icons/md";
import { setCookie, getCookie } from "cookies-next";

const Header = () => {
  const [theme, setTheme] = useState("dark");
  const [menu, setMenu] = useState(false);

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
    <div className="sticky top-0 flex justify-center items-center">
      <div className="max-w-[1000px] max-md:max-w-[358px] mx-auto w-full  bg-gray-200/30 dark:bg-black/30 backdrop-blur-sm p-4 rounded-3xl max-md:mt-[10px] mt-[35px]">
        <div className="flex flex-row justify-between items-center w-full max-md:-mb-3 tracking-wider text-lg">
          <h2 className="w-full tracking-wider md:font-semibold">
            Mohamad Zubi
          </h2>
          {/* Large screen bar start*/}
          <div className="flex flex-row max-md:hidden justify-end gap-12 w-full items-center">
            <h2 className=" ">About Me</h2>
            <h2>Projects</h2>
            <div className=" ease-linear duration-300">
              {theme === "light" ? (
                <MdOutlineWbSunny size={30} onClick={handleTheme} />
              ) : (
                <WiMoonAltWaningGibbous6 size={30} onClick={handleTheme} />
              )}
            </div>
          </div>
          {/* Large screen bar end */}

          {/* Small screen bar start */}

          <div className="flex flex-row md:hidden max-md:flex-row-reverse gap-4">
            <div onClick={() => setMenu(!menu)}>
              <HiMenuAlt4 size={30} />
            </div>
            <div className=" ease-linear duration-300">
              {theme === "light" ? (
                <MdOutlineWbSunny size={30} onClick={handleTheme} />
              ) : (
                <WiMoonAltWaningGibbous6 size={30} onClick={handleTheme} />
              )}
            </div>
          </div>

          {/* Small screen bar end*/}
        </div>
        <div className=" md:hidden w-full mt-4 ">
          {menu && (
            <div className="flex flex-col gap-4 w-full ease-linear duration-300 bg-gray-200/30 dark:bg-black/30 backdrop-blur-sm p-4 rounded-3xl">
              <h2 className=" ">About Me</h2>
              <h2>Projects</h2>
              <h2>Contact</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
