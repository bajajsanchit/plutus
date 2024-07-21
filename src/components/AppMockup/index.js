//styles
import styles from "./styles.module.scss";

const AppMockup = () => {
	return (
		<div className={styles.parent}>
			<div className={styles.container}>
				<div className={styles.image}>
					<img src={"/images/plutus-mockup-2.png"} />
				</div>

				<div className={styles.content}>
					<p className={styles.heading_sm}>Your Financial Ally</p>
					<p className={styles.text}>The Credit Card Experience</p>
					<p className={styles.heading_lg}>
						Plutus revolutionizes the way you manage your credit cards. Compare
						top offers, maximize rewards, and access exclusive deals tailored to
						your needs.
					</p>
					<p className={styles.heading_md}>Get Early Access</p>
				</div>
			</div>
		</div>
	);
};

export default AppMockup;
