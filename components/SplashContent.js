import styles from "./SplashContent.module.css";
import Image from "next/image";
import RegisterBtn from "./RegisterBtn";

const SplashContent = () => {
	return (
		<div className={`${styles.splash} accent-border-bottom`}>
			<div className={`${styles.splashSection} ${styles.splashGraphic}`}>
				<div className={styles.graphicWrapper}>
					<img
						src={"/favicon.png"}
						alt={"Mutant Cats Logo"}
						height={310}
						width={310}
					/>
				</div>
				<div style={{flexShrink: 4}}>
					<div className={styles.splashSection}>
						<i style={{marginBottom: "1 rem", display:"block"}}>Mutant Cats presents</i>
						<h1 className={`${styles.pageTitle} accent-text`}>Fish-a-thon</h1>
						<p className={`${styles.launchDate} accent-text`}>Worldwide Event: November 29, 2021</p>
						<p>Join us for our <b>inaugural</b> hackathon!   Contribute to the expanding Mutant Verse with the first ever DAO to purchase and fractionalize Blue Chip NFTs such as: CryptoPunks, Bored Ape Yacht Club, Fidenzas, and more</p>
					</div>
					<div className={styles.splashSection}>
						<div className={styles.splashActions}>
							<RegisterBtn>Register Here</RegisterBtn>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SplashContent;