import axios from "axios";
import React, { Component } from "react";
import { Button } from "react-bootstrap";

export class TestApi extends Component {
  state = {
    cart: [],
    isLoading: false,
    total: ["10","20","30"],
  };
  componentDidMount() {
    const id = localStorage.getItem("id");
    axios
      .get(`https://shop.hoolo.live/api/viewcart/${id}`)
      .then((res) => {
        this.setState({
          cart: res.data,
          isLoading: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  total = () => {
    let value = [10,20,30];
    let tt=0;
    for (let i = 0; i <value.length; i++) {
       tt +=value[i];

      console.log(tt);
    }
  };

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <>
          <Button onClick={this.total}>click</Button>
       
         
          </>
        ) : (
          <>
            <p>loading...</p>
          </>
        )}
      </div>
    );
  }
}

export default TestApi;
