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
//data
import marriottProperties from "@/data/VacationOffers";

const VacationOffers = () => {
	const { height } = useDimension();

	const featuresText =
		// "Discover the hidden power of your credit card reward points! At Plutus, we turn your points into dream vacations at luxury hotels.
		"From exotic getaways to lavish suites, our super saver deals let you experience the best without breaking the bank. Start your journey to unforgettable memories today!";
	const words = featuresText.split(" ");
	const totalWords = words.length;

	function createSubarrays(propertiesArray) {
		const subarrays = [];
		const itemsPerSubarray = 4;

		for (let i = 0; i < propertiesArray.length; i += itemsPerSubarray) {
			subarrays.push(propertiesArray.slice(i, i + itemsPerSubarray));
		}

		return subarrays;
	}

	const subarrays = createSubarrays(marriottProperties);

	const controls = useAnimation();
	const [fadeInRef, inView] = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});

	const parallaxContainerRef = useRef(null);
	const scroll_container_ref = useRef(null);

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

	const scrollIndicator = useScrollProgress(scroll_container_ref, [
		"start end",
		"100% end",
	]);

	const y_displacement_0 = useTransform(
		scrollIndicator,
		[0, 1],
		[0, height * 1]
	);

	const y_displacement_1 = useTransform(
		scrollIndicator,
		[0, 1],
		[0, height * 1.9]
	);

	const y_displacement_2 = useTransform(
		scrollIndicator,
		[0, 1],
		[0, height * 1.65]
	);

	const y_displacement_3 = useTransform(
		scrollIndicator,
		[0, 1],
		[0, height * 2.5]
	);

	const y_displacements = [
		y_displacement_0,
		y_displacement_1,
		y_displacement_2,
		y_displacement_3,
	];

	return (
		<div className={styles.vacation_container}>
			<div
				ref={scroll_container_ref}
				className={styles.parallax_scroll_container}
			>
				{subarrays.map((data, index) => (
					<Column key={index} arr={data} y={y_displacements[index]} />
				))}
			</div>

			<div className={styles.parallax} ref={parallaxContainerRef}>
				<div className={styles.vacation_container_text}>
					<motion.p
						ref={fadeInRef}
						initial="hidden"
						animate={controls}
						variants={variants}
						className={styles.title}
					>
						{"Unlock luxury stays with your credit card reward points."}
					</motion.p>

					<motion.p
						style={{
							// translateY: translateYParallax,
							color: "#007295",
						}}
						className={styles.text}
					>
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
						{
							"From exotic getaways to lavish suites, our super saver deals let you experience the best without breaking the bank. Start your journey to unforgettable memories today!"
						}
					</motion.p>

					<div style={{ display: "flex", width: "100%" }}>
						<button className={styles.button}>Join Waitlist</button>
						<button className={styles.know}>Know More</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VacationOffers;

const Card = ({ title, description, image_name, points }) => {
	return (
		<div className={styles.card}>
			<div className={styles.image_container}>
				<Image fill className={styles.img} src={image_name} alt={title} />
			</div>

			<div className={styles.content_container} style={{ background: "#fff" }}>
				<div className={styles.title}>{title}</div>
				{/* <div className={styles.description}>{description}</div> */}
				<div className={styles.points}>{points} points/night</div>
			</div>
		</div>
	);
};

const Column = ({ arr, y = 0 }) => {
	return (
		<motion.div style={{ y }} className={styles.cards_container}>
			{arr.map((data, index) => (
				<Card
					key={index}
					image_name={data.image}
					title={data.title}
					description={data.description}
					points={data.pointsNeeded}
					color={data.color}
				/>
			))}
		</motion.div>
	);
};

const useDimension = () => {
	const [dimension, setDimension] = useState({ width: 0, height: 0 });

	const updateDimension = () => {
		const { innerHeight, innerWidth } = window;
		setDimension({ width: innerWidth, height: innerHeight });
	};

	useEffect(() => {
		updateDimension();

		window.addEventListener("resize", updateDimension);

		return () => {
			window.removeEventListener("resize", updateDimension);
		};
	}, []);

	return dimension;
};
