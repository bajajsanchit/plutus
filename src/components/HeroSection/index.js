import GlassSection from "../GlassSection";
import BackgroundBlobs from "../BackgroundBlobs";
import Header from "../Header";
import styles from "./styles.module.scss";

export default function Home() {
	return (
		<div>
			<main className={styles.main}>
				<BackgroundBlobs />
				<div className={styles.header}>
					<Header />
				</div>
				<div className={styles.content}>
					<GlassSection />
				</div>
			</main>
		</div>
	);
}
