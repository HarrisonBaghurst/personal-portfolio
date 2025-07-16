import Hero from "@/components/Hero";
import HeroBackground from "@/components/HeroBackground";

export default function Home() {
  return (
    <section>
      <HeroBackground />
      <Hero />
      <div className="w-full h-4 block 2xl:hidden">

      </div>
    </section>
  );
}
