import React, { Component } from 'react'
import { Button,Row,Col,Form } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export class SignupClass extends Component {

    state={
        name:'',
        phone:'',
        password:'',
        confirmPassword:'',
    }
    onChangeHandler=(e)=>{
    this.setState({
          [ e.target.name]:e.target.value
       })
     
    }
    render() {
       const {name,phone,password,confirmPassword} =this.state
        return (
            <>
            
			<Col md={5} className=" p-5 bg-white full-height">
				<div className="login-main-left ">
					<div className="text-center mb-5 login-main-left-header  ">
						<img
							src="/img/logo.png"
							className="img-fluid"
							alt="LOGO"
						/>
						<h5 className="mt-3 mb-3">Welcome to Hulusthul</h5>
						<p>
							It is a long established fact that a reader <br />{" "}
							will be distracted by the readable.
						</p>
					</div>
					<Form className=""  >
                    <Form.Group>
							<Form.Label>Full Name</Form.Label>
							<Form.Control
                                name='name'
                                value={name}
								type="text"
								placeholder="Enter Name"
                                onChange={this.onChangeHandler}
                                required
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Mobile Number</Form.Label>
							<Form.Control
                            name='phone'
								type="text"
								placeholder="Enter mobile number"
                                onChange={this.onChangeHandler}
                                required
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
                            name='password'
								type="password"
								placeholder="Password"
                                onChange={this.onChangeHandler}
                                required
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control 
                            name='confirmPassword'
                            type="password"
                             placeholder="Confirm Password"
                             onChange={this.onChangeHandler}

                             required 
                             />
						</Form.Group>

						<div className="mt-4">
							<Row>
								<Col>
									<Button
										variant="outline-primary"
                                        type="submit"
										size="lg"
										block
                                        onClick={()=>console.log(this.state)}
									>
										Sign In
									</Button>
								</Col>
							</Row>
						</div>
					</Form>

					<div className="text-center mt-2">
						<p className="light-gray">
							Already have an account?{" "}
							<Link to="/auth/login">Log In</Link>
						</p>
					</div>
				</div>
			</Col>
		</>
        )
    }
}

export default SignupClass
