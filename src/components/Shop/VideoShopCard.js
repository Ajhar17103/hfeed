import { useEffect,useState } from "react";
import './shop.css'

const VideoShopCart=(props)=> {
	const {id,name,images,regular_price,sale_price,permalink}=props.product
	  
	return (
		<>
		 
			<div className="card-category-item mt-0 mb-0">
			 
				<a  href={permalink} >
					<img key={id} className="img-fluid" style={{width:'80px', height:'80px'}} src={images[0]==null? 'img/product.png':images[0].src} alt="" />
					 
				    <h5> { name} </h5>
					 
					<h6>
				    {
						sale_price==0?<span>{ `৳ ${regular_price}`}  </span>:<span> <strong> { `৳ ${sale_price} `} </strong> <strong style={{textDecoration:'line-through'}}> { `৳ ${regular_price}`}</strong> </span>    
				    
					}  
					</h6>
					 
					
				</a>
			</div>
		</>
	);
}
export default VideoShopCart;
