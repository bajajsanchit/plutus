"use client";
import { useEffect, useState } from "react";
//style
import WaitlistForm from "@/components/WaitlistForm";
import styles from "./page.module.scss";
//components
import AppHeader from "@/components/AppHeader";
import Footer from "@/components/Footer";
import BentoGrid from "@/components/BentoGrid";
import InitialLoader from "@/components/InitialLoader";
import HeroSection from "@/components/HeroSection";
import VacationOffers from "@/components/VacationOffers";
import Partners from "@/components/Partners";
//utils
// import Lenis from "lenis";
import DivergingElements from "@/components/DivergingElements";
import Announcement from "@/components/Announcement";
import Ripple from "@/components/RippleEffect";
import OrbitingCircles from "@/components/OrbitingCircles";
import AppMockup from "@/components/AppMockup";
import WebMockup from "@/components/WebMockup";

export default function Home() {
	// useEffect(() => {
	// 	const lenis = new Lenis();

	// 	function raf(time) {
	// 		lenis.raf(time);
	// 		requestAnimationFrame(raf);
	// 	}

	// 	requestAnimationFrame(raf);
	// }, []);

	// const [isLoading, setIsLoading] = useState(true);

	// const handleLoaderComplete = () => {
	// 	setIsLoading(false);
	// };

	// if (isLoading) {
	// 	return <InitialLoader onComplete={handleLoaderComplete} />;
	// }

	return (
		<main className={styles.main}>
			<AppHeader />

			<HeroSection />
			<AppMockup />
			<BentoGrid />
			<WebMockup />
			<VacationOffers />

			{/* <div style={{ height: "140vh" }}></div> */}

			<DivergingElements />

			<Partners />

			{/* <Ripple mainCircleSize={350} mainCircleOpacity={0.5} numCircles={6} /> */}

			<WaitlistForm />

			<Announcement />

			<Footer />
		</main>
	);
}
