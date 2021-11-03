import { Link } from "react-router-dom";
import './Auth.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {InputGroup,FormControl} from 'react-bootstrap'

function Verification() {
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
						<p> Enter 6 digit verification code sent to  <br />{" "}
					 <b> 0123456789</b>
						</p>
					</div>
					<Form>
					<InputGroup className="mb-3">
   
    <InputGroup.Text id="basic-addon1 " className="textBox"></InputGroup.Text>
    <InputGroup.Text id="basic-addon1" className="textBox"></InputGroup.Text>
	<InputGroup.Text id="basic-addon1" className="textBox"></InputGroup.Text>
	<InputGroup.Text id="basic-addon1" className="textBox"></InputGroup.Text>
	<InputGroup.Text id="basic-addon1" className="textBox"></InputGroup.Text>
	<InputGroup.Text id="basic-addon1" className="textBox"></InputGroup.Text>
    
  </InputGroup>

 
		 

						<div className="mt-4">
							<Row>
								<Col>
									<Button
										variant="outline-primary"
										size="lg"
                                      
										block
									>
									
									<Link to="/">Submit</Link>
									</Button>
								</Col>
							</Row>
						</div>
					</Form>

				 </div>
			</Col>
		</>
	);
}
export default Verification;
