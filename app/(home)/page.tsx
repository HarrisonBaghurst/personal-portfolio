'use client'

import Hero from "@/components/Hero";
import HeroBackground from "@/components/HeroBackground";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { useState } from "react";

export default function Home() {
  	const [pageType, setPageType] = useState<'webDev' | 'tutoring'>('webDev')

	return (
		<section>
			<Navbar 
			pageType={pageType}
			onChange={(newPageType) => setPageType(newPageType)}
			/>
			<HeroBackground />
			<Hero 
			pageType={pageType}
			/>
            {pageType === 'webDev' && (
			    <Projects />
            )}
		</section>
	);
}
