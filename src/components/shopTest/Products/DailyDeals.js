import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight,faAngleLeft,faCircle,} from "@fortawesome/free-solid-svg-icons";
import ProductSlide from './ProductSlide';
 

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

function DailyDeals(props) {


    const settings = {
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        swipeToSlide: true,
        autoplay: false,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
       prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
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

    const activeStatus = null
    ? "product-card-list active"
    : "product-card-list";
    const categoryClass = false
    ? "video-page text-success-custom"
    : "video-page text-danger-custom";

 console.log(props.product.product_name)

  return (
    <>
			
            <div style={{display:'flex', justifyContent:'space-between'}} >
            <span style={{fontSize:'18px', fontWeight:'700', color:'#333'}}> Daily Deals </span> 
               <span style={{fontSize:'15px'}}> view all</span>
            </div>
            <hr/>
		  <Slider {...settings} className="mb-5"  >
              {
                  props.product.map((product)=>(
                 product.featured==1 &&  <ProductSlide key={product.id} img={product.thumbnail} offer_price={product.offer_price} price={product.price} product_name={product.product_name.en}  id={product.id} />
                  ))
              }
		   {/* <ProductSlide img="/img/product.png" />
		   <ProductSlide img="/img/product-2.png" />
		   <ProductSlide img="/img/product.png" />
		   <ProductSlide img="/img/product-2.png" />
		   <ProductSlide img="/img/product.png" />
		   <ProductSlide img="/img/product-2.png" />
           <ProductSlide img="/img/product.png" />
		   <ProductSlide img="/img/product-2.png" />
		   <ProductSlide img="/img/product.png" />
		   <ProductSlide img="/img/product-2.png" />
		   <ProductSlide img="/img/product.png" />
		   <ProductSlide img="/img/product-2.png" /> */}
          
		</Slider>
			
			</>
  )
}

export default DailyDeals;