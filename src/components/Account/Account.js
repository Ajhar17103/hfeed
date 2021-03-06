import "./Account.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ThinFooter from "../Footer/ThinFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";

import MyChannels from "./MyChannels";
import MyVideos from "./MyVideos";
import InfoCards from "./InfoCards";
import SingleChannelHero from "../SingleChannel/SingleChannelHero";
import SingleChannelNav from "../SingleChannel/SingleChannelNav";
import MyVideoCard from "./VideoCard";
import SearchModal from "../Navigation/SearchModal";

const Account = () => {
	return (
		<>
		<ContentWrapper className="single-channel-page">
				<SingleChannelHero />
				<SingleChannelNav />
			 
			</ContentWrapper>
			
			<ContentWrapper>
				 
				<Container fluid className="pb-0">
					
					<Row>
						<InfoCards />
					</Row>

					<hr />

					<MyVideos />
					<MyVideoCard/>
					<hr className="mt-0" />
				 <SearchModal/>
				</Container>
				<ThinFooter />
			</ContentWrapper>
		</>
	);
};

export default Account;
