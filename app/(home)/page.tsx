'use client'

import Content from "@/components/Content";
import Hero from "@/components/Hero";
import HeroBackground from "@/components/HeroBackground";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {

	return (
		<section className="w-screen h-screen overflow-hidden">
			<HeroBackground />
			<Navbar />	
			<Hero />
		</section>
	);
}
