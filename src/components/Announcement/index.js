import styles from "./styles.module.scss";

const Announcement = () => {
	return (
		<div className={styles.announcement_container}>
			<div className={styles.announcement_text}>
				<span className={styles.coming_soon}>Coming soon</span>
				<p>
					The All-in-One <br /> Credit Card App.
				</p>
				<span className={styles.timeline}>September 2024</span>
			</div>
			<div className={styles.announcement_mockup}>
				<img src="images/mockup.png" />
			</div>
		</div>
	);
};

export default Announcement;
