import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./Navigation.css";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";

import LogoutModal from "./LogoutModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faPlusCircle,
	faHeadphonesAlt,
	faStar,
	faEdit,
	faSignOutAlt,
	faUserCircle,
	faVideo,
	faCog,
	faSearch,
	faBell,
	faShoppingBag,
	faCartPlus,
	faUsers,
	faHome
} from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ props }) => {
	const [show, setShow] = useState(false);

	const history = useHistory();

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleLogout = (e) => {
		e.preventDefault();
		handleClose();
		history.push("/auth/login");
	};

	const handleMenuToggle = () => {
		props.setShowMenu(!props.showMenu);
	};

	return (
		<>
			<Navbar   sticky='top' className="osahan-nav d-nav">
			 	{
					 /*
					 &nbsp;&nbsp;
				<Button
					variant="link"
					size="sm"
					className="order-1 order-sm-0 text-secondary"
					id="sidebarToggle"
					onClick={handleMenuToggle}
				>
					<FontAwesomeIcon icon={faBars} />
					<i className="fas fa-star"></i>
				</Button>
				&nbsp;&nbsp;
					 */
				 }
			 
				<Navbar.Brand className="mr-1 brand">
					<Link to="/">
						<img className="img-fluid" src="img/logo.png" alt="" style={{width:'150px'}} />
					</Link>
				</Navbar.Brand>
				{/* Navbar Search*/}
				<Form
					inline
					className=" d-md-inline ml-auto  my-2 my-md-0 osahan-navbar-search"
				>
					<InputGroup>
						<FormControl
							type="text"
							placeholder="  Search"
							className=""
						/>
						<InputGroup.Append>
							<Button variant="light" style={{backgroundColor:'black'}}>
								<FontAwesomeIcon icon={faSearch}  />
							</Button>
						</InputGroup.Append>
					</InputGroup>
				</Form>
				{/*Navbar*/}
				<ul className="navbar-nav ml-auto ml-md-0 osahan-right-navbar">
				<li className="nav-item mx-1 home">
						<Link to="/" className="nav-link ">
							<FontAwesomeIcon icon={faHome}  Width='200px' />{" "}
							 
						</Link>
					</li>
				 
				<li className="nav-item mx-1 shop">
						<Link to="/product-categories" className="nav-link">
							<FontAwesomeIcon icon={faShoppingBag} fixedWidth />{" "}
							
						</Link>
					</li> 
				 
					
					
					<NavDropdown
						title={
							<>
								<FontAwesomeIcon icon={faCartPlus} fixedWidth  href='hulusthul.live/cart'/>
								<Badge variant="success">7</Badge>
							</>
						}
						id=""
						className="mx-1 no-arrow  cart"
						to='cart'
						style={{display:'none'}}
					>
						<NavDropdown.Item   style={{width:'300px'}} className="d-flex ">
						 <div>
							 <img width="80px" src="/img/product.png" alt="product" />
						 </div>
						 <div>
							 <p style={{fontSize:'15px', fontWeight:'700'}}>iPhone-12</p>
							 <p style={{fontSize:'10px', fontWeight:'700'}}>Vendor:Hulu Store</p>
							 <p style={{fontSize:'10px', fontWeight:'700'}}>1x120000</p>

						 </div>
						 
						</NavDropdown.Item>
						<NavDropdown.Item href="#"  className="d-flex ">
						 <div>
							 <img width="80px" src="/img/product.png" alt="product" />
						 </div>
						 <div>
							 <p style={{fontSize:'15px', fontWeight:'700'}}>iPhone-12</p>
							 <p style={{fontSize:'10px', fontWeight:'700'}}>Vendor:Hulu Store</p>
							 <p style={{fontSize:'10px', fontWeight:'700'}}>1x120000</p>

						 </div>
						 
						</NavDropdown.Item>
						<NavDropdown.Item href="#" className="d-flex cartBtn ">
							 <div>
								 <p style={{fontSize:'15px', fontWeight:'700', color:'black'}}>Subtotal(BDT) :</p>
							 </div>
							 <div>
								 <p style={{fontSize:'15px', fontWeight:'700', color:'black'}}>240000</p>
							 </div>
						</NavDropdown.Item>
						<Dropdown.Divider />
						<div className="d-flex cartBtn p-3">
						<div>
							 <Button> <a style={{color:'white'}} href="https://hulusthul.live/cart/" >View Cart</a>     </Button> 
						 </div>
						 <div>

						  <Button> <a style={{color:'white'}} href="https://hulusthul.live/checkout/" >Checkout</a> </Button> 
						  </div>
						</div>
					</NavDropdown>


				

					<NavDropdown
						title={
							<>
								<img src="img/s2.jpg" alt="Avatar" />
								{/*
								<span className="d-none d-md-inline ">
									{" "}
									Osahan
								</span>
								*/}
							</>
						}
						id=""
						className="no-arrow osahan-right-navbar-user user-dropdown-link account"
					>
						<Link
							to="/account"
							className="dropdown-item"
							rolw="button"
						>
							<FontAwesomeIcon icon={faUserCircle} fixedWidth />{" "}
							My Account
						</Link>
						<Link
							to="/upload"
							className="dropdown-item"
							rolw="button"
						>
							<FontAwesomeIcon icon={faPlusCircle} fixedWidth />{" "}
							Upload Video
						</Link>
						<Link
							to="/channels"
							className="dropdown-item"
							rolw="button"
						>
							<FontAwesomeIcon icon={faUsers} fixedWidth />{" "}
							Channels
						</Link>
						<Link
							to="/subscriptions"
							className="dropdown-item"
							rolw="button"
						>
							<FontAwesomeIcon icon={faVideo} fixedWidth />{" "}
							Subscriptions
						</Link>
						<Link
							to="/settings"
							className="dropdown-item"
							rolw="button"
						>
							<FontAwesomeIcon icon={faCog} fixedWidth /> Settings
						</Link>
						<Dropdown.Divider />
						<Link
							to="/auth/login"
							onClick={handleShow}
							className="dropdown-item"
							rolw="button"
						>
							<FontAwesomeIcon icon={faSignOutAlt} fixedWidth />{" "}
							Log out
						</Link>
					</NavDropdown>
				</ul>
			</Navbar>



			<Navbar   fixed='bottom' className="mobile-nav m-nav" >
			 	
			 
					 
			 
				 
				<div  style={{width:'100%', display:'flex', justifyContent:'space-between'}}>
				
				<div >
						<Link to="/" className="nav-link">
							<FontAwesomeIcon icon={faHome}  style={{fontSize:'25px',color:'rgba(0,0,0,.5)' }}  />

							 
						</Link>
				</div>

				<div>
						<Link to="/product-categories" className="nav-link">
							<FontAwesomeIcon icon={faShoppingBag}  style={{fontSize:'25px', color:'rgba(0,0,0,.5)'}}  /> 
						</Link>
				</div>

				<div >
					<Link to="/subscriptions" className="nav-link">
							<FontAwesomeIcon icon={faUsers}    style={{fontSize:'25px' ,color:'rgba(0,0,0,.5)'}} />
						</Link>
				</div>

					
					
				<div>
					<Link to="/subscriptions" className="nav-link">
							<FontAwesomeIcon icon={faVideo}  style={{fontSize:'25px',color:'rgba(0,0,0,.5)'}} />
						</Link>
				</div>

					 
				 

					 
				</div>
			</Navbar>


			 
		</>
	);
};

export default Navigation;
