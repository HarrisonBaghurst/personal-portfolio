'use client'

import Content from "@/components/Content";
import Hero from "@/components/Hero";
import HeroBackground from "@/components/HeroBackground";
import Navbar from "@/components/Navbar";
import Tutoring from "@/components/Tutoring";
import WebDev from "@/components/WebDev";

export default function Home() {

	return (
		<section className="w-full">
			<HeroBackground />
			<Navbar />	
			<Hero />
			<WebDev />
			<Tutoring />
		</section>
	);
}
