import React, { Component, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faUserPlus } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import { Col, Row } from "react-bootstrap";

export class VendorProducts extends Component {
  state = {
    products: [],
    isLoading: false,
  };
  componentDidMount() {
    axios
      .get("https://shop.hoolo.live/api/allproducts")
      .then((res) => {
        this.setState({
          products: res.data,
          isLoading: true,
        });
      })
      .catch((res) => {
        console.log(`this is error from laravel ${res}`);
      });
  }

  render() {
    // const {id,product_name,slug,product_detail,product_tags,price,offer_price,tax,tax_rate,thumbnail,hover_thumbnail,stock,store_id,category_id,free_shipping,sku,permalink}=this.props.product

    return (
      <>
        <Row>
          {this.state.products.map(
            (product) =>
              product.store_uuid == this.props.store_uuid && (
                <Col xl={3} sm={6} xs={6} className="mb-3">
                  <div className="card-category-item mt-0 mb-0">
                    <a
                      href={`https://shop.hoolo.live/products/${product.id}/${product.slug}`}
                    >
                      <img
                        key={product.id}
                        className="img-fluid"
                        src={`https://shop.hoolo.live/images/simple_products/${product.thumbnail}`}
                        alt={product.slug}
                      />

                      {/*<h5 dangerouslySetInnerHTML={{ __html: JSON.parse(product_detail).en }} /> */}

                      <h5>{product.product_name.en} </h5>
                      {/* <h6   >  {this.state.views.map(e=> <><FontAwesomeIcon icon={faEye}/> {e.view_count}</>)} </h6> */}
                      <h6>
                        {product.offer_price == 0 ? (
                          <span>{`৳ ${product.price}`} </span>
                        ) : (
                          <span>
                            {" "}
                            <strong>
                              {" "}
                              {`৳ ${product.offer_price} `}{" "}
                            </strong>{" "}
                            <strong style={{ textDecoration: "line-through" }}>
                              {" "}
                              {`৳ ${product.price}`}
                            </strong>{" "}
                          </span>
                        )}
                      </h6>

                      {/* <button className="btn btn-sm" style={{backgroundColor:'#262626',color:'white', borderRadius:'10px'}}>Shop Now</button> */}
                    </a>
                  </div>
                </Col>
              )
          )}
        </Row>
      </>
    );
  }
}

export default VendorProducts;
