"use client";
import {
	motion,
	useScroll,
	useTransform,
	useMotionValueEvent,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";
import styles from "./styles.module.scss";

const DivergingElements = () => {
	const containerRef = useRef(null);
	const [startAnimation, setStartAnimation] = useState(false);

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

	useMotionValueEvent(transformedScaleProgress, "change", (value) => {
		if (value === 1.4 && startAnimation) {
			setStartAnimation(true);
		}
	});

	const brandsArray = [
		{ name: "gift", bgColor: "#F5F0FF" },
		{ name: "makemytrip", bgColor: "#ff7b59" },
		{ name: "swiggy", bgColor: "#fc8019" },
		{ name: "zomato", bgColor: "#cb202d" },
		{ name: "bookmyshow", bgColor: "#f79b21" },
		{ name: "tanishq", bgColor: "#bfa76f" },
		{ name: "mariott", bgColor: "#85d7ff" },
		{ name: "bookmyshow", bgColor: "#f79b21" },
		{ name: "swiggy", bgColor: "#fc8019" },
		{ name: "zomato", bgColor: "#cb202d" },
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
		const angle = (360 / brandsArray.length) * index; // distribute angles evenly
		const radius = 300; // radius of the circle
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
				minHeight: "225vh",
				position: "relative",
				background: "#f1f1f1",
			}}
		>
			<div
				style={{
					position: "sticky",
					width: "100%",
					top: "0",
				}}
			>
				<div
					ref={containerRef}
					style={{
						display: "flex",
						height: "100vh",
						width: "100%",
						justifyContent: "center",
						alignItems: "center",
						background: "lightpink",
					}}
				>
					{brandsArray.map((brand, index) => (
						<motion.div
							key={index}
							initial={{
								scale: 1,
								x: 0,
								y: 0,
								rotate: getRotation(index),
							}}
							animate={
								startAnimation
									? {
											scale: 1,
											x: getPosition(index).x,
											y: getPosition(index).y,
											rotate: 0,
									  }
									: {}
							}
							transition={{
								type: "spring",
								ease: "easeOut",
								duration: 2.5,
								delay: index === 0 ? totalDelay : 0.1 * index, // First item has maximum delay
							}}
							style={{
								scale: transformedScaleProgress,
								width: `8vw`,
								height: `8vw`,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								position: "absolute",
								background: brand.bgColor,
								boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
								borderRadius: "20px",
								zIndex: brandsArray.length - index,
							}}
						>
							{index !== 8 ? "" : brand.name}
						</motion.div>
					))}

					<div
						style={{
							opacity: 0.05,
							fontFamily: "Space Grotesk",
							fontSize: "15vw",
							fontWeight: "800",
							textAlign: "center",
							lineHeight: "1",
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
