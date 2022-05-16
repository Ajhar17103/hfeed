import React, { useState, useEffect, Component } from "react";
import Container from "react-bootstrap/Container";
import axios from 'axios';
import "./shop.css";
import ThinFooter from "../Footer/ThinFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import Paginate from "../Atomics/Paginate/Paginate";
import BannerSlider from "./Banner/Slider";
import BrandSlider from "./Brand/BrandSlider";
import TopCategories from "./TopCategories/TopCategories";
import DailyDeals from "./Products/DailyDeals";
import Beauty from "./Products/Beauty";
import MensFashion from "./Products/MensFashion";
import WomenFashion from "./Products/WomenFashion";
import Card from "./Card/Card";
import Tech from "./Products/Tech";
import PreLoader from "../Atomics/Preloader/PreLoader";
 

 
export class ShopTest extends Component {

  state = {
    banner:[],
    brand:[],
    products: [],
    isLoading: false,
  };
  componentDidMount() {

    const banner  = 'https://shop.hoolo.live/api/sliders';
    const brand   = 'https://shop.hoolo.live/api/brands';
    const product = 'https://shop.hoolo.live/api/allproducts';


    const getBanner = axios.get(banner);
    const getBrand  = axios.get(brand);
    const getProduct = axios.get(product);
    
    axios
      .all([getBanner, getBrand,getProduct])
      .then(
        axios.spread((...allData) => {
          this.setState({
            banner: allData[0].data,
            brand: allData[1].data,
            products: allData[2].data,
            isLoading: true,
          });
        })
      )
      .catch((res) => {
        console.log(`this is error from laravel ${res}`);
      });
  }
 

  render() {
    return (
      <>
       {
         this.state.isLoading? 
         <>
            <ContentWrapper>
          <Container fluid>
 
     
        
            <BannerSlider banner={this.state.banner}/>
             {/* <TopCategories/> */}
             <BrandSlider brand={this.state.brand}/>
             <DailyDeals  product={this.state.products} />
             <Beauty product={this.state.products} />
             <Card  />
             <MensFashion product={this.state.products} />
             <WomenFashion product={this.state.products} />
        
             <Card  />
             <Tech product={this.state.products} />
        
      
             </Container>
          </ContentWrapper>
         </> : <> <PreLoader /> </>
       }
      </>
    );
  }
}

export default ShopTest;
