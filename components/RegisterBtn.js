import {Button} from "react-bootstrap";
import Link from "next/link";
import styles from "./SplashContent.module.css";

const RegisterBtn = () => {
	return(
		<Link href={"https://docs.google.com/forms/d/e/1FAIpQLSeZYLyoBJ69kGS5BGw1_yTE26e-yTZuZNHHxhYIveSKZjyh-w/viewform"} target={"_blank"}>
			<Button className={styles.splashActionBtn}>Register</Button>
		</Link>
	)
}

export default RegisterBtn;