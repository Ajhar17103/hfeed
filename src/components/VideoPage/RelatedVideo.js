import {Container,Row,Col} from 'react-bootstrap'
import { CommentMedia, CustomMedia } from "./CommentMedia";
import "./VideoPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'
import vendorVideo from '../../Api/VendorVideo';
import RelatedVideoCard from './RelatedVideoCard';
import VideoBlock from '../Homepage/VideoBlock';
 
export default function RelatedVideo() {
	return (
		<>
			 
             <div className="video-block section-padding ">
				<Row>
					 
                 

   
    
    {
        vendorVideo.map((vendorVideo)=>(
            <Col lg={4} md={4} sm={6} className="mb-3" >
                <RelatedVideoCard key={vendorVideo.id} vendorVideo={vendorVideo} />
                </Col>
        ))
    }

			 
 
                 
                 
                  
              
					 
				</Row>
			</div>
					 
				 
		  
		</>
	);
}


 