import "./VideoPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ThinFooter from "../Footer/ThinFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import VideoProduct from "./VideoProduct";
import SingleVideoRight from "./SingleVideoRight";
import SingleVideoLeft from "./SingleVideoLeft";
import VideoTitle from "./VideoTitle";
import api from "../../Api/Api";
import { useParams } from "react-router";
import { useEffect,useState } from "react";
import vedoreViedo from "../../Api/VendorVideo";
import VideoFrame from "./VideoFrame";
 

const VideoPage = ( ) => {
	 
const {id}=useParams();
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
	return (
		<>
		 	<ContentWrapper>
				<Container fluid>
					<div className="video-block-right-list section-padding"  >
						<Row className="mb-4"  >
							<Col md={8} className="smFixedVideo"    >
							{  
		   vedoreViedo.map((vendorVideo)=>( 
	 id==vendorVideo.id &&   <VideoFrame key={vendorVideo.key} vendorVideo={vendorVideo} />
	 
	 ) )
		   
		}
		
							

			 
								 
							</Col>

							<Col md={4}  className="leftItems" >
							<div className="video-slider-right-list"     >
							{products.map((product) => (
        
				  <VideoProduct
					 product={product} 
				  />
                  
                 
              ))}
			  </div>			 
							</Col>
						</Row>
					</div>

					<div className="video-block section-padding sm-position" >
						<Row>
							<Col md={8} className='tagItem' >
						 
								<SingleVideoLeft  id={id} vendorVideo={vedoreViedo}  />
								 
							</Col>

							<Col md={4}>
								<SingleVideoRight />
							</Col>
						</Row>
					</div>
				</Container>
				<ThinFooter />
			</ContentWrapper>
		</>
	);
};

export default VideoPage;
