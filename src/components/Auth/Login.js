import { Link, useHistory } from "react-router-dom";
import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { InputGroup, FormControl } from "react-bootstrap";
import Registration from "./Registration";
import { withRouter } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Carousel from "./Carousel";
import Container from "react-bootstrap/Container";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://shop.hoolo.live/api/users/login", this.state)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.data.id);
        localStorage.setItem("name", res.data.data.name);
        localStorage.setItem("email", res.data.data.email);

        swal("Welcome To Hulusthul", "Login Successful", "success");
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { email, password } = this.state;

    return (
      <>
      <section className="login-main-wrapper">
        <Container fluid className="pl-0 pr-0">
        <Row noGutters>
        <Col md={6} className=" p-5 bg-white full-height">
          <div className="login-main-left ">
            <div className="text-center mb-5 login-main-left-header  ">
              <img src="/img/logo.png" className="img-fluid" alt="LOGO" />
              {/* <h5 className="mt-3 mb-3">Welcome to Hulusthul</h5>
          <p>
            It is a long established fact that a reader <br />{" "}
            will be distracted by the readable.
          </p> */}
            </div>
            <Form className="" onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>
                  E-mail <strong style={{ color: "red" }}>*</strong>
                </Form.Label>
                <Form.Control
                  name="email"
                  value={email}
                  type="email"
                  placeholder="Enter Your E-mail"
                  onChange={this.onChangeHandler}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  Password <strong style={{ color: "red" }}>*</strong>{" "}
                </Form.Label>
                <Form.Control
                  name="password"
                  value={password}
                  type="password"
                  placeholder="Password"
                  onChange={this.onChangeHandler}
                  required
                />
              </Form.Group>
              <div className="mt-4">
                <Row>
                  <Col>
                    <Button
                      
                      className="btn-bg"
                      type="submit"
                      size="lg"
                      block
                    >
                      Sign In
                    </Button>
                  </Col>
                </Row>
              </div>

             
            </Form>
           
            <div className="mt-4">
            <p className="mb-3 or">OR</p>

               <p className="text-center google">
                 <img src="/img/google-icon.png"    />

               <a href="https://shop.hoolo.live/api/users/sign-in/google">
                      Login with Google{" "}
                    </a>
               </p>
             
                
                 
            </div>

            <div className="mt-5 text-center">
            

              <p className="light-gray">
                Don’t have an account? <Link to="/auth/register">Sign Up</Link>
              </p>
            </div>
          </div>
        </Col>
          <Carousel />
          </Row>
        </Container>
        </section>
      </>
    );
  }
}

export default withRouter(Login);
