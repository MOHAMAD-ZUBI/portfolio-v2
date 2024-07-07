import Hero from "@/components/main/Hero";

import Image from "next/image";

export default function Home() {
  return (
    <main className=" max-w-[1000px] mx-auto">
      <Hero />
      {/* <TypographyBlockquote content={"@radix-ui/react-alert-dialog"} /> */}
    </main>
  );
}
