import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import { useEffect, useState } from "react";
import SliderImage from "./Slide/Slider";
import "./shop.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCircleNotch,
  faCubes,
  faHandshake,
  faInfoCircle,
  faLockOpen,
  faMoneyBill,
  faNetworkWired,
  faShare,
  faStar,
  faTags,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import PreLoader from "../Atomics/Preloader/PreLoader";

export class ProductDetails extends Component {
  state = {
    productDetails: [],
    value: 1,
    isloading: false,
  };

  componentDidMount() {
    axios
      .get(
        `https://shop.hoolo.live/api/productdetails/${this.props.match.params.id}`
      )
      .then((res) => {
        this.setState({
          productDetails: [res.data],
          isloading: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate() {
    axios
      .get(
        `https://shop.hoolo.live/api/productdetails/${this.props.match.params.id}`
      )
      .then((res) => {
        this.setState({
          productDetails: [res.data],
          isloading: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addToCart = (e) => {
    const addcart = {
      id: this.props.match.params.id,
      user_id: localStorage.getItem("id"),
      qty: this.state.value,
    };
    axios
      .post("https://shop.hoolo.live/api/addproduct", addcart)
      .then((res) => {
        console.log("product add successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        {this.state.isloading ? (
          <>
            {" "}
            {this.state.productDetails.map((details) => (
              <ContentWrapper>
                <Container fluid>
                  <Row className="justify-content-center">
                    <Col md={5} className="product-details-cards m-2">
                      <SliderImage slideimage={details.productGallery} />
                    </Col>

                    <Col md={5} className="product-details-cards m-2">
                      {details.productInfo.map((proinfo) => (
                        <div className="productDetailsContent">
                          <div className="productTitle">
                            <h1 className="productName">
                              {JSON.parse(proinfo.product_name).en}{" "}
                            </h1>
                            <h6 className="productAvailabillity">
                              <span>
                                Availability:
                                <strong>
                                  {proinfo.stock == 0
                                    ? "Out Of Stock"
                                    : "In Stock"}
                                </strong>
                              </span>
                            </h6>
                          </div>

                          <div className="productVendorInfo">
                            <p>
                              By{" "}
                              <strong>
                                <Link to={`/vendors/${proinfo.store_uuid}`}>
                                  {proinfo.store_name}
                                </Link>
                              </strong>
                            </p>

                            <p>
                              {" "}
                              <FontAwesomeIcon icon={faStar} /> Be the first one
                              to rate this product
                            </p>

                            <p>
                              {" "}
                              <FontAwesomeIcon icon={faHandshake} />
                              Trust of
                              {proinfo.brand_name == "Non Brand" ? (
                                <strong className="ml-1">
                                  Non Brand
                                  <img
                                    style={{ width: "20px" }}
                                    src={`	https://shop.hoolo.live/images/brands/${proinfo.brand_logo}`}
                                  />
                                </strong>
                              ) : (
                                <strong className="ml-1">
                                  <img
                                    style={{ width: "20px" }}
                                    src={`	https://shop.hoolo.live/images/brands/${proinfo.brand_logo}`}
                                  />
                                </strong>
                              )}
                            </p>
                          </div>

                          <hr />
                          <div className="productPrice">
                            <h4>
                              {(proinfo.offer_price == null && (
                                <span> ৳ {proinfo.price}</span>
                              )) ||
                                (proinfo.offer_price == 0 && (
                                  <span> ৳ {proinfo.price}</span>
                                )) || (
                                  <span>
                                    {" "}
                                    ৳ {proinfo.offer_price}{" "}
                                    <b
                                      style={{ textDecoration: "line-through" }}
                                    >
                                      ৳ {proinfo.price}
                                    </b>{" "}
                                    <b
                                      style={{
                                        fontSize: "15px",
                                        color: "#007bff",
                                      }}
                                    >
                                      {" "}
                                      <FontAwesomeIcon
                                        icon={faInfoCircle}
                                      />{" "}
                                      {Math.round(
                                        ((proinfo.price - proinfo.offer_price) /
                                          proinfo.price) *
                                          100
                                      )}
                                      % off
                                    </b>
                                  </span>
                                )}
                            </h4>
                            <h5>
                              {" "}

                              <img 
                              src="/img/icon/love-svg.svg" 
                              style={{width:'20px'}}
                              />

                              {" "}

                              <img
                                src="/img/icon/comment-svg.svg"
                                style={{ width: "20px" }}
                              />

                              {" "}

                              <img
                                src="/img/icon/share-svg.svg"
                                style={{ width: "20px" }}
                              />

                            </h5>
                          </div>
                          <hr />
                          <div className="productCart">
                            <div className="selectQtn">
                              <Button className="btn quantity-btn">Qty</Button>
                              <Button
                                className="btn product-btn"
                                onClick={() =>
                                  (this.state.value = this.state.value - 1)
                                }
                              >
                                -
                              </Button>

                              <input
                                type="number"
                                style={{ width: "50px", textAlign: "center" }}
                                // max={proinfo.max_order_qty}
                                // min={proinfo.min_order_qty}
                                value={this.state.value}
                              />
                              <Button
                                className="btn product-btn"
                                onClick={() =>
                                  (this.state.value = this.state.value + 1)
                                }
                              >
                                +
                              </Button>
                            </div>
                            <div>
                              <Button
                                className="btn product-btn"
                                onClick={this.addToCart}
                              >
                                Add To Cart
                              </Button>
                            </div>
                            <div>
                              <Link
                                className="btn product-btn-buy"
                                to="/checkout"
                              >
                                Buy
                              </Link>
                            </div>
                          </div>
                          <hr />
                          <h4 style={{ fontSize: "15px", fontWeight: "500" }}>
                          Details
                          </h4>
                          <ul className="list">
                            <li
                              dangerouslySetInnerHTML={{
                                __html: JSON.parse(proinfo.product_detail).en,
                              }}
                            />
                          </ul>
                          <hr />
                          <h4 style={{ fontSize: "15px", fontWeight: "500", marginBottom:'15px'}} >
                            Product Tags
                          </h4>
                          
                          <span className="productTags">
                            <FontAwesomeIcon icon={faTags}  /> 
                            <b className="ml-2" dangerouslySetInnerHTML={{__html: JSON.parse(proinfo.sale_tag).en}} />
                            </span>
                          <hr />
                          <h4 style={{ fontSize: "15px", fontWeight: "500" }}>
                            Other Service
                          </h4>
                          <div className="productOther">
                            <p style={{ color: "#1c405d", fontWeight: "700" }}>
                              <img
                                src="/img/payicon.png"
                                style={{ width: "40px", marginLeft: "20px" }}
                              />
                              <br />
                              Cash on Delivery{" "}
                            </p>

                            <p style={{ color: "#1c405d", fontWeight: "700" }}>
                              <img
                                src="/img/returnicon.png"
                                style={{ width: "40px", marginLeft: "20px" }}
                              />
                              <br />
                              30 Days Returns
                            </p>
                          </div>

                          <hr />
                        </div>
                      ))}
                    </Col>
                  </Row>

                  <Row className="justify-content-center">
                    <Col
                      md={3}
                      className="product-delivery-commentment m-2 p-2"
                    >
                      <FontAwesomeIcon
                        icon={faTruck}
                        className="product-card-icon"
                      />
                      <h4 className="product-card-title">Fast Delivery</h4>
                      <p style={{ fontSize: "14px" }}>
                        With our partnered courier services your product will be
                        delivered fast.
                      </p>
                    </Col>
                    <Col
                      md={3}
                      className="product-delivery-commentment m-2 p-2"
                    >
                      <FontAwesomeIcon
                        icon={faCubes}
                        className="product-card-icon"
                      />

                      <h4 className="product-card-title">Quality Assurance</h4>
                      <p style={{ fontSize: "14px" }}>
                        With Hulusthul.live 6 Quality checks your product
                        quality is 100% trustable.
                      </p>
                    </Col>
                    <Col
                      md={3}
                      className="product-delivery-commentment m-2 p-2 mb-5"
                    >
                      <FontAwesomeIcon
                        icon={faMoneyBill}
                        className="product-card-icon"
                      />
                      <h4 className="product-card-title">
                        Purchase Protection
                      </h4>
                      <p style={{ fontSize: "14px" }}>
                        All your purcahse are secured from our leading payment
                        gateways.
                      </p>
                    </Col>
                  </Row>

                </Container>
              </ContentWrapper>
            ))}
          </>
        ) : (
          <>
            {" "}
            <PreLoader />{" "}
          </>
        )}
      </>
    );
  }
}

export default withRouter(ProductDetails);
