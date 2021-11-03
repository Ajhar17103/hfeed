import "./Homepage.css";
import Container from "react-bootstrap/Container";

import TopMobileSearch from "./TopMobileSearch";
import TopCategory from "./TopCategory";
import VideoBlock from "./VideoBlock";
import PopularChannels from "./PopularChannels";
 
import FatFooter from "../Footer/FatFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import Shop from "../Shop/Shop";
import HomeShop from "../Shop/HomeShop";
 

const Homepage = ({products}) => {
	return (
		<>
			<ContentWrapper>
				<Container fluid className="pb-0">
			 
					<TopCategory />
					<hr />
					<VideoBlock />
					
				{/* <hr className="mt-0" />
				<HomeShop/> */}
		              
				 <hr className="mt-0" />
				{ /* <PopularChannels />
				
				*/}
				 
				</Container>

				<FatFooter />
			</ContentWrapper>
		</>
	);
};

export default Homepage;
