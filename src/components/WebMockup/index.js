"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
//styles
import styles from "./styles.module.scss";

const WebMockup = () => {
	const sampleItems = [
		{
			index: "1",
			bank: "SBI",
			card: "SBI Cashback Card",
			network: "Visa",
			type: "Cashback",
			backgroundColor: "#FDE68A", // Bright pastel yellow
		},
		{
			index: "2",
			bank: "ICICI Bank",
			card: "Amazon Pay ICICI Bank Credit Card",
			network: "Visa",
			type: "Cashback",
			backgroundColor: "#A7F3D0", // Bright pastel mint
		},
		{
			index: "3",
			bank: "HDFC Bank",
			card: "HDFC Millennia Credit Card",
			network: "Visa",
			type: "Cashback",
			backgroundColor: "#BFDBFE", // Bright pastel blue
		},
		{
			index: "4",
			bank: "Axis Bank",
			card: "Axis Bank Magnus Credit Card",
			network: "Visa",
			type: "Premium",
			backgroundColor: "#FECACA", // Bright pastel red
		},
		{
			index: "5",
			bank: "Standard Chartered",
			card: "Standard Chartered Ultimate Credit Card",
			network: "Visa",
			type: "Rewards",
			backgroundColor: "#C4B5FD", // Bright pastel purple
		},
	];

	return (
		<div className={styles.parent}>
			<div className={styles.container}>
				<div className={styles.integrations}>
					<div className={styles.content}>
						<div className={styles.title}>
							<span>EVERYTHING IS COVERED</span>
							<p>
								We help you find a credit card for every transaction of life.
								{/* The credit card shopping experience you’ve been waiting for. */}
							</p>
						</div>

						<div>
							<p
								style={{
									color: "#bcbcbc",
								}}
								className={styles.text}
							>
								Effortlessly compare top credit cards, maximize rewards, and
								snag exclusive deals. Spend smarter, save bigger—experience the
								best of both worlds with Plutus.
							</p>
						</div>
					</div>
				</div>

				<div className={styles.types}>
					<div className={styles.box}>
						<div className={styles.content}>
							<div className={styles.title}>Dining</div>
							<div className={styles.text}>
								Everyone deserves a fun weekend! Reserve your spot at locations
								like Dear Donna, Miso Sexy, Diablo and get upto 20% off on your
								bill amount.
							</div>
						</div>

						<div className={styles.img}>
							<img src="/images/room-fine-dine.png" />
						</div>
					</div>

					<div className={styles.box}>
						<div className={styles.content}>
							<div className={styles.title}>Insurance</div>
							<div className={styles.text}>
								You read that right! We help you earn reward points for utility
								(electricity, gas etc.) and insurance bill payments.
							</div>
						</div>

						<div className={styles.img}>
							<img src="/images/room-hospital.png" />
						</div>
					</div>

					<div className={styles.box}>
						<div className={styles.content}>
							<div className={styles.title}>Grocery</div>
							<div className={styles.text}>
								Make grocery runs fun! Earn upto 5x reward point by shopping on
								Amazon Fresh, Jio Mart, Instamart and many more.
							</div>
						</div>

						<div className={styles.img}>
							<img src="/images/room-grocery.png" />
						</div>
					</div>
				</div>

				<div className={styles.imac}>
					<div className={styles.content}>
						<p className={styles.heading_sm}>Your Financial Ally</p>
						<p className={styles.text}>The Credit Card Experience</p>
						<p className={styles.heading_lg}>
							Plutus revolutionizes the way you manage your credit cards.
							Compare top offers, maximize rewards, and access exclusive deals
							tailored to your needs.
						</p>
						<p className={styles.heading_md}>Get Early Access</p>
					</div>

					<div className={styles.image}>
						<img src={"/images/plutus-imac-classic.png"} />
					</div>
				</div>

				<div className={styles.integrations}>
					<div className={styles.content}>
						<div className={styles.title}>
							<span>Search is over</span>
							<p>
								We help you find the credit card that is right for you.
								{/* The credit card shopping experience you’ve been waiting for. */}
							</p>
						</div>

						<div>
							<p
								style={{
									color: "#bcbcbc",
								}}
								className={styles.text}
							>
								Effortlessly compare top credit cards, maximize rewards, and
								snag exclusive deals. Spend smarter, save bigger—experience the
								best of both worlds with Plutus.
							</p>
						</div>
					</div>
				</div>

				<div className={styles.cards_container}>
					<div className={styles.cards}>
						<div>
							<CardStack items={sampleItems} offset={15} scaleFactor={0.1} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WebMockup;

const CardStack = ({ items, offset, scaleFactor }) => {
	let interval;
	const CARD_OFFSET = offset || 10;
	const SCALE_FACTOR = scaleFactor || 0.06;
	const [cards, setCards] = useState(items);

	useEffect(() => {
		startFlipping();

		return () => clearInterval(interval);
	}, []);

	function getColorByIndex(index) {
		switch (index) {
			case "5":
				console.log("hey");
				return `${styles.red}`;
			case "1":
				return `${styles.blue}`;
			case "2":
				return `${styles.yellow}`;
			case "3":
				return `${styles.orange}`;
			case "4":
				return `${styles.green}`;
			default:
				return null; // or any default value you'd like to return for indices not listed
		}
	}

	const startFlipping = () => {
		interval = setInterval(() => {
			setCards((prevCards) => {
				const newArray = [...prevCards]; // create a copy of the array
				newArray.unshift(newArray.pop()); // move the last element to the front
				return newArray;
			});
		}, 1800);
	};

	return (
		<div className={styles.card_container}>
			{cards.map((card, index) => {
				return (
					<motion.div
						key={card.index}
						className={`${getColorByIndex(card.index)} ${styles.card}`}
						style={{
							transformOrigin: "top center",
							// background: `${card.backgroundColor}`,
						}}
						animate={{
							top: index * -CARD_OFFSET,
							scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
							zIndex: cards.length - index, // decrease z-index for the cards that are behind
							opacity: 0.2 * (cards.length - index),
						}}
					>
						<div className={styles.content_container}>
							<div className={styles.bank}>{card.bank}</div>
							<div>
								<p className={styles.card_name}>{card.card}</p>
								<img
									src={`/images/${card.network}.png`}
									width={"80px"}
									height={"80px"}
								/>
							</div>
						</div>

						<div className={styles.content_container}>
							<div className={styles.bank}>{card.bank}</div>
							<div>
								<p className={styles.card_name}>{card.card}</p>
								{/* <p className={styles.network}>{card.network}</p> */}
								<img
									src={`/images/${card.network}.png`}
									width={"80px"}
									height={"80px"}
								/>
							</div>
						</div>
					</motion.div>
				);
			})}
		</div>
	);
};
