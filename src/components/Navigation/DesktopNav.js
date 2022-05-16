import { useState,Component } from "react";
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
import swal from 'sweetalert'
import {
	faBars,
	faEnvelope,
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
	faUser,
	faHome,
	faUsers
} from "@fortawesome/free-solid-svg-icons";
import SearchModal from "./SearchModal";
import axios from "axios";


export class DesktopNav extends Component {
    state={
        show:true,
        scrollPos:0,
		accountinfo:[]
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
		
		const id=localStorage.getItem('id')
		axios.get(`https://shop.hoolo.live/api/users/profile/${id}`)
		.then(res=>{
			this.setState({
				accountinfo:[res.data],
			})
		})
		.catch(err=>{
			console.log(err)
		})

    }
	componentDidUpdate(){
   
		
		const id=localStorage.getItem('id')
		axios.get(`https://shop.hoolo.live/api/users/profile/${id}`)
		.then(res=>{
			this.setState({
				accountinfo:[res.data],
			})
		})
		.catch(err=>{
			console.log(err)
		})

    }
	
    componentWillUnmount(){
     window.removeEventListener('scroll',this.handleScroll)
    }
    handleScroll=()=>{
           
           this.setState({
               scrollPos:document.body.getBoundingClientRect().top,
               show:document.body.getBoundingClientRect().top > this.state.scrollPos
           })
    }
	handleShow=()=>{
		this.setState({
			show:false
		})
	}
   

  Signout=()=>{
		  
			
		  localStorage.removeItem('token')
		  localStorage.removeItem('id')
		  swal('See You Soon', 'Singout Successful', 'success');
		  this.props.history.push('/auth/login')
	
	
	
	   }
    render() {
        return (
            <>
                <Navbar    sticky='top' className="osahan-nav d-nav">
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
			 
				<Navbar.Brand className="brand">
					<Link to="/" >
						<img className="img-fluid" src="/img/logo-white.jpeg" alt="hoolo"   />
					</Link>
				</Navbar.Brand>
				{/* Navbar Search*/}
				<Form
					inline
					className=" d-md-inline ml-auto  my-2 my-md-0 osahan-navbar-search basicNav"
				>
					<InputGroup>
						<FormControl
							type="text"
							placeholder="  Search"
							className=""
						/>
						<InputGroup.Append>
							<Button variant="light" style={{backgroundColor:'#ffc502'}}>
								<FontAwesomeIcon icon={faSearch} style={{color:'#1c405d'}}  />
							</Button>
						</InputGroup.Append>
					</InputGroup>
				</Form>
			{/*	 <SearchModal faSearch={faSearch}/>*/ }
				 
				{/*Navbar*/}
				<ul className="navbar-nav ml-auto ml-md-0 osahan-right-navbar">
				<li className="nav-item mx-1 ">

						 <div className="nav-link serachModal">
						 <SearchModal faSearch={faSearch}/> 
						 </div>
						
							
					 
				</li> 
				<NavDropdown
						title={
							<>
								 
								 {
        this.state.accountinfo.map((cart)=>(
		
			<Badge bg="dark" style={{color:'#ffc502'}} key={cart.user_cart.id}>
				<strong style={{fontSize:'13px'}} >{cart.user_cart.length}</strong>
			 </Badge>
			
				 
	
        ))
      }
	  	<FontAwesomeIcon icon={faCartPlus}   style={{fontSize:'20px',color:'white'}} />{" "}
							 
						 
								 
							</>
						}
						id=""
						className="no-arrow osahan-right-navbar-user user-dropdown-link"
					>
						
						{
							this.state.accountinfo.map((userinfo)=>(
								userinfo.user_cart.map((cart)=>(
                   <div
					
							className="dropdown-item"
							rolw="button"
							key={cart.id}
						>
							<img src={`	https://shop.hoolo.live/images/simple_products/${cart.thumbnail}`} />
							{JSON.parse(cart.product_name).en}
						</div>
								))
								
							))
						}
						
					 
						<Dropdown.Divider />
						<div className="d-flex">
						<Link
							to="/view-cart"
							className="dropdown-item"
							rolw="button"
						>
							<FontAwesomeIcon icon={faSignOutAlt} fixedWidth />{" "}
							View Cart
						</Link>
						<Link
							to="/checkout"
							className="dropdown-item"
							rolw="button"
						>
							<FontAwesomeIcon icon={faSignOutAlt} fixedWidth />{" "}
							Checkout
						</Link>
						</div>
						
				</NavDropdown> 

				{/* <li className="nav-item mx-1 ">
				<a href="https://shop.hoolo.live/cart" exact className="nav-link"  >
				{
        this.state.accountinfo.map((cart)=>(
		
			<Badge bg="dark" style={{color:'#ffc502'}} key={cart.user_cart.id}>
				<strong style={{fontSize:'13px'}} >{cart.user_cart.length}</strong>
			 </Badge>
			
				 
	
        ))
      }
	  	<FontAwesomeIcon icon={faCartPlus}   style={{fontSize:'20px',color:'white'}} />{" "}
				</a>				
				</li>  */}

				<li className="nav-item mx-1 shop">
						<Link to="/shop" className="nav-link">
							<FontAwesomeIcon icon={faShoppingBag}   style={{fontSize:'25px',color:'white'}} />{" "}
							
						</Link>
				</li> 

			 
				<li className="nav-item mx-1 home">
						<Link to="/my-account" className="nav-link">
							<FontAwesomeIcon icon={faUser}  style={{fontSize:'25px',color:'white'}} />{" "}
							 
						</Link>
					</li>
				<li className="nav-item mx-1 home">
						<Link to="/" className="nav-link " onClick={()=>window.location.reload()} >
							<FontAwesomeIcon icon={faHome}  style={{fontSize:'25px',color:'white'}} />{" "}
							 
						</Link>
					</li>

					 

					 

				
		 
				</ul>
			</Navbar>

            </>
        )
    }
}

export default DesktopNav

 