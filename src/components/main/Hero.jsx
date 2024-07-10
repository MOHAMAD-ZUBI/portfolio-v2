import React from "react";
import {
  TypographyBlockquote,
  TypographyInlineCode,
} from "@/components/ui/TypographyQuote";
import {
  PrimaryButton,
  QuaternaryButton,
  SecondaryButton,
  TailwindButton,
  TertiaryButton,
} from "../ui/Buttons";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" mx-auto md:mt-32 mt-16 h-screen">
      <TypographyInlineCode content={"npx welcome-to-my-portfolio"} />
      <div className=" flex flex-col w-full mt-2 text-4xl md:text-7xl font-bold md:leading-[80px] ">
        <h1 className=" text-gray-700 dark:text-white">MOHAMAD ZUBI,</h1>
        <h1 className="  opacity-60 bg-gradient-to-r from-blue-600  via-blue-300  to-indigo-500 inline-block text-transparent bg-clip-text">
          I design and build
        </h1>
        <h1 className="opacity-60 bg-gradient-to-r from-blue-500 via-gray-500 to-slate-600 inline-block text-transparent bg-clip-text">
          meaningful experiences.
        </h1>
      </div>
      <div className="max-md:text-md max-md:max-w-[350px]">
        <TypographyBlockquote
          content={
            "I am a digital maven — consistently evolving, driven by a relentless pursuit of learning and a goal to make a significant impact."
          }
        />
      </div>
      <div className=" flex flex-row gap-8  mt-8">
        <a href="mailto:mohamad-zubi@outlook.com">
          <TailwindButton content={"Contact Me"} />
        </a>
        <Link
          href={"https://www.linkedin.com/in/mohamad-zubi/"}
          target="_blank"
        >
          <TailwindButton content={"LinkedIn →"} />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
