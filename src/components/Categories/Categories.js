import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ThinFooter from "../Footer/ThinFooter";
import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import CategoryCard from "../Atomics/CategoryCard/CategoryCard";
import Paginate from "../Atomics/Paginate/Paginate";
import React, { Component } from 'react'
import axios from "axios";
 
 export class Categories extends Component {

	state={
		categories:[]
	}

	componentDidMount(){

		axios.get('http://shop.hoolo.live/api/allcategories')

		.then(res=>{
			console.log(res.data)
			this.setState(
				{
					categories:res.data
				}
			)
		})
		.catch(res=>{
			console.log(`this is from categories ${res.data}`)
		})
	}
	 render() {
		 return (
			<ContentWrapper>
			<Container fluid>
				<div className="video-block section-padding">
					<Row>
						<Col md={12}>
							<SectionHeader heading="Categories" />
						</Col>
					
					{
						this.state.categories.map((category)=>(
							<Col xl={3} sm={6} key={category.id} className="mb-3">
							<CategoryCard
								category={category} 
							/>
						</Col>
						))
					}	 
					</Row>
				</div>
				 
			</Container>
			<ThinFooter />
		</ContentWrapper>
		 )
	 }
 }
 
 export default Categories
 