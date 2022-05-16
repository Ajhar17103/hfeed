import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Shop/shop.css";
import axios from "axios";
import VendorAccountShopCard from "./VendorAccountShopCard";
import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";

export default class VendorAccountShop extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios
      .get("https://shop.hoolo.live/api/allproducts")

      .then((res) => {
        this.setState({
          products: res.data,
        });
      })
      .catch((res) => {
        console.log(`this is error from laravel ${res}`);
      });
  }
  render() {
    return (
      <>
        <ContentWrapper>
          <Container fluid>
            <div className="video-block section-padding">
              <Row>
                {this.state.products.map(
                  (product) =>
                    product.featured == 1 && (
                      <Col xl={3} sm={6} className="mb-3" key={product.id}>
                        <VendorAccountShopCard product={product} />
                        {console.log(product.id)}
                      </Col>
                    )
                )}
              </Row>
            </div>
          </Container>
        </ContentWrapper>
      </>
    );
  }
}
