// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Head from "next/head";
export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Mutant Cats: Fish-a-thon</title>
				<link rel="icon" href="/logo.png"/>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&family=Roboto+Mono:wght@200;300;400;500;600;700&display=swap"
					rel="stylesheet"
					type={"text/css"}
				/>
			</Head>
			<Component {...pageProps} />
		</>
	)
}