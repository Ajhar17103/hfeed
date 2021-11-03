import React from 'react'
import VideoTitle from './VideoTitle'
import AuthorBox from './AuthorBox'
function VideoFrame(props) {
    const{title,url,id,views,shop,shopUrl,shopIcon}=props.vendorVideo
    return (

        <> 
     
            <div className="single-video"  >
				 <iframe width="100%" height="315px" 
                   src={`${url}?&autoplay=1`}
                    title="YouTube video player"
                     frameborder="0" 
                     allow="autoplay"
                     allowfullscreen>

                     </iframe>
        </div>  
        <VideoTitle
      title={title}
   views={views}

/>
<AuthorBox
					subscriberCount="1.4M"
					imgSrc={shopIcon}
					channelName={shop}
                    channelHref={shopUrl}
					verified
					publishedOn="16793"
				/>
        </>
    )
}

export default VideoFrame
