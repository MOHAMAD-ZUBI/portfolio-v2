import React from "react";
import {
  TypographyBlockquote,
  TypographyInlineCode,
} from "@/components/ui/TypographyQuote";
import { PrimaryButton, SecondaryButton } from "../ui/Buttons";

const Hero = () => {
  return (
    <div className=" mx-auto mt-32 ">
      <TypographyInlineCode content={"npx welcome-to-my-portfolio"} />
      <div className=" flex flex-col w-full text-7xl font-bold leading-[80px] ">
        <h1 className=" ">MOHAMAD ZUBI,</h1>
        <h1 className=" opacity-60 bg-gradient-to-r from-blue-500 via-blue-200 to-indigo-400 inline-block text-transparent bg-clip-text">
          I design and build
        </h1>
        <h1 className="opacity-60 bg-gradient-to-r from-indigo-400 via-gray-200 to-slate-300-400 inline-block text-transparent bg-clip-text">
          meaningful experiences.
        </h1>
      </div>
      <TypographyBlockquote
        content={
          "I am a digital polymath — a constantly evolving digital creator driven by a passion for lifelong learning and the desire to leave a lasting impact."
        }
      />
      <div className=" flex flex-row gap-8  mt-8">
        <SecondaryButton content={"Github"} />
        <PrimaryButton content={"LinkedIn →"} />
      </div>
    </div>
  );
};

export default Hero;
