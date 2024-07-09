import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import About from "@/components/main/About";
import Transition from "@/components/ui/Transition";

export default function Home() {
  return (
    <main className=" max-w-[1000px] mx-auto max-lg:px-5">
      <Transition>
        <Hero />
      </Transition>
      {/* <Projects /> */}
      <Transition>
        <About />
      </Transition>
    </main>
  );
}
