import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import About from "@/components/main/About";
import Transition from "@/components/ui/Transition";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <main className=" max-w-[1000px] flex flex-col gap-20 mx-auto max-lg:px-5">
      <Transition>
        <Hero />
      </Transition>
      {/* <Projects /> */}
      <Transition>
        <About />
      </Transition>
      <Transition>
        <Footer />
      </Transition>
    </main>
  );
}
