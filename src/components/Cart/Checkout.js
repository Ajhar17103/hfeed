import React from 'react'
import {Form, Container,Row,Col,Button} from 'react-bootstrap';
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import './style.css'

function Checkout() {
    return (
        <div>
            	<ContentWrapper>
				<Container fluid>
                <section className="section-padding">
					<div>
						<Row className='d-flex' style={{justifyContent: "space-around"}}>
							<Col
								lg={12}
								md={12}
								className="section-title text-left mb-4"
							>
								<h2>Checkout</h2>
                                <hr/>
							</Col>

						<Col lg={7} md={7} sm={12} className="card shadow py-5 mb-5">
						<h4 className='pb-3'>Billing Details</h4>
                        <Form className="col-lg-12 col-md-12" noValidate>

								<Form.Row>
									<Form.Group as={Col} controlId="full-name">
										<Form.Label>
										First Name
											<span className="text-danger">
												*
											</span>
										</Form.Label>
										<Form.Control
											type="text"
											placeholder="First Name"
											required
										/>
									</Form.Group>

                                    <Form.Group as={Col} controlId="full-name">
										<Form.Label>
									Last Name
											<span className="text-danger">
												*
											</span>
										</Form.Label>
										<Form.Control
											type="text"
											placeholder="Last Name"
											required
										/>
									</Form.Group>

								</Form.Row>
                                
                                <Form.Row>
									<Form.Group as={Col} controlId="full-name">
										<Form.Label>
									Compnay Name
											 
										</Form.Label>
										<Form.Control
											type="text"
											placeholder="Compnay Name"
											required
										/>
									</Form.Group>

                                  
								</Form.Row>
                                <Form.Row>
								 

                                    <Form.Group as={Col} controlId="full-name">
										<Form.Label>
								Country
											<span className="text-danger">
												*
											</span>
										</Form.Label>
										<Form.Control
											type="text"
											placeholder="Country"
											required
										/>
									</Form.Group>

								</Form.Row>

                                
                                <Form.Row>
									<Form.Group as={Col} controlId="full-name">
										<Form.Label>
									Street adrees
											 
										</Form.Label>
										<Form.Control
											type="text"
											placeholder="Street Number House Number and Appartment Number"
											required
										/>
									</Form.Group>

                                

								</Form.Row>

                                 
                                <Form.Row>
								 

                                    <Form.Group as={Col} controlId="full-name">
										<Form.Label>
							Town/City
											<span className="text-danger">
												*
											</span>
										</Form.Label>
										<Form.Control
											type="text"
											placeholder="Town/City"
											required
										/>
									</Form.Group>

								</Form.Row>

                                <Form.Row>
									<Form.Group as={Col} controlId="full-name">
										<Form.Label>
									District
											 
										</Form.Label>
										<Form.Control
											type="text"
											placeholder="Street Number House Number and Appartment Number"
											required
										/>
									</Form.Group>

                                    <Form.Group as={Col} controlId="full-name">
										<Form.Label>
							Postcode/ZIP 
											 
										</Form.Label>
										<Form.Control
											type="text"
											placeholder="Town/City"
											required
										/>
									</Form.Group>

								</Form.Row>

                                <Form.Row>
									<Form.Group as={Col} controlId="full-name">
										<Form.Label>
									District
											 
										</Form.Label>
										<Form.Control
											type="text"
											placeholder="Street Number House Number and Appartment Number"
											required
										/>
									</Form.Group>

                                   

								</Form.Row>


								<Form.Row>
									<Form.Group
										as={Col}
										controlId="phone-number"
									>
										<Form.Label>
											Phone Number
											<span className="text-danger">
												*
											</span>
										</Form.Label>
										<Form.Control
											type="text"
											placeholder="Phone Number"
											required
										/>
									</Form.Group>
									<Form.Group as={Col} controlId="email">
										<Form.Label>
											Email Address
											<span className="text-danger">
												*
											</span>
										</Form.Label>
										<Form.Control
											type="email"
											placeholder="Email Address"
											required
										/>
									</Form.Group>
								</Form.Row>

						 
							</Form>

                        </Col>
						
						<Col lg={4} md={4} sm={12} className="card shadow py-5 mb-3 " style={{height:'100%'}}>
						<h4 className='pb-3'>Your order</h4>
                        <Form className="col-lg-12 col-md-12  " noValidate >

								<Form.Row>
								 
										 
								 
								<Form.Group as={Col} controlId="full-name">
										<Form.Label>
									Product
											 
										</Form.Label >
										<hr className='hr' />
										<p style={{color:'black'}}>
										<strong>Samsung S-20 * 1</strong>
										<br/>
										Vendor: Hulu Store
										</p> 
									</Form.Group>

									<Form.Group as={Col} controlId="full-name" >
										<Form.Label>
									Subtotal
											 
										</Form.Label>
										<hr className='hr' />
										<p style={{color:'black',}}> <strong>10000000</strong> </p>
									</Form.Group>
										  
								</Form.Row>
                                <hr className='hr' />
                                <Form.Row>
									<Form.Group as={Col} controlId="full-name">
										<Form.Label>
								  Shipping: Hulu Store
								  <br/>
								  Flat Rate :
											 
										</Form.Label>
										 
									</Form.Group>
									<Form.Group as={Col} controlId="full-name" className='mt-3'>
										<Form.Label>
								 50.00
											 
										</Form.Label>
										 
									</Form.Group>
                                  
								</Form.Row>
								<hr className='hr'/>
                                <Form.Row >
								 

                                    <Form.Group as={Col} controlId="full-name" >
										<Form.Label style={{fontSize:'20px', color:'black'}}>
										Subtotal :
											 
										</Form.Label>
										 
									</Form.Group>
									<Form.Group as={Col} controlId="full-name">
										<Form.Label className='text-danger'  style={{fontSize:'20px'}}>
					
										 1000000
										</Form.Label>
										 
									</Form.Group>

								</Form.Row>
								<hr className='hr' />
								<Form.Row >
								 

								 <Form.Group as={Col} controlId="full-name" >
									 <Form.Label  >
									 
										  
									 </Form.Label>
						 
								 
									  
								 </Form.Group>
								  

							 </Form.Row>
                          
								<Button variant="success"  >Place to Order</Button>
								 
							</Form>

                        </Col>
                       
						</Row>
					</div>
				</section>
                </Container>
                </ContentWrapper>
        </div>
    )
}

export default Checkout;

