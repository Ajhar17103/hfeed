import React, { useRef, useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import { VerifiedTooltipLinkDark } from "./components/Atomics/CustomCheckTooltips/CustomCheckTooltips";
import "./Video.css";
import { Container } from "react-bootstrap";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import VideoCaseCard from "./VideoCaseCard";
import axios from "axios";
import PreLoader from "../Atomics/Preloader/PreLoader";
import swal from "sweetalert";
import VideoCategorySlide from "../Live/VideoCategory/VideoCategorySlider";

export class VideoCase extends React.Component {
  state = {
    follow: [],
    likes: [],
  };

  componentDidMount() {
    const id = localStorage.getItem("id");

    const follow = `https://shop.hoolo.live/api/following/${id}`;
    const likes = `https://shop.hoolo.live/api/getlikes/${id}`;

    const getFollow = axios.get(follow);
    const getLikes = axios.get(likes);
    axios
      .all([getFollow, getLikes])
      .then(
        axios.spread((...allData) => {
          this.setState({
            follow: allData[0].data,
            likes: allData[1].data,
          });
        })
      )
      .catch((res) => {
        console.log(`this is error from laravel ${res}`);
      });
  }

  componentDidUpdate() {
    const id = localStorage.getItem("id");
    const follow = `https://shop.hoolo.live/api/following/${id}`;
    const likes = `https://shop.hoolo.live/api/getlikes/${id}`;
    const getFollow = axios.get(follow);
    const getLikes = axios.get(likes);
    axios
      .all([getFollow, getLikes])
      .then(
        axios.spread((...allData) => {
          this.setState({
            follow: allData[0].data,
            likes: allData[1].data,
          });
        })
      )
      .catch((res) => {
        console.log(`this is error from laravel ${res}`);
      });
  }

  render() {
    return (
      <>
        <Container fluid className="mt-3">
          <div className="video-block section-padding ">
            <Row>
              {this.props.video.map(
                (videos) =>
                  (this.props.category == null && (
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
                  )) ||
                  (this.props.category ==
                    JSON.parse(videos.category_title).en && (
                    <Col xl={4} sm={6} className="mb-3" key={videos.id}>
                      <VideoCaseCard
                        videos={videos}
                        id={videos.id}
                        video_products={videos.products}
                        history={this.props.history}
                        follow={this.state.follow}
                        likes={this.state.likes}
                      />
                    </Col>
                  ))
              )}
            </Row>
          </div>
        </Container>
      </>
    );
  }
}

export default VideoCase;
