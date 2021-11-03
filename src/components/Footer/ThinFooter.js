import "./FatFooter.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ThinFooter = () => {
	return (
		<>
			<footer className="sticky-footer"   >
				<Container>
					<Row className="no-gutters">
						<Col lg={6} sm={6}>
							<p className="mt-1 mb-0">
								&copy; Copyright 2021{" "}
								<strong className="text-dark">Hulusthul.live</strong>.
								All Rights Reserved
								<br />
								 
							</p>
						</Col>
						<Col lg={6} sm={6} className="text-right">
							<div className="app">
								<a href="#" className="mr-1">
									<img alt="" src="img/logo.png" />
								</a>
								 
							</div>
						</Col>
					</Row>
				</Container>
			</footer>
		</>
	);
};

export default ThinFooter;
