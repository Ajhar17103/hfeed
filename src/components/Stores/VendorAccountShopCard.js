import { useEffect,useState } from "react";
import '../Shop/shop.css'

const VendorAccountShopCard=(props)=> {
	const {id,product_name,slug,product_detail,product_tags,price,offer_price,tax,tax_rate,thumbnail,hover_thumbnail,stock,store_id,category_id,free_shipping,sku,permalink}=props.product
    
	return (
		<>
		  
			<div className="card-category-item mt-0 mb-0">
			 
				<a  href={`https://shop.hoolo.live/products/${id}/${slug}`} >
					<img key={id} className="img-fluid" src={`https://shop.hoolo.live/images/simple_products/${thumbnail}`} alt={slug}/>
					 
				    {/*<h5 dangerouslySetInnerHTML={{ __html: JSON.parse(product_detail).en }} /> */}
					 
					 <h5   >{product_name.en}  </h5>
					<h6>
				    {
						offer_price==0?<span>{ `৳ ${price}`}  </span>:<span> <strong> { `৳ ${offer_price} `} </strong> <strong style={{textDecoration:'line-through'}}> { `৳ ${price}`}</strong> </span>    
				    
					}  
					</h6>
					 
					<button className="btn btn-sm" style={{backgroundColor:'#157ed2',color:'white'}}>Shop Now</button>
				</a>
			</div>
		</>
	);
}
export default VendorAccountShopCard;
