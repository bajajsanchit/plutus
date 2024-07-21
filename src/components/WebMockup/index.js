//styles
import styles from "./styles.module.scss";

const WebMockup = () => {
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
					{/* <div className={styles.box}>
						<div className={styles.content}>
							<div className={styles.title}>Utility</div>
							<div className={styles.text}>Utility</div>
						</div>

						<div className={styles.img}>
							<img src="/images/room-gym.png" />
						</div>
					</div> */}

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
						<img src={"/images/plutus-imac-blue.png"} />
					</div>
				</div>

				{/* <div className={styles.imac}>
					<div className={styles.content}>
						<p className={styles.heading_sm}>Your Financial Ally</p>
						<p className={styles.text}>The Credit Card Experience</p>
						<p className={styles.heading_lg}>
							Plutus revolutionizes the way you manage your credit cards.
							Compare top offers, maximize rewards, and access exclusive deals
							tailored to your needs. Join Plutus today and take control of your
							financial future with confidence.
						</p>
						<p className={styles.heading_md}>Get Early Access</p>
					</div>

					<div className={styles.image}>
						<img src={"/images/plutus-mac.png"} />
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default WebMockup;
