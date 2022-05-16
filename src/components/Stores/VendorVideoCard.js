import React, { useRef, useState, useEffect } from "react";
import "../Atomics/VideoCard/VideoCard.css";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ProudctSlideClass from "../Atomics/VideoCard/ProudctSlide";
import { Player, BigPlayButton, ControlBar } from "video-react";

export default function MyVideoCard(props) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect((e) => {
    window.addEventListener("scroll", handleScroll);
  });

  const startVideo = () => {
    videoRef.current.pause();
    setPlaying(false);
  };

  const pauseVideo = () => {
    videoRef.current.play();
    setPlaying(true);
  };

  const handleScroll = () => {
    if (window.scrollY) {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const handleVideoPress = () => {
    if (playing) {
      startVideo();
    } else {
      pauseVideo();
    }
  };

  const {
    id,
    title,
    thumbnail,
    video,
    description,
    embedded_link,
    store_id,
    store_name,
    category_id,
    tags,
    status,
    featured,
    deleted_at,
    created_at,
    updated_at,
    videoTitleHref,
    url,
    shopUrl,
    videoTitle,
    videoCategories,
    shop,
    views,
    timeAgo,
    iconHref,
    imgAlt,
    imgHref,
    imgSrc,
  } = props.vendorVideo;

  return (
    <>
      <div className="video-card">
        <div className="video-card-image" style={{ height: "200px" }}>
          {/* <Link className="play-icon" to={`/video-show/${video}`}>
						<FontAwesomeIcon icon={faPlayCircle} />
					</Link> */}
          {/* <Link to={imgHref}>
						<img className="img-fluid" src={`https://shop.hulusthul.live/public/videos/${thumbnail}`} alt={title} />
					</Link> */}
          <Player
            // onClick={handleVideoPress}
            ref={videoRef}
            className="store-video-player-frame"
            poster={`https://shop.hoolo.live/public/videos/${thumbnail}`}
          >
            <source src={`https://shop.hoolo.live/public/videos/${video}`} />
            <BigPlayButton position="center" />
            <ControlBar autoHide={true} className="video-player-controlbar" />
          </Player>
        </div>
        <div className="video-card-body">
          <div className="video-title">
            <Link to={videoTitleHref}>{title}</Link>
          </div>

          {/*	<div
						
					> 
					<a style={{color:'#28a745', fontWeight:'700'}}  href={shopUrl}>	{  shop}  </a>
						    
					</div>
					<div className="video-view">
						{views} views &nbsp;
						<FontAwesomeIcon icon={faCalendarAlt} /> {timeAgo} ago
				</div> */}
          <div></div>
          <hr />
          <div style={{ margin: "5px 0px" }}>
            <Row>
              <Col>
                <ProudctSlideClass store_uuid={props.store_uuid} />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
