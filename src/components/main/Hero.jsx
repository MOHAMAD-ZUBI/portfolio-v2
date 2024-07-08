import React from "react";
import {
  TypographyBlockquote,
  TypographyInlineCode,
} from "@/components/ui/TypographyQuote";
import { PrimaryButton, SecondaryButton } from "../ui/Buttons";

const Hero = () => {
  return (
    <div className=" mx-auto md:mt-32 mt-16 h-screen">
      <TypographyInlineCode content={"npx welcome-to-my-portfolio"} />
      <div className=" flex flex-col w-full mt-2 text-4xl md:text-7xl font-bold md:leading-[80px] ">
        <h1 className=" ">MOHAMAD ZUBI,</h1>
        <h1 className="  opacity-60 bg-gradient-to-r dark:from-blue-500  dark:via-blue-200  dark:to-indigo-400 from-black via-zinc-900 to-slate-800 inline-block text-transparent bg-clip-text">
          I design and build
        </h1>
        <h1 className="opacity-60 bg-gradient-to-r dark:from-indigo-400 dark:via-gray-200 dark:to-slate-300-400 from-slate-800 via-zinc-600 to-slate-300 inline-block text-transparent bg-clip-text">
          meaningful experiences.
        </h1>
      </div>
      <div className="max-md:text-md max-md:max-w-[350px]">
        <TypographyBlockquote
          content={
            "I am a digital polymath — a constantly evolving digital creator driven by a passion for lifelong learning and the desire to leave a lasting impact."
          }
        />
      </div>
      <div className=" flex flex-row gap-8  mt-8">
        <SecondaryButton content={"Github"} />
        <PrimaryButton content={"LinkedIn →"} />
      </div>
    </div>
  );
};

export default Hero;
