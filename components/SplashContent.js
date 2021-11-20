import styles from "./SplashContent.module.css";
import {Button} from "react-bootstrap";

const SplashContent = () => {
	return (
		<div className={styles.splash}>
			<div className={styles.splashSection}>
				<p>Mutant Cats presents</p>
				<h1 className={`${styles.pageTitle} accent-text`}>Fish-a-thon</h1>
				<p className={'accent-text'}>Worldwide Event: November 29, 2021</p>
			</div>
			<div className={styles.splashSection}>
				<p>Join us for our inaugural hackathon!   Contribute to the expanding Mutant Verse with the first ever DAO to purchase and fractionalize Blue Chip NFTs such as: CryptoPunks, Bored Ape Yacht Club, Fidenzas, and more</p>
			</div>
			<div className={styles.splashSection}>
				<div className={styles.splashActions}>
					<Button className={styles.splashActionBtn}>Register Here</Button>
				</div>
			</div>
		</div>
	)
}

export default SplashContent;