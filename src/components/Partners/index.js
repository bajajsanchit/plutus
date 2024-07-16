"use client";
//styles
import styles from "./styles.module.scss";
//util
import Marquee from "react-fast-marquee";
import Image from "next/image";
//data
import CreditCards from "@/data/CardData";

const Partners = () => {
	const featuresText =
		"We bring you exclusive deals, jaw-dropping cashback offers, and incredible perks from top banks and credit card partners, all tailored just for you.";

	function createSubarrays(propertiesArray) {
		const subarrays = [];
		const itemsPerSubarray = 7;

		for (let i = 0; i < propertiesArray.length; i += itemsPerSubarray) {
			subarrays.push(propertiesArray.slice(i, i + itemsPerSubarray));
		}

		return subarrays;
	}

	const subarrays = createSubarrays(CreditCards);

	return (
		<div className={styles.partners_container}>
			<div className={styles.parent}>
				<div className={styles.parallax}>
					<div className={styles.vacation_container_text}>
						<p className={styles.title}>
							{"Unveil the treasure trove of credit card rewards with Plutus."}
						</p>

						<p className={styles.text}>{featuresText}</p>

						<div style={{ display: "flex", width: "100%" }}>
							<button className={styles.button}>Get Early Access</button>
							<button className={styles.know}>Know More</button>
						</div>
					</div>
				</div>

				<div className={styles.parallax_scroll_container}>
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
							src={`/images/${network}.png`}
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
	);
};
