import Hero from "@/components/Hero";
import HeroBackground from "@/components/HeroBackground";
import Projects from "@/components/Projects";
import ScrollText from "@/components/ScrollText";

export default function Home() {
  return (
    <section>
      <HeroBackground />
      <Hero />
      <ScrollText />
      <Projects />
      <div className="h-[20dvh] w-full"></div>
    </section>
  );
}
