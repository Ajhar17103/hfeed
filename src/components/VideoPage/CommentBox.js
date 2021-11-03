import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Navbar, Row } from "react-bootstrap";

import CommentBody from "./CommentBody";
import VideoShop from "../Shop/VideoShop";
import RelatedVideo from "./RelatedVideo";

const CommentBox = (props) => {
	return (
		<>
			 
			<div className="box  single-video-comment-tabs" >
			
				<Tabs defaultActiveKey="vidoe" >
				<Tab eventKey="vidoe"   title="products">
				<div className="video-block section-padding" >
						<Row>
                        
                  <VideoShop id={props.id} />
								
						</Row>
					</div>
					</Tab>
					<Tab  eventKey="disqus"     title="Related Video ">
					
				
					<RelatedVideo/>
					</Tab>
					
					<Tab eventKey="fb" title="others" style={{height:'500px'}}>
						 <h3>Coming Soon...</h3>
					</Tab>
				</Tabs>
			
			</div>
			 
		</>
	);
};

function Soon() {
	return <p>Coming Soon...</p>;
}

export default CommentBox;
