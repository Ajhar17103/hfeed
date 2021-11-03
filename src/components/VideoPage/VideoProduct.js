import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import {
	VerifiedTooltip,
	UnverifiedTooltip,
} from "../Atomics/CustomCheckTooltips/CustomCheckTooltips";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlayCircle,
	faEllipsisV,
	faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

const VideoProduct = ({
 
	 
	active = null,
	verified = false,
	product
}) => {
	 
	const activeStatus = active
		? "video-card video-card-list active"
		: "video-card video-card-list";
	const categoryClass = verified
		? "video-page text-success-custom"
		: "video-page text-danger-custom";
	return (
		<>
		 
		 
			<div className={activeStatus}>
				<div className="video-card-image">
					 
					<a href={product.permalink}>
						<img className="img-fluid"   src={product.images[0]==null? 'img/product.png':product.images[0].src} style={{height:'50px'}}  />
					</a>
				 
				</div>

				<div className="video-card-body">
					

					<div className="video-title">
						<a>{product.name}</a>
					</div>
					<div className={categoryClass}>
					 {product.categories[0].name}
					</div>
					<div  >
					{
						product.sale_price==0?<span style={{fontWeight:'700',}}>{ `৳ ${product.regular_price}`}  </span>:<span> <strong> { `৳ ${product.sale_price} `} </strong> <strong style={{textDecoration:'line-through'}}> { `৳ ${product.regular_price}`}</strong> </span>    
				    
					}
					</div>
				</div>
			</div>
		</>
	);
};

export default VideoProduct;
