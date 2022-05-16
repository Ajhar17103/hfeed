import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table, Container, Row, Col, Button } from "react-bootstrap";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import SingleHeader from "../Atomics/SectionHeader/SingleSectionHeader";
import axios from "axios";
import PreLoader from "../Atomics/Preloader/PreLoader";
import ThinFooter from "../Footer/ThinFooter";

function EmptyCart() {
  return (
    <>
      <ContentWrapper>
        <Container fluid>
          <Row className="justify-content-center">
            <Col md={12}>
              <SingleHeader heading="Cart" />
              <hr />
            </Col>
            <Col md={12} className="text-center text-danger mb-5">
              <h3> Your Shopping Cart is Empty </h3>
              <hr />
            </Col>
          </Row>

          <ThinFooter />
        </Container>
      </ContentWrapper>
    </>
  );
}

export class ViewCart extends Component {
  state = {
    cart: [],
    isLoading: false,
  };
  componentDidMount() {
    const id = localStorage.getItem("id");
    axios
      .get(`https://shop.hoolo.live/api/viewcart/${id}`)
      .then((res) => {
        this.setState({
          cart:res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentDidUpdate() {
    const id = localStorage.getItem("id");
    axios
      .get(`https://shop.hoolo.live/api/viewcart/${id}`)
      .then((res) => {
        this.setState({
          cart:res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  removeProduct=(cart)=>{
    const cartId={
      id:cart
    }
    axios.post('https://shop.hoolo.live/api/removeproduct', cartId)
    .then(res=>{
      window.location.reload()
    })
    .then(err=>{
      console.log(err)
    })
    
  }
  render() {
    return (
      <>
        {this.state.cart.length ===0? (
          <EmptyCart />
        ) : (
          <div>
            <ContentWrapper>
              <Container fluid>
                <Row className="justify-content-center p-3">
                  <Col md={12}>
                    <SingleHeader heading="Cart" />
                    <hr />
                  </Col>
                  <Col md={7} className="view-card p-2 mx-2 mb-2">
                    <SingleHeader
                      heading={`${this.state.cart.length} Products in Your Cart`}
                    />
                    <hr />
                    <Table striped bordered hover>
                      <tbody>
                        {this.state.cart.map((cart) => (
                          <>
                            <tr>
                              <td className="d-flex">
                                <img
                                  src={`https://shop.hoolo.live/images/simple_products/${cart.product_image}`}
                                  alt="product"
                                  width="100px"
                                  height="auto"
                                />
                                <div className="pl-2">
                                  <p> {JSON.parse(cart.product_name).en} </p>
                                  <p>
                                    Sold By: <strong> {cart.store_name}</strong>
                                  </p>
                                  <p>
                                    <strong>Qunatity:</strong> {cart.qty}
                                  </p>
                                  <p>
                                    <strong>
                                      Price:{" "}
                                      {cart.semi_total
                                        ? cart.semi_total
                                        : cart.price_total}
                                    </strong>{" "}
                                  </p>
                                </div>
                              </td>

                              <td>
                                <Button type="btn btn-danger" onClick={()=>this.removeProduct(cart.id)}>Remove</Button>
                              </td>
                            </tr>
                          </>
                        ))}
                      </tbody>
                    </Table>
                  </Col>
                  <Col md={3} className="view-card p-2 mx-2 mb-2 h-75">
                    <SingleHeader heading="Payment Details" />
                    <hr />
                    <div  className="p-2">
                     <div className="subtotal" style={{display: "flex",justifyContent: "space-between",}}>
                     <p>Subtotal</p>
                     <p>62220.00</p>
                     </div>
                     <div className="shipping"  style={{display: "flex",justifyContent: "space-between",}}>
                     <p> Shipping</p>
                     <p>62220.00</p>
</div>
<hr/>
 
                     <div className="grandtotal"  style={{display: "flex",justifyContent: "space-between",}}>
                     <p> Grand Total</p>
                     <p>62220.00</p>
</div>

                    </div>
                    <hr/>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                   
                    >
                      <Button>Update Cart</Button>
                      <Button>
                        {" "}
                        <Link style={{ color: "white" }} to="/checkout">
                          {" "}
                          Process to checkout{" "}
                        </Link>{" "}
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </ContentWrapper>
          </div>
        )}
      </>
    );
  }
}

export default ViewCart;

{
  /* <Table striped bordered hover>
  <thead>
  <tr>
    <th>Product</th>
    <th>Price</th>
    <th>Qunatity</th>
    <th>Total</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>  
        <img src='/img/product.png' alt='product' width='100px' height='100px' />
    </td>
    <td> 
   1200000
    </td>
    <td> 
        10
    </td>
    <td>1200000</td>
    <td>
       <Button type='btn btn-danger'>Cancel</Button>
   </td>
  </tr>
  <tr>
    <td>  
        <img src='/img/product.png' alt='product' width='100px' height='100px' />
    </td>
    <td> 
   1200000
    </td>
    <td> 
        10
    </td>
    <td>1200000</td>
   <td>
       <Button type='btn btn-danger'>Cancel</Button>
   </td>
  </tr>
  <tr>
    <td>  
        <img src='/img/product.png' alt='product' width='100px' height='100px' />
    </td>
    <td> 
   1200000
    </td>
    <td> 
        10
    </td>
    <td>1200000</td>
    <td>
       <Button type='btn btn-danger'>Cancel</Button>
   </td>
  </tr>
 
</tbody>
</Table> */
}
