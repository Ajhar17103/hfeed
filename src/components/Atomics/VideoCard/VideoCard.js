import "./VideoCard.css";
import {Row,Col} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'
import ProductSlide from "./ProudctSlide";
import VideoPage from "../../VideoPage/VideoPage";

 

export default function VideoCard(props){

const   Video=props.vendorVideo

 const { title,time,videoTitleHref,url,shopUrl,videoTitle,videoCategories,shop,views,timeAgo,video,iconHref,imgAlt,imgHref,imgSrc}=props.vendorVideo;
 
 

	
	return (
		<>
	
	        
			<div className="video-card">
			 
				<div className="video-card-image">
					<Link className="play-icon" to={iconHref}>
						<FontAwesomeIcon icon={faPlayCircle} />
					</Link>
					<Link to={imgHref}>
						<img className="img-fluid" src={imgSrc} alt={imgAlt} />
					</Link>
				 
				</div>
				<div className="video-card-body">

					<div className="video-title">
						<Link to={videoTitleHref}  >{title}</Link>
					</div>

				{/*	<div
						
					> 
					<a style={{color:'#28a745', fontWeight:'700'}}  href={shopUrl}>	{  shop}  </a>
						    
					</div>
					<div className="video-view">
						{views} views &nbsp;
						<FontAwesomeIcon icon={faCalendarAlt} /> {timeAgo} ago
				</div> */}
					<div>
						      
					</div>
					<hr/>
					<div style={{  margin:'5px 0px'}}>
					<Row>
                       <Col>
					  <ProductSlide shop={shop}/>
					   </Col>
					  </Row>
					</div>
				</div>
			</div>
		</>
	);
}

 
