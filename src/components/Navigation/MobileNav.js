import { useState } from "react";
import { NavLink,Link, useHistory } from "react-router-dom";

import "./Navigation.css";

import {Navbar,Nav} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";
import { withRouter } from "react-router";
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
	faHome,
	faFire,
	faUser
} from "@fortawesome/free-solid-svg-icons";
import SearchModal from "./SearchModal";

const MobileNav = ({ props }) => {
	
	return (
		<>
		 


			<Navbar   fixed='bottom' className="mobile-nav m-nav"    >
			 	
			 
					 
			 
				 
				<div  style={{width:'100%', display:'flex', justifyContent:'space-between'}}>
				
				<div >
						<NavLink to="/" className="nav-link text-center" exact activeClassName="activeLinkClasses" title="home" >
							<FontAwesomeIcon  icon={faFire}   className="mobNavFont"   />
							 <br/>
                        <span className=""> Home </span> 
							 
						</NavLink>
				</div>

				<div>
						<NavLink to="/shop" className="nav-link text-center" exact activeClassName="activeLinkClasses" title="shop">
							<FontAwesomeIcon   icon={faShoppingBag}  className="mobNavFont"  /> 
							<br/>
                          Shop  
						</NavLink>
				</div>

				<div >
					<NavLink to="/store" className="nav-link text-center" exact activeClassName="activeLinkClasses" title="store">
							<FontAwesomeIcon  icon={faUsers}    className="mobNavFont" />
							<br/>
							Stores
						</NavLink>
				</div>

					
					
				 <div>
					<NavLink to="/stream" className="nav-link text-center" exact activeClassName="activeLinkClasses" title="live">
							<FontAwesomeIcon  icon={faVideo}  className="mobNavFont" />
							<br/>
							Live
						</NavLink>
				</div> 
				<div >
					<NavLink to="/my-account" className="nav-link text-center" exact activeClassName="activeLinkClasses" title="profile">
							<FontAwesomeIcon  icon={faUser}    className="mobNavFont" />
							<br/>
							Profile
						</NavLink>
				</div>
				 
				{/* <div>
					<a href="https://shop.hulusthul.live/profile" className="nav-link text-center"   activeClassName="activeLinkClasses">
							<FontAwesomeIcon  icon={faUser}  className="mobNavFont" />
							<br/>
							profile
						</a>
				</div>  */}
			
				 

					 
				</div>
			</Navbar>


			 
		</>
	);
};

export default  withRouter( MobileNav);
