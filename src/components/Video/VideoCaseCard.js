import React, { useRef, useState, useEffect } from "react";
import { VerifiedTooltip } from "../Atomics/CustomCheckTooltips/CustomCheckTooltips";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopCategoriesSlider from "../Homepage/TopCategoriesSlider";
import { Player, BigPlayButton, ControlBar } from "video-react";
import VideoProducts from "./SlideProudcts/VideoProducts";
import { Card, Button, Dropdown, Modal } from "react-bootstrap";
import axios from "axios";
import {
  faBell,
  faCommentAlt,
  faEnvelope,
  faHeart,
  faShareSquare,
} from "@fortawesome/free-solid-svg-icons";
import GetComment from "./Comments/GetComment";
import PostComment from "./Comments/PostComment";
import Login from "../Auth/Login";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import VideoPlayer from "./VideoPlayer";

export class VideoCaseCard extends React.Component {
  state = {
    products: [],
    videoProducts: [],
    videoLikes: [],
    like: false,
    comment: false,
    ref: null,
  };

  componentDidMount() {
    this.fatchData(this.props.video_products);

    const id = localStorage.getItem("id");
    const proudcts = "https://shop.hoolo.live/api/allproducts";

    const getProudct = axios.get(proudcts);

    axios
      .all([getProudct])
      .then(
        axios.spread((...allData) => {
          this.setState({
            products: allData[0].data,
          });
        })
      )
      .catch((err) => {
        console.log(`this is error from laravel ${err}`);
      });
  }

  fatchData(video_products) {
    let getValue = video_products;
    const ArrayValue = getValue.split(",");
    this.setState({
      videoProducts: ArrayValue,
    });
  }

  Follow = (e) => {
    const followObj = {
      user_id: localStorage.getItem("id"),
      store_id: this.props.videos.store_id,
      status: 1,
    };
    e.preventDefault();
    axios
      .post("https://shop.hoolo.live/api/follow", followObj)
      .then((res) => {
                window.location.reload()
      })

      .catch((err) => {
        console.log(err);
      });
  };

  UnFollow = (e) => {
    const unfollowObj = {
      user_id: localStorage.getItem("id"),
      store_id: this.props.videos.store_id,
    };
    e.preventDefault();
    axios
      .post("https://shop.hoolo.live/api/unfollow", unfollowObj)
      .then((res) => {
        // window.location.reload()
      })

      .catch((err) => {
        console.log(err);
      });
  };

