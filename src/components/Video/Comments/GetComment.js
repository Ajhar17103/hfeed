import axios from "axios";
import React, { Component } from "react";
import Time from "react-time-format";

export class GetComment extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    axios
      .get(`https://shop.hoolo.live/api/videocomment/${this.props.id}`)
      .then((res) => {
        this.setState({
          comments: res.data,
        });
      })
      .catch((res) => {
        console.log(`this is error from laravel ${res}`);
      });
  }

  componentDidUpdate() {
    axios
      .get(`https://shop.hoolo.live/api/videocomment/${this.props.id}`)
      .then((res) => {
        this.setState({
          comments: res.data,
        });
      })
      .catch((res) => {
        console.log(`this is error from laravel ${res}`);
      });
  }

  render() {
    console.log(this.state.comments.length)
    return (
      <>
        {this.state.comments.map(
          ({ pro_id, user, comment, created_at, thumbnail, store_id }) => (
           

    <div>
      {
        this.state.comments.length==0 ? <h1>No Comment Found!</h1> :
        <div>
        <div className="card m-2">
          <div style={{ display: "flex" }} className="p-2">
            <div style={{ width: "100%", margin: "0px 10px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p>
                  <strong>{user} </strong>
                </p>

                <p>
                  {" "}
                  <Time value={created_at} format="DD-MM-YYYY" />{" "}
                </p>
              </div>

              <div>
                {" "}
                <p> {comment} </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
           
          )
        )}
      </>
    );
  }
}

export default GetComment;
