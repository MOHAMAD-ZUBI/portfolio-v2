import React from "react";

const PrimaryButton = ({ content }) => {
  return (
    <button className=" px-10 py-2 rounded-full border-gray-700/20 border-[2px] bg-transparent text-center hover:bg-gray-700/20 hover:text-white/80 ease-out duration-500 text-lg ">
      {content}
    </button>
  );
};

export default PrimaryButton;
