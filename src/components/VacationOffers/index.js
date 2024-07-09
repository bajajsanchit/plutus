"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
//styles
import styles from "./styles.module.scss";
//utils
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//data
import marriottProperties from "@/data/VacationOffers";

const VacationOffers = () => {
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

	return (
		<div className={styles.vacation_container}>
			<div className={styles.parallax_scroll_container}>
				{subarrays.map((data, index) => (
					<Column key={index} arr={data} />
				))}
			</div>

			<div className={styles.parallax}>
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

					<p
						style={{
							color: "#bcbcbc",
						}}
						className={styles.text}
					>
						{
							"From exotic getaways to lavish suites, our super saver deals let you experience the best without breaking the bank. Start your journey to unforgettable memories today!"
						}
					</p>

					<div style={{ display: "flex", width: "100%" }}>
						<button className={styles.button}>Get Early Access</button>
						<button className={styles.know}>Know More</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VacationOffers;

const Card = ({ title, image_name, points }) => {
	return (
		<div className={styles.card}>
			<div className={styles.image_container}>
				<Image fill className={styles.img} src={image_name} alt={title} />
			</div>

			<div className={styles.content_container} style={{ background: "#fff" }}>
				<div className={styles.title}>{title}</div>
				<div className={styles.points}>{points} points/night</div>
			</div>
		</div>
	);
};

const Column = ({ arr }) => {
	return (
		<div className={styles.cards_container}>
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
		</div>
	);
};
