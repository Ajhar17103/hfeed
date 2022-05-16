import "./Homepage.css";
import Container from "react-bootstrap/Container";
import React, { Component, lazy, Suspense } from 'react'
import TopMobileSearch from "./TopMobileSearch";
import TopCategory from "./TopCategory";
import VideoBlock from "./VideoBlock";
import PopularChannels from "./PopularChannels";
import FatFooter from "../Footer/FatFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import Shop from "../Shop/Shop";
import Live from "../Live/Live";
import VideoCategorySlide from "../Live/VideoCategory/VideoCategorySlider";
import VideoCase from "../Video/VideoCase";
import { useEffect, useState } from "react";
import PreLoader from "../Atomics/Preloader/PreLoader";
 import axios from "axios";
import ChildNav from "./ChildNav";



 
export class Homepage extends Component {
	
	state={
		category:null,
		videos:[],
		follow:[],
		likes:[],
		isloading:false
		
	}

	componentDidMount() {
		   

			 const vidoes='https://shop.hoolo.live/api/videos';
			 
			 const getVideos = axios.get(vidoes);
		 
			 axios.all([getVideos])
			.then(axios.spread((... allData)=>{
			 this.setState({
			  videos:allData[0].data,
			  
			  isloading:true,
			 
			 })
			}))
		 .catch(res=>{
		   console.log(`this is error from laravel ${res}`)
		 })
		}

    componentDidUpdate(){
	
		const videos='https://shop.holoo.live/api/videos';
		const getVideos = axios.get(videos);
		axios.all([getVideos])
	   .then(axios.spread((... allData)=>{
		this.setState({
		 videos:allData[0].data,
		 isloading:true,
		
		})
	   }))
	.catch(res=>{
	  console.log(`this is error from laravel ${res}`)
	})
		}

	CategoryUpdate(category){
	this.setState({
		category:category
	})
	}

	
  render() {
 
	return (
	   <>
	     {this.state.isloading ?<ContentWrapper className='homecolor' >
		 <ChildNav/>

	      <VideoCase video={this.state.videos} category={this.state.category} history={this.props.history}  />  
		 <FatFooter />
 	 

		 </ContentWrapper>: <PreLoader />}
	   </>
	)
  }
}

export default Homepage;




// const Homepage = () => {
 
 
  

// 	return (
// 		<>
			 
// 				  <ContentWrapper>
			 
// 				<VideoCategorySlide/>    
// 				{/* <Live/> */}
// 				<VideoCase />
	
// 				{/*
// 						<TopCategory />
// 						<hr />
						
// 						<VideoBlock />
						
// 					 <hr className="mt-0" />
				
// 				 <HomeShop/>  
						  
// 				 <hr className="mt-0" />
// 				 <PopularChannels />
					
// 					*/}
					 
					
	
// 					<FatFooter />
// 				</ContentWrapper>  
		 
// 		</>
// 	);
// };

// export default Homepage;