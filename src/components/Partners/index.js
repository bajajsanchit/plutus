"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
//styles
import styles from "./styles.module.scss";
//components
import AnimatedWord from "@/components/AnimatedWord";
//utils
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CreditCards from "@/data/CardData";
import Marquee from "react-fast-marquee";

const Partners = () => {
	const featuresText =
		"We bring you exclusive deals, jaw-dropping cashback offers, and incredible perks from top banks and credit card partners, all tailored just for you.";
	const words = featuresText.split(" ");
	const totalWords = words.length;

	const controls = useAnimation();
	const [fadeInRef, inView] = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});

	const parallaxContainerRef = useRef(null);

	function createSubarrays(propertiesArray) {
		const subarrays = [];
		const itemsPerSubarray = 7;

		for (let i = 0; i < propertiesArray.length; i += itemsPerSubarray) {
			subarrays.push(propertiesArray.slice(i, i + itemsPerSubarray));
		}

		return subarrays;
	}

	const subarrays = createSubarrays(CreditCards);

	const useScrollProgress = (ref, offset) => {
		const { scrollYProgress } = useScroll({
			target: ref,
			offset: offset,
		});

		return scrollYProgress;
	};

	const parallaxContainer_scrollYProgress = useScrollProgress(
		parallaxContainerRef,
		["start end", "100% end"]
	);

	const translateYParallax = useTransform(
		parallaxContainer_scrollYProgress,
		[0, 1],
		[80, 0]
	);

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		} else {
			controls.start("hidden");
		}
	}, [controls, inView]);

	const variants = {
		visible: {
			opacity: 1,
			transition: { duration: 0.8, ease: "easeOut" },
		},
		hidden: {
			opacity: 0,
			transition: { duration: 0.8, ease: "easeIn" },
		},
	};

	const scroll_container_ref = useRef(null);

	const CardScroll = useScrollProgress(scroll_container_ref, [
		"start end",
		"100% end",
	]);

	const x_displacement_0 = useTransform(CardScroll, [0, 1], [0, 1500]);
	const x_displacement_1 = useTransform(CardScroll, [0, 1], [0, 2200]);
	const x_displacement_2 = useTransform(CardScroll, [0, 1], [0, 1800]);
	const x_displacement_3 = useTransform(CardScroll, [0, 1], [0, 2200]);

	const x_displacements = [
		x_displacement_0,
		x_displacement_1,
		x_displacement_3,
		x_displacement_2,
	];

	return (
		<div className={styles.partners_container}>
			<div className={styles.parent}>
				<div className={styles.parallax} ref={parallaxContainerRef}>
					<div className={styles.vacation_container_text}>
						<motion.p
							ref={fadeInRef}
							initial="hidden"
							animate={controls}
							variants={variants}
							className={styles.title}
						>
							{"Unveil the treasure trove of credit card rewards with Plutus."}
						</motion.p>

						<motion.p className={styles.text}>
							{/* {words.map((word, index) => (
								<AnimatedWord
									key={index}
									word={word}
									index={index}
									elementClass={styles.text}
									totalWords={totalWords}
									scrollProgress={parallaxContainer_scrollYProgress}
								/>
							))} */}

							{featuresText}
						</motion.p>

						<div style={{ display: "flex", width: "100%" }}>
							<button className={styles.button}>Get Early Access</button>
							<button className={styles.know}>Know More</button>
						</div>
					</div>
				</div>

				<div
					ref={scroll_container_ref}
					className={styles.parallax_scroll_container}
				>
					{subarrays.map((data, index) => (
						<Row
							key={index}
							arr={data}
							x={Math.floor(Math.random() * (300 - 180 + 1)) + 180}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Partners;

const Card = ({ title, description, background, network }) => {
	return (
		<div style={{ background: background }} className={styles.card}>
			<div className={styles.content_container}>
				<div>
					<div className={styles.title}>{description}</div>
					<div className={styles.description}>{title}</div>
				</div>

				<div>
					<div style={{ float: "right" }} className={styles.description}>
						<Image
							src={`/images/network-logos/${network}.png`}
							alt={network}
							width={80}
							height={80}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

const Row = ({ arr, x }) => {
	return (
		// <motion.div style={{ x: x }} >
		<Marquee speed={x}>
			<div className={styles.row_container}>
				{arr.map((data, index) => (
					<div className={styles.card_container} key={index}>
						<Card
							index={index}
							title={data.bank}
							description={data.card}
							background={data.backgroundColor}
							network={data.network}
						/>
					</div>
				))}
			</div>
		</Marquee>
		// </motion.div>
	);
};
