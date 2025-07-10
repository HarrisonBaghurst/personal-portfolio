import Hero from "@/components/Hero";
import HeroBackground from "@/components/HeroBackground";
import Projects from "@/components/Projects";
import WebDesignScrollText from "@/components/WebDesignScrollText";
import Tutoring from "@/components/Tutoring";
import TutoringScrollText from "@/components/TutoringScrollText";

export default function Home() {
  return (
    <section>
      <HeroBackground />
      <Hero />
      <WebDesignScrollText />
      <Projects />
      <TutoringScrollText />
      <Tutoring />
    </section>
  );
}
