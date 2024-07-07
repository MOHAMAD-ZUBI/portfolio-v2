import React from "react";

const Header = () => {
  return (
    <div className=" sticky top-0 flex justify-center items-center ">
      <div className=" max-w-[1000px] mx-auto w-full bg-black/30 backdrop-blur-sm p-4 rounded-3xl mt-[35px] ">
        <div className=" flex flex-row justify-between items-center w-full tracking-wider text-lg">
          <h2 className="w-full font-semibold">Mohamad Zubi</h2>
          <div className="flex flex-row justify-end gap-12 w-full items-center ">
            <h1>Home</h1>
            <h1>Fuck</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
