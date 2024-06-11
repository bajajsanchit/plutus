"use client";
import { useEffect, useState } from "react";
//style
import WaitlistForm from "@/components/WaitlistForm";
import styles from "./page.module.scss";
//components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BentoGrid from "@/components/BentoGrid";
import InitialLoader from "@/components/InitialLoader";
import HeroSection from "@/components/HeroSection";
//utils
import Lenis from "lenis";
import DivergingElements from "@/components/DivergingElements";

export default function Home() {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

	// const [isLoading, setIsLoading] = useState(true);

	// if (isLoading) {
	// 	return <InitialLoader />;
	// }

	return (
		<main className={styles.main}>
			{/* <Header /> */}

			<HeroSection />

			<div style={{ height: "140vh" }}></div>

			<DivergingElements />

			<BentoGrid />

			<WaitlistForm />

			<Footer />
		</main>
	);
}