  Like = (e) => {
    const likeObje = {
      user_id: localStorage.getItem("id"),
      video: this.props.videos.id,
      type: "like",
    };
    e.preventDefault();
    axios
      .post("https://shop.hoolo.live/api/savelikes", likeObje)
      .then((res) => {
        //  console.log(res.data.Count)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  UnLike = (e) => {
    const unlikeObje = {
      user_id: localStorage.getItem("id"),
      video: this.props.videos.id,
    };
    e.preventDefault();
    axios
      .post("https://shop.hoolo.live/api/unlike", unlikeObje)
      .then((res) => {
        // console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  CheckLogin = () => {
    const userId = localStorage.getItem("id");

    if (!userId) {
      swal("You Have to Login!", "login now", "success");
      return this.props.history.push("/auth/login");
    }
  };

  hasFollow = (followStore, store_id) =>
    followStore.find((follow) => follow.store_id === store_id);
  hasLiked = (likes, userId) =>
    likes.find((like) => like.id === this.props.videos.id);

  render() {
    const {
      id,
      title,
      video,
      thumbnail,
      store_name,
      description,
      song,
      likes,
      messages,
      shares,
      store_logo,
      store_id,
      products,
      store_uuid,
    } = this.props.videos;
    const userId = localStorage.getItem("id");

    return (
      <>
        <div className="mainVideo-card">
          <div className="mainVideo-card-header">
            <div className="mainVideo-card-header-profile">
              <div className="mainVideo-card-header-profile-info">
                <img
                  src={`https://shop.hoolo.live/images/store/${store_logo}`}
                />

                <p className="title">
                  <Link
                    to={`/vendors/${store_uuid}`}
                    style={{ color: "black" }}
                  >
                    <strong>{store_name}</strong>
                  </Link>
                  <div onClick={this.CheckLogin} className="ml-1">
                    {this.hasFollow(this.props.follow, store_id) ? (
                      <b
                        className="followIcon"
                        type="button"
                        onClick={this.UnFollow}
                      >
                        <FontAwesomeIcon icon={faBell} />
                      </b>
                    ) : (
                      <b className="follow" type="button" onClick={this.Follow}>
                        Follow
                      </b>
                    )}

                    {/* {this.state.follow? <b className="followIcon" type="button" >
                   
                   <FontAwesomeIcon  icon={faBell} onClick={this.UnFollow}   />

                   </b>

                    :

                   <b className="follow" type="button"  onClick={this.Follow}  > 
                   Follow
                   </b> 
                   
                   } */}
                  </div>
                </p>
              </div>

              {/* <div>
              <h6>Date</h6>
             </div>   */}
            </div>

            <div className="mainVideo-card-header-title">
              <p>{title}</p>
            </div>
          </div>

          <div className="mainVideo-card-body">
            {/* <video 
               style={{width:'100%', height:'300px'}} 
               onClick={handleVideoPress}
               ref={videoRef} 
               src='https://shop.hoolo.live/public/videos/teddy.mp4'
               poster='https://pixy.org/src/21/219269.jpg'
              /> */}

            <VideoPlayer video={video} thumbnail={thumbnail} />
          </div>

          <div className="mainVideo-card-product">
            <VideoProducts
              products={this.state.products}
              videoProducts={this.state.videoProducts}
            />
          </div>

          <div className="mainVideo-card-footer">
            <div className="mainVideo-card-footer-content">
              <div className="d-flex" onClick={this.CheckLogin}>
                <Likes id={this.props.id} />
              <p>
              
                {this.hasLiked(this.props.likes, id) ? (
               <span  type='submit'  onClick={this.UnLike}>
                   <img src="/img/svg/FillHeart.svg" style={{width:'20px'}}  />
               </span>

                ) : (
                   
                 <span  type="submit" onClick={this.Like}>
                   <img src="/img/svg/Heart.svg" style={{width:'20px'}}     />
                 </span> 
                )}

              </p> 
               
    
              </div>

              <div className="d-flex">
                <Comments id={this.props.id} />
                <p className="mr-2"  type='submit'  onClick={() => this.setState({ comment: true })}>   <img src="/img/svg/Comment.svg" style={{width:'20px'}}  /></p>
                
           
                
              </div>

              <div>
                 
                <p><img src="/img/svg/Msg.svg" style={{width:'20px'}} /></p> 
              </div>

              <div className="d-flex">
                <p className="mr-2">50 <img src="/img/svg/Share.svg" style={{width:'20px'}} /> </p>
                 
                
              </div>
            </div>
          </div>
        </div>

        <Modal
          size="lg"
          show={this.state.comment}
          onHide={() => this.setState({ comment: false })}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          {userId ? (
            <>
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  Comments
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <GetComment video_products={this.state.videoProducts} id={id} />

                <PostComment id={id} />
              </Modal.Body>{" "}
            </>
          ) : (
            <Login />
          )}
        </Modal>
      </>
    );
  }
}

export default VideoCaseCard;

export class Likes extends React.Component {
  state = {
    likes: [],
  };
  componentDidMount() {
    axios
      .get(`https://shop.hoolo.live/api/videolikes/${this.props.id}`)
      .then((res) => {
        this.setState({
          likes: res.data,
        });
      });
  }
  componentDidUpdate() {
    axios
      .get(`https://shop.hoolo.live/api/videolikes/${this.props.id}`)
      .then((res) => {
        this.setState({
          likes: res.data,
        });
      });
  }

  render() {
    return (
      <>
        <p  className="mr-2">{this.state.likes.length}</p>
      </>
    );
  }
}

export class Comments extends React.Component {
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
    return (
      <>
        <p  className="mr-2">{this.state.comments.length}</p>
      </>
    );
  }
}