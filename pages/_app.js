// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Head from "next/head";
export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Fishathon</title>
			</Head>
			<Component {...pageProps} />
		</>
	)
}