import React from "react";
import TypographyBlockquote from "@/components/ui/TypographyQuote";

const Hero = () => {
  return (
    <div className=" mx-auto mt-32 ">
      <TypographyBlockquote content={"npx welcome-to-my-portfolio"} />
      <div className=" flex flex-col w-full text-7xl font-bold leading-[80px] ">
        <h1 className=" ">MOHAMAD ZUBI.</h1>
        <h1 className=" opacity-60">I design and build</h1>
        <h1 className="opacity-60">meaningful experiences.</h1>
      </div>
    </div>
  );
};

export default Hero;
