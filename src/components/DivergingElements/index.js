"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { useInView } from "react-intersection-observer";

const DivergingElements = () => {
	const containerRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	const { ref: brandRef, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});

	useEffect(() => {
		if (inView) {
			setIsVisible(true);
		}
	}, [inView]);

	const useScrollProgress = (ref, offset) => {
		const { scrollYProgress } = useScroll({
			target: ref,
			offset: offset,
		});

		return scrollYProgress;
	};

	const scrollScaleProgress = useScrollProgress(containerRef, [
		"start end",
		"end end",
	]);

	const transformedScaleProgress = useTransform(
		scrollScaleProgress,
		[0, 1],
		[3, 1.4]
	);

	// const startAnimation = false;

	const brandsArray = [
		{ name: "gift", bgColor: "#F5F0FF" },
		{ name: "makemytrip", bgColor: "#ff7b59" },
		{ name: "swiggy", bgColor: "#fc8019" },
		{ name: "zomato", bgColor: "#cb202d" },
		{ name: "bookmyshow", bgColor: "#ff7b59" },
		{ name: "croma", bgColor: "#bfa76f" },
		{ name: "mariott", bgColor: "#85d7ff" },
		{ name: "booking", bgColor: "#fc8019" },
		// { name: "zomato", bgColor: "#cb202d" },
	];

	const getRotation = (index) => {
		if (index === 0) return 0;
		if (index % 2 !== 0) {
			return Math.random() * 18;
		} else if (index % 3 == 0) {
			return -Math.random() * 10;
		} else {
			return -Math.random() * 5;
		}
	};

	const getPosition = (index) => {
		const angle = (360 / brandsArray.length) * index;
		const radius = 300;
		return {
			x: radius * Math.cos((angle * Math.PI) / 180),
			y: radius * Math.sin((angle * Math.PI) / 180),
		};
	};

	const totalDelay = (brandsArray.length - 1) * 0.1;

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				position: "relative",
				background: "#f1f1f1",
			}}
		>
			<div>
				<div
					ref={containerRef}
					style={{
						display: "flex",
						width: "100%",
						justifyContent: "center",
						alignItems: "center",
						background: "#000",
						padding: "7vw 0",
					}}
				>
					{brandsArray.map((brand, index) => (
						<motion.div
							ref={brandRef}
							key={index}
							initial={{
								scale: 1,
								x: 0,
								y: 0,
								rotate: getRotation(index),
							}}
							animate={
								isVisible && {
									scale: 1,
									x: getPosition(index).x,
									y: getPosition(index).y,
									rotate: 0,
								}
							}
							transition={{
								type: "spring",
								ease: "easeOut",
								duration: 2.5,
								delay: index === 0 ? totalDelay : 0.1 * index,
							}}
							style={{
								// scale: transformedScaleProgress,
								width: `9vw`,
								height: `9vw`,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								position: "absolute",
								background: brand.bgColor,
								boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
								borderRadius: "20px",
								zIndex: brandsArray.length - index,
								overflow: "hidden",
								padding: index === 0 ? "0.5em" : "",
							}}
						>
							<img
								src={`/images/${brand.name}.png`}
								width={"100%"}
								height={"100%"}
							/>
						</motion.div>
					))}

					<div
						style={{
							opacity: 0.2,
							fontFamily: "Space Grotesk",
							fontSize: "15vw",
							fontWeight: "800",
							textAlign: "center",
							lineHeight: "1",
							color: "#007295",
						}}
					>
						GIVE YOURSELF <br /> SOME CREDIT
					</div>
				</div>
			</div>
		</div>
	);
};

export default DivergingElements;
