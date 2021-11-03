import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import VideoCard from "../Atomics/VideoCard/VideoCard";
import vendorVideo from "../../Api/VendorVideo"
	
 

export default function VideoBlock() {
	return (
		<>
			<div className="video-block section-padding ">
				<Row>
					<Col md={12}>
						<SectionHeader heading="Featured Videos" />
					</Col>


					{vendorVideo.map((vendorVideo) => (
               
			   <Col xl={3} sm={6} className="mb-3" key={vendorVideo.id}>
                 <VideoCard
							 

							vendorVideo={vendorVideo}
							 
						/>
                  
                </Col>
              ))}
					 
				</Row>
			</div>
		</>
	);
}
