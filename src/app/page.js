import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";

import Image from "next/image";

export default function Home() {
  return (
    <main className=" max-w-[1000px] mx-auto max-lg:pl-5">
      <Hero />
      <Projects />
    </main>
  );
}
