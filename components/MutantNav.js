import {Navbar, Container, Col, Row} from "react-bootstrap";
import Link from "next/link";

const MutantNav = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">
					<img
						alt=""
						src="/logo.svg"
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>{' '}
					Mutant Devs
				</Navbar.Brand>
				<Row>
					<Col>
						<Link href="/about" as={process.env.BACKEND_URL + '/about'}>
							<a>About</a>
						</Link>
					</Col>
				</Row>
			</Container>
		</Navbar>
	)
}

export default MutantNav;