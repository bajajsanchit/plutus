import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

const BackgroundBlobs = () => {
	const bubbleRef = useRef(null);

	useEffect(() => {
		const interBubble = bubbleRef.current;
		let curX = 0;
		let curY = 0;
		let tgX = 0;
		let tgY = 0;

		const move = () => {
			if (!interBubble) return;
			curX += (tgX - curX) / 20;
			curY += (tgY - curY) / 20;
			interBubble.style.transform = `translate(${Math.round(
				curX
			)}px, ${Math.round(curY)}px)`;
			requestAnimationFrame(move);
		};

		const handleMouseMove = (event) => {
			tgX = event.clientX;
			tgY = event.clientY;
		};

		window.addEventListener("mousemove", handleMouseMove);
		move();

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div className={styles.gradient_bg}>
			<svg xmlns="http://www.w3.org/2000/svg">
				<defs>
					<filter id="goo">
						<feGaussianBlur
							in="SourceGraphic"
							stdDeviation="10"
							result="blur"
						/>
						<feColorMatrix
							in="blur"
							mode="matrix"
							values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
							result="goo"
						/>
						<feBlend in="SourceGraphic" in2="goo" />
					</filter>
				</defs>
			</svg>

			<div className={styles.gradients_container}>
				<div className={styles.gradient_orb_1}></div>
				<div className={styles.gradient_orb_2}></div>
				<div className={styles.gradient_orb_3}></div>
				<div className={styles.gradient_orb_4}></div>
				<div className={styles.gradient_orb_5}></div>
				<div ref={bubbleRef} className={styles.interactive}></div>
			</div>
		</div>
	);
};

export default BackgroundBlobs;
