import React, { Component } from 'react'
import Slider from "react-slick";
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight,faAngleLeft,faCircle,} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import '../Live/VideoCategory/Slide.css'
import { Link } from 'react-router-dom';




 




export class ChildNav extends Component {

	state={
		allCategory:[],
		show: true,
        scrollPos: 0
	}

	componentDidMount(){
            
		   window.addEventListener("scroll", this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	  }
	  handleScroll = () => {
		// console.log(document.body.getBoundingClientRect());
		this.setState({
		  scrollPos: document.body.getBoundingClientRect().top,
		  show: document.body.getBoundingClientRect().top > this.state.scrollPos
		});
	  };
	render() {

		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			initialSlide: 0,
			swipeToSlide: true,
			autoplay: false,
			autoplaySpeed: 2000,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						initialSlide: 1,
					},
				},
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						initialSlide: 1,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						initialSlide: 1,
					},
				},
			],
		};
 
	   
		return (
			<>
			 <nav  className={this.state.show ? "show videoCategory" : "hide videoCategory"} >

		 <Slider {...settings}  >
		 

			<div className="item">
				<div className="video-category-item">
				
						<Link to="/follow" className='link'>
						   Follow
						</Link>
							  
					 
				 
				</div>
			</div>
			<div className="item">
				<div className="video-category-item">
				
			 
				<Link to="/" className='link'>
					Trending
				</Link>
				 
				</div>
			</div>

			<div className="item">
				<div className="video-category-item">
				
				<Link to="/discover" className='link'>
					Discover
				</Link>
				 
				</div>
			</div>
 
				
				</Slider>
				</nav>
			</>
		)
	}
}

export default ChildNav
 

 