import "./FatFooter.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMobile,
	faGlobe,
	faEnvelope,
	faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const FatFooter = () => {
	return (
		<>
			<footer className="sticky-footer">
				<section className="section-padding footer-list px-5">
					 
						<Row>
							<Col lg={3} md={3}>
								<div className="footer-logo">
									<Link className="logo" to="/">
										<img
											alt=""
											src="img/logo.png"
											className="img-fluid"
											width='200px'
										/>
									</Link>
								</div>
								<p>
								Call us 24/7
								</p>
								<p style={{color:'#b1362f', fontSize:'25px'}}><strong>0123456789</strong> </p>
								<p>
								476/C, Malibagh DIT Road, Dhaka- 1219
								</p>
							 
								<p className="mb-0">
									<a href="#" className="text-dark">
										 
									hulusthul.live@outlook.com
									</a>
								</p>
								 
							</Col>

							<Col lg={2} md={2}>
								<h6 className="mb-4">Company Info</h6>
								<ul>
									<li>
										<a href="#">About Hulusthul</a>
									</li>
									<li>
										<a href="#">Blog</a>
									</li>
									<li>
										<a href="#">Contact</a>
									</li>
									<li>
										<a href="#">Our Location</a>
									</li>
									
								</ul>
							</Col>

							<Col lg={2} md={2}>
								<h6 className="mb-4">Policy</h6>
								<ul>
									<li>
										<a href="#">Return & Cancellation</a>
									</li>
									<li>
										<a href="#">Credit Policy</a>
									</li>
									<li>
										<a href="#">Privacy Statement</a>
									</li>
									<li>
										<a href="#">Terms & Conditions</a>
									</li>
									 
									 
								</ul>
							</Col>
							<Col lg={2} md={2}>
								<h6 className="mb-4">Partner Relation</h6>
								<ul>
									<li>
										<a href="#">Have Coffe With Us</a>
									</li>
									<li>
										<a href="#">Investor Relations</a>
									</li>
									 
								</ul>
							</Col>

							<Col lg={3} md={3}>
								<h6 className="mb-4">Payment Options</h6>
								 
								 
								<div className="app">
									<a href="#" className="mr-1">
										<img alt="" src="/img/favi.png" />
									</a>
									<a href="#" className="mr-1">
										<img alt="" src="/img/rsz_master.png" />
									</a>
									<a href="#">
										<img alt="" src="/img/rsz_bkash.png"/>
									</a>
									<a href="#">
										<img alt="" src="/img/rsz_dbbl.png"/>
									</a>
									<a href="#">
										<img alt="" src="/img/rsz_nogad.png"/>
									</a>
								</div>
								 
							</Col>
						</Row>
						<hr/>
						<Row>
							<Col lg={12} md={12} >
								<div style={{textAlign:'center'}}>
								<span >Copyright © 2021 - Hulusthul.live. All rights reserved.</span>
									</div>
							 
								 
							</Col>

							 
						</Row>
				 
				</section>
			</footer>
		</>
	);
};

export default FatFooter;
