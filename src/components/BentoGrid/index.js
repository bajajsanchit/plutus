"use client";
import { useRef, useEffect } from "react";
//styles
import styles from "./styles.module.scss";
//components
import AnimatedWord from "@/components/AnimatedWord";
//utils
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BentoGrid = () => {
	const featuresText =
		"Step into a world where every credit card transaction is a step towards unparalleled savings. With Plutus, compare leading credit cards effortlessly, maximize your reward points, and unlock exclusive deals that make every spend worthwhile. Experience the joy of smart spending and saving simultaneously—because you deserve the best of both worlds.";
	const words = featuresText.split(" ");
	const totalWords = words.length;

	const controls = useAnimation();
	const [fadeInRef, inView] = useInView({
		threshold: 0.2, // Adjusts how much of the element is visible before triggering
		triggerOnce: true, // Ensures animation only happens once
	});

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		} else {
			controls.start("hidden");
		}
	}, [controls, inView]);

	const parallaxContainerRef = useRef(null);
	const gridRef = useRef(null);

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

	const grid_scrollYProgress = useScrollProgress(gridRef, [
		"start end",
		"end end",
	]);

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

	const translateYParallax = useTransform(
		parallaxContainer_scrollYProgress,
		[0, 1],
		[80, 0]
	);

	const gridParallaxProgress = useTransform(
		grid_scrollYProgress,
		[0, 1],
		[1.1, 0.9]
	);

	return (
		<div className={styles.features_container}>
			<div ref={parallaxContainerRef} className={styles.parallax}>
				<div className={styles.features_container_text}>
					<motion.p
						ref={fadeInRef}
						initial="hidden"
						animate={controls}
						variants={variants}
						className={styles.title}
					>
						{"Your gateway to extraordinary privileges starts here."}
					</motion.p>

					<motion.p
						style={{
							translateY: translateYParallax,
							color: "#fff",
						}}
						className={styles.text}
					>
						{
							"Step into a world where every credit card transaction is a step towards unparalleled savings. With Plutus, compare leading credit cards effortlessly, maximize your reward points, and unlock exclusive deals that make every spend worthwhile. Experience the joy of smart spending and saving simultaneously—because you deserve the best of both worlds."
						}
					</motion.p>
				</div>
			</div>

			<div className={`${styles.grid_container}`}>
				<div ref={gridRef} className={`${styles.gridParallax}`}>
					<motion.div
						style={{
							scale: gridParallaxProgress,
							transformOrigin: "top",
						}}
						className={`${styles.grid}`}
					>
						<div className={`${styles.grid_r1}`}>
							<div className={`${styles.grid_r1_c1}`}>
								<div className={`${styles.grid_r1_c1_r1} ${styles.grid_item}`}>
									<p className={styles.title}>Max Rewards</p>
									<p className={styles.description}>
										Elevate Every Transaction to Maximum Rewards
									</p>
									<img src="/images/deposit.png" className="img" />
								</div>

								<div className={`${styles.grid_r1_c1_r2} ${styles.grid_item}`}>
									<p className={styles.title}>Deal Magnet</p>
									<p className={styles.description}>
										First in Line for Exclusive Credit Card Deals
									</p>
									<img src="/images/magnet.png" className="img" />
								</div>
							</div>
							<div className={`${styles.grid_r1_c2}`}>
								<div
									className={`${styles.grid_r1_c2_r1} ${styles.grid_item}   ${styles.special_two}`}
								>
									{/* <p className={styles.title}>Card Genius</p>
									<p className={styles.description}>
										Your Ultimate Card Selector: Compare, Choose, Celebrate
									</p> */}
									{/* <img src="/images/megaphone.png" className="img" /> */}
								</div>
								<div className={`${styles.grid_r1_c2_r2}`}>
									<div
										className={`${styles.grid_r1_c2_r2_c1} ${styles.grid_item} ${styles.grid_logo} `}
									>
										<svg
											width="80%"
											viewBox="0 0 614 168"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M71.2023 136C59.6023 136 50.5357 133.4 44.0023 128.2C37.6023 122.867 33.5357 115.8 31.8023 107H26.6023V85.4H30.4023C30.4023 91 31.5357 95.5333 33.8023 99C36.069 102.467 39.3357 104.933 43.6023 106.4C48.0023 107.867 53.3357 108.6 59.6023 108.6C66.1357 108.6 71.469 107.8 75.6023 106.2C79.7357 104.6 82.8023 102 84.8023 98.4C86.8023 94.8 87.8023 90 87.8023 84C87.8023 77.7333 86.8023 72.8667 84.8023 69.4C82.8023 65.8 79.7357 63.2667 75.6023 61.8C71.469 60.2 66.2023 59.4 59.8023 59.4C50.069 59.4 42.7357 61.2667 37.8023 65C32.869 68.6 30.4023 74.8667 30.4023 83.8H26.6023L24.4023 61.2H30.2023C31.9357 51.6 36.069 44.3333 42.6023 39.4C49.269 34.3333 58.469 31.8 70.2023 31.8C80.469 31.8 89.1357 33.9333 96.2024 38.2C103.402 42.4667 108.869 48.5333 112.602 56.4C116.336 64.1333 118.202 73.3333 118.202 84C118.202 94.5333 116.336 103.733 112.602 111.6C109.002 119.333 103.669 125.333 96.6023 129.6C89.669 133.867 81.2023 136 71.2023 136ZM30.4023 168H0.402344V33.8H28.2023V63.6L30.4023 66.2V168ZM160.676 134H130.676V-3.33786e-06H160.676V134ZM217.779 136C208.446 136 200.646 134.267 194.379 130.8C188.246 127.2 183.646 122.4 180.579 116.4C177.646 110.4 176.179 103.667 176.179 96.2V33.8H206.179V86.2C206.179 94.2 208.112 100.067 211.979 103.8C215.846 107.4 222.512 109.2 231.979 109.2C241.846 109.2 248.712 107.267 252.579 103.4C256.579 99.4 258.579 93.1333 258.579 84.6L262.379 84.4L264.579 103.4H258.979C258.179 109 256.179 114.267 252.979 119.2C249.912 124.133 245.446 128.2 239.579 131.4C233.846 134.467 226.579 136 217.779 136ZM288.579 134H260.579V103L258.579 102V33.8H288.579V134ZM374.518 134H349.718C337.985 134 328.785 131.133 322.118 125.4C315.451 119.667 312.118 110.467 312.118 97.8V14.4H342.118V94.4C342.118 99.4667 343.185 102.867 345.318 104.6C347.585 106.2 351.318 107 356.518 107H374.518V134ZM374.518 58.6H296.318V33.8H374.518V58.6ZM427.154 136C417.821 136 410.021 134.267 403.754 130.8C397.621 127.2 393.021 122.4 389.954 116.4C387.021 110.4 385.554 103.667 385.554 96.2V33.8H415.554V86.2C415.554 94.2 417.487 100.067 421.354 103.8C425.221 107.4 431.887 109.2 441.354 109.2C451.221 109.2 458.087 107.267 461.954 103.4C465.954 99.4 467.954 93.1333 467.954 84.6L471.754 84.4L473.954 103.4H468.354C467.554 109 465.554 114.267 462.354 119.2C459.287 124.133 454.821 128.2 448.954 131.4C443.221 134.467 435.954 136 427.154 136ZM497.954 134H469.954V103L467.954 102V33.8H497.954V134ZM563.893 136C547.093 136 534.16 132.867 525.093 126.6C516.026 120.2 511.493 111.2 511.493 99.6V99H541.493V100.8C541.493 105.333 543.093 108.4 546.293 110C549.626 111.467 555.56 112.2 564.093 112.2C572.093 112.2 577.36 111.533 579.893 110.2C582.56 108.733 583.893 106.533 583.893 103.6C583.893 100.8 582.893 98.8667 580.893 97.8C578.893 96.6 574.96 95.6 569.093 94.8L540.893 91.4C530.893 90.3333 523.16 87.5333 517.693 83C512.36 78.4667 509.693 71.9333 509.693 63.4C509.693 57.5333 511.426 52.2667 514.893 47.6C518.36 42.8 523.693 39 530.893 36.2C538.226 33.2667 547.626 31.8 559.093 31.8C570.026 31.8 579.293 33.2 586.893 36C594.626 38.6667 600.493 42.7333 604.493 48.2C608.493 53.6667 610.493 60.4667 610.493 68.6V69.2H580.493V68C580.493 65.2 579.893 62.9333 578.693 61.2C577.626 59.3333 575.426 57.9333 572.093 57C568.893 56.0667 564.226 55.6 558.093 55.6C550.626 55.6 545.626 56.3333 543.093 57.8C540.56 59.1333 539.293 61.4 539.293 64.6C539.293 67.1333 540.293 69.0667 542.293 70.4C544.426 71.6 548.76 72.6667 555.293 73.6L576.693 76.2C590.026 77.6667 599.493 80.7333 605.093 85.4C610.693 90.0667 613.493 96.5333 613.493 104.8C613.493 111.067 611.493 116.533 607.493 121.2C603.493 125.867 597.826 129.533 590.493 132.2C583.16 134.733 574.293 136 563.893 136Z"
												fill="white"
											/>
										</svg>
									</div>
									<div
										className={`${styles.grid_r1_c2_r2_c2} ${styles.grid_item}`}
									>
										<p className={styles.title}>Smart Shopper</p>
										<p className={styles.description}>
											Stay Updated: Latest Cards, Immediate Benefits
										</p>
										<img src="/images/shopping-cart.png" className="img" />
									</div>
								</div>
							</div>
						</div>
						<div className={`${styles.grid_r2}`}>
							<div
								className={`${styles.grid_r2_c1} ${styles.grid_item}  ${styles.special_one}`}
							>
								{/* <p>More Rewards, Less Effort</p> */}
								{/* <p className={styles.title}>Rewards Masterclass</p>
								<p className={styles.description}>
									Master the Art of Reward Maximization
								</p> */}
							</div>
							<div className={`${styles.grid_r2_c2} ${styles.grid_item}`}>
								<p className={styles.title}>Credit Wise</p>
								<p className={styles.description}>
									Learn, Grow, and Master Your Financial Health
								</p>

								<img src="/images/wallet.png" className="img" />
							</div>

							<div className={`${styles.grid_r2_c2} ${styles.grid_item}`}>
								<p className={styles.title}>Points Champion</p>
								<p className={styles.description}>
									Master the Art of Reward Maximization
								</p>
								<img src="/images/trophy.png" className="img" />
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default BentoGrid;
