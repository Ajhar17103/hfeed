import Slider from "react-slick";
import { useState,useEffect } from "react";
import Slide from "../Atomics/Slide/Slide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAngleRight,
	faAngleLeft,
	faCircle,
} from "@fortawesome/free-solid-svg-icons";
import api from '../../Api/Api'
import TopCategory from "../../Api/TopCategory"

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

export default function TopCategoriesSlider() {
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 10,
		slidesToScroll: 1,
		initialSlide: 0,
		swipeToSlide: true,
		autoplay: true,
		autoplaySpeed: 2000,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 9,
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
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
		],
	};

	const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  let fetchProducts = () => {
    api
      .get("products/categories", {
        per_page: 20,
      })
      .then((response) => {
        if (response.status === 200) {
          setProducts(response.data);
        }
      })
      .catch((error) => {});
  };
	return (
		<>
	 	
		 <Slider {...settings} >
			{TopCategory.map((categories) => (
              
					
                
				  <Slide   categories={categories}
				/>
			 		
			)
			)
			}
				
				</Slider>
				 
			
		</>
	);
}
