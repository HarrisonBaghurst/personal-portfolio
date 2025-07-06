import Hero from "@/components/Hero";
import HeroBackground from "@/components/HeroBackground";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <section>
      <HeroBackground />
      <Hero />
      <Projects />
    </section>
  );
}
