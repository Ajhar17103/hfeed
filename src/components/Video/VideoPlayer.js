import React, { useRef, useState, useEffect } from "react";
import { Player, BigPlayButton, ControlBar } from "video-react";

const VideoPlayer = (props) => {
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
  return (
    <>
      <Player
        // onClick={handleVideoPress}
        ref={videoRef}
        className="video-player-frame"
        poster={`https://shop.hoolo.live/public/videos/${props.thumbnail}`}
      >
        <source src={`https://shop.hoolo.live/public/videos/${props.video}`} />
        <BigPlayButton position="center" />
        <ControlBar autoHide={true} className="video-player-controlbar" />
      </Player>
    </>
  );
};

export default VideoPlayer;
