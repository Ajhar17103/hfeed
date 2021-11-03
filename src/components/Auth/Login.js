import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {InputGroup,FormControl} from 'react-bootstrap'
import SignupClass from "./SignupClass";
function Login() {
	return (
		<>
			<Col md={5} className=" p-5 bg-white full-height">
				<div className="login-main-left">
					<div className="text-center mb-5 login-main-left-header pt-4">
						<img
							src="/img/logo.png"
							className="img-fluid"
							alt="LOGO"
						/>
						<h5 className="mt-3 mb-3">Welcome to Hulusthul</h5>
						<p> Enter Your 11 Digit Mobile Phone Number  <br />{" "}
					  to receive the verification code.
						</p>
					</div>
					<Form>
					<InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">+880</InputGroup.Text>
    <FormControl
      placeholder="Enter Your Phone Number"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

						{
						/*
						 <Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
							/>
						</Form.Group>
						*/}

						<div className="mt-4">
							<Row>
								<Col>
									<Button
										variant="outline-primary"
										size="lg"
										block
									>
									
									<Link to="/auth/verification">Get verification Code</Link>
									</Button>
								</Col>
							</Row>
						</div>
					</Form>

					<div className="text-center mt-5 ">
						<p className="light-gray">
							Don’t have an account?{" "}
							<Link to="/auth/register">Sign Up</Link>
						</p>
					 
					</div>
				</div>
			</Col>
		</>
	);
}
export default Login;
