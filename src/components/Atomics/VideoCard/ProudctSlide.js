import Slider from "react-slick";
import ProductCard from "./ProductCard";
import api from "../../../Api/Api";
import { useEffect,useState } from "react";



export default function ProductSlide({shop}) {

	const [products, setProducts] = useState([]);

	useEffect(() => {
	  fetchProducts();
	}, []);
  
	let fetchProducts = () => {
	  api
		.get("products", {
		  per_page: 20,
		})
		.then((response) => {
		  if (response.status === 200) {
			setProducts(response.data);
		  }
		})
		.catch((error) => {});
	};
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		swipeToSlide: true,
		autoplay: false,
		autoplaySpeed: 1500,
		 
		 
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
				breakpoint: 1100,
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
		
			<Slider {...settings}>
                   
						  {
							  products.map((product)=>(

							 shop==product.store.shop_name && <ProductCard product={product}/>
							  ))
						  }

						 
								
						 
						 
				
				 
				 
				
               { /* <ProductCard/>
                 <ProductCard/>
                 <ProductCard/>
			   <ProductCard/> */}
			</Slider>
		</>
	);
}
