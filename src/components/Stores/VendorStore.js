import React, { Component } from 'react'
import axios from 'axios';
import "./VendorStore.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ThinFooter from "../Footer/ThinFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import MyChannels from "./MyChannels";
import MyVideos from "./MyVideos";
import InfoCards from "./InfoCards";
import MyVideoCard from "./VendorVideoCard";
import SearchModal from "../Navigation/SearchModal";
import HeroContent from "./HeroContent";
import ChannelNav from "./ChannelNav";
import { withRouter } from "react-router";
import Video from './VendorVideo';
import PreLoader from '../Atomics/Preloader/PreLoader';
import Test from '../../Test';
import VendorProducts from './VendorProducts';
 
export class VendorStore extends Component {
	state={
		store_uuid:null,
		stores:[],
		isLoading:false,
		status:'video',
	  }
	
	  componentDidMount(){
		const uuid =this.props.match.params.uuid
        this.fetchData(uuid);

		axios.get('https://shop.hoolo.live/api/allstores')
		
		.then(res=>{
		 
		  this.setState({
			stores:res.data,
			isLoading:true
		  })
		})
		.catch(res=>{
		  console.log(`this is error from laravel ${res}`)
		})
	
	  }

	  fetchData = uuid => {
		this.setState({
			store_uuid:uuid
		})
    };


	UpdateStore(type){
       this.setState({
		status:type
	   })
	}

	render() {
		console.log(this.state.status)
		return (
			<>   {
				this.state.isLoading ? (<div>{

					this.state.stores.map((store)=>(
				 this.state.store_uuid==store.uuid &&   <ContentWrapper className="single-channel-page" key={store.id}>
						
						<HeroContent HeroContent={store}/>
						  <ChannelNav navContent={store} updateStore={this.UpdateStore.bind(this)}/>
					 
						  <Container fluid className="pb-0">
				    
		
						 
		  
							 { this.state.status=='video'? <Video store={this.state.store_uuid}/>
							    :  <VendorProducts store_uuid={this.state.store_uuid}/>
							}
							  
							  <hr className="mt-0" />
						
						  </Container>
						  <ThinFooter />
					</ContentWrapper> 
					
				
				 
			))
		}</div>) : (<PreLoader/>)
			}
 
 
			
			</>
		)
	}
}

export default withRouter( VendorStore);
 
