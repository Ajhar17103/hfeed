import React, { Component } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { Card, Button, Dropdown, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ModalDetails from "./ModalDetails";

function SampleNextArrow(props) {
  return (
    <button
      className="custom-slick-btn custom-slick-next"
      onClick={props.onClick}
    >
      <span>
        <FontAwesomeIcon
          icon={faAngleRight}
          mask={faCircle}
          transform="shrink-7"
        />
      </span>
    </button>
  );
}

function SamplePrevArrow(props) {
  return (
    <button
      className="custom-slick-btn custom-slick-prev"
      onClick={props.onClick}
    >
      <FontAwesomeIcon
        icon={faAngleLeft}
        mask={faCircle}
        transform="shrink-7"
      />
    </button>
  );
}

export class VideoProducts extends Component {
  state = {
    showDetails: false,
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      swipeToSlide: true,
      autoplay: false,
      autoplaySpeed: 2000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };

    const activeStatus = null
      ? "product-card-list active"
      : "product-card-list";
    const categoryClass = false
      ? "video-page text-success-custom"
      : "video-page text-danger-custom";

    return (
      <>
        <Slider {...settings} className="slides">
          {this.props.products.map(
            ({
              id,
              slug,
              offer_price,
              price,
              thumbnail,
              category_title,
              store_id,
              product_name,
            }) =>
              this.props.videoProducts.map(
                (e) =>
                  e == id && (
                    <>
                      <div
                        className={activeStatus}
                       
                      >
                        <div className="product-card-image">
                          <Link
                           to={`product-details/${id}/${product_name.en}`}
                          >
                            <img
                              className="img-fluid"
                              src={`https://shop.hoolo.live/images/simple_products/${thumbnail}`}
                              alt={slug}
                              style={{ height: "50px" }}
                            />
                          </Link>
                        </div>

                        <div className="product-card-body">
                          <div className="product-title">
                          <Link
                           to={`product-details/${id}/${product_name.en}`}
                       
                              className="priceLink"
                            >
                              {" "}
                              {product_name.en}{" "}
                            </Link>
                          </div>
                          {/* <div className={categoryClass}>
       {JSON.parse(category_title).en }  
    </div> */}
                          <div className="price">
                            {offer_price == 0 ? (
                              <span style={{ fontWeight: "700" }}>
                                {`৳ ${price}`}{" "}
                              </span>
                            ) : (
                              <span>
                                {" "}
                                <strong> {`৳ ${offer_price}`} </strong>{" "}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <ModalDetails
                        show={this.state.showDetails}
                        onHides={() => this.setState({ showDetails: false })}
                        id={e}
                      />
                    </>
                  )
              )
          )}
        </Slider>
      </>
    );
  }
}

export default VideoProducts;
