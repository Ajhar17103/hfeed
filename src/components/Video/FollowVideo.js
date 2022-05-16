import React, { useRef, useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ChildNav from "../Homepage/ChildNav";
import "./Video.css";
import { Container } from "react-bootstrap";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import VideoCaseCard from "./VideoCaseCard";
import axios from "axios";
import PreLoader from "../Atomics/Preloader/PreLoader";
import swal from "sweetalert";
import VideoCategorySlide from "../Live/VideoCategory/VideoCategorySlider";
import Login from "../Auth/Login";

export class FollowVideo extends React.Component {
  
  state = {
    videos: [],
    follow: [],
    likes: [],
  };

  componentDidMount() {
    const id = localStorage.getItem("id");
    const vidoes = `https://shop.hoolo.live/api/userFollowedStore/${id}`;
    const follow = `https://shop.hoolo.live/api/following/${id}`;
    const likes = `https://shop.hoolo.live/api/getlikes/${id}`;
    const getVideos = axios.get(vidoes);
    const getFollow = axios.get(follow);
    const getLikes = axios.get(likes);
    axios
      .all([getVideos, getFollow, getLikes])
      .then(
        axios.spread((...allData) => {
          this.setState({
            videos: allData[0].data,
            follow: allData[1].data,
            likes: allData[2].data,
          });
        })
      )
      .catch((res) => {
        console.log(`this is error from laravel ${res}`);
      });
  }

  componentDidUpdate() {
    const id = localStorage.getItem("id");
    const vidoes = `https://shop.hoolo.live/api/userFollowedStore/${id}`;
    const follow = `https://shop.hoolo.live/api/following/${id}`;
    const likes = `https://shop.hoolo.live/api/getlikes/${id}`;
    const getVideos = axios.get(vidoes);
    const getFollow = axios.get(follow);
    const getLikes = axios.get(likes);
    axios
      .all([getVideos, getFollow, getLikes])
      .then(
        axios.spread((...allData) => {
          this.setState({
            videos: allData[0].data,
            follow: allData[1].data,
            likes: allData[2].data,
          });
        })
      )
      .catch((res) => {
        console.log(`this is error from laravel ${res}`);
      });
  }

  render() {
    const id = localStorage.getItem("id");
    return (
      <>
        <ChildNav />
        {id ? (
          <Container fluid className="mt-3">
            <div className="video-block section-padding ">
              {this.state.videos.length == 0 ? (
                <p className="emtyText">You don't follow any stores!</p>
              ) : (
                <Row>
                  {this.state.videos.map(
                    (videos) =>
                     
                        <Col xl={4} sm={6} className="mt-4" key={videos.id}>
                          <VideoCaseCard
                            videos={videos}
                            id={videos.id}
                            video_products={videos.products}
                            history={this.props.history}
                            follow={this.state.follow}
                            likes={this.state.likes}
                          />
                        </Col>
                     
                  )}
                </Row>
              )}
            </div>
          </Container>
        ) : (
          <Login />
        )}
      </>
    );
  }
}

export default FollowVideo;
