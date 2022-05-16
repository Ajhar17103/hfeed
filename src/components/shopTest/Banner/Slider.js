import React, { Component } from 'react'
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight,faAngleLeft,faCircle,} from "@fortawesome/free-solid-svg-icons";
import Slide from './Slide';
 



function SampleNextArrow(props) {
	return (
		<button
			className="custom-slick-btn custom-slick-next"
			onClick={props.onClick}
		>
			<span>
				<FontAwesomeIcon
					icon={faAngleRight}
					mask={faCircle}
					transform="shrink-7"
				/>
			</span>
		</button>
	);
}

function SamplePrevArrow(props) {
	return (
		<button
			className="custom-slick-btn custom-slick-prev"
			onClick={props.onClick}
		>
			<FontAwesomeIcon
				icon={faAngleLeft}
				mask={faCircle}
				transform="shrink-7"
			/>
		</button>
	);
}


function BannerSlider(props) {
	const settings = {
		dots: false,
		infinite: true,
		speed: 900,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		swipeToSlide: true,
		autoplay: true,
		autoplaySpeed: 3000,
		nextArrow: <SampleNextArrow />,
	   prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
		],
	};

	const activeStatus = null
	? "product-card-list active"
	: "product-card-list";
	const categoryClass = false
	? "video-page text-success-custom"
	: "video-page text-danger-custom";

  return (
	<>
		<Slider {...settings} className="banner-slides"  >
			{
				props.banner.map((banner)=>(
					<Slide key={banner.id} img={banner.image} />
				))
			}
		   
		</Slider>
	</>
  )
}

export default BannerSlider;