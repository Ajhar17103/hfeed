import axios from "axios";
import { Component, lazy, Suspense } from "react";
import { Container } from "react-bootstrap";
/* import React, { Component } from 'react'
 
import { Player,ControlBar,PosterImage,LoadingSpinner,ClosedCaptionButton } from 'video-react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Row,Col} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'
import 'video-react/dist/video-react.css';


export default class Test extends Component {

state={
    isLoading:false,
    videos:[]
}
 componentDidMount(){

       axios.get('http://hulusthul.live/api/videos')
      .then(res=>{
       

        this.setState({
            videos:res.data
        })
      })
      .catch(res=>{
        alert(`this is error from laravel ${res}`)
      })

    }
   
   
    render() {
     
           
        return (
            <div className="video-block section-padding p-3">
                <h1>this is test api</h1>
                <Row>
                    {
                        this.state.videos.map(video=>(
                            <Col xl={3} sm={6} className="mb-3 card">
                          <ComponentTest video={video} id={this.props.id}
                           />
                       </Col>
                        ))
                    }
                       </Row>
             
            </div>
        )
    }
}


 

function ComponentTest(props) {
    const {title,description,video,category_id,store_id,store_name,product_name,product_detail,thumbnail,hover_thumbnail}=props.video;

  /*  { let test = JSON.parse(product_detail); }*/
/*  return (
       
        <>
	
	        {
                console.log(props.video)
            }
        <div className="video-card">
         
            <div className="video-card-image">
                <Link className="play-icon" to='#'>
                   
                </Link>
               
             
            </div>

            <div className="video-card-body">
        <Player videoId="video-1" autoPlay poster={`https://hulusthul.live/public/videos/${thumbnail}`} >

              <source src={`https://hulusthul.live/videos/${video}`}/>
              <track
                        kind="captions"
                        src="/assets/elephantsdream/captions.en.vtt"
                        srcLang="en"
                        label="English"
                        default
               />
             
              <LoadingSpinner /> 
         
              <ControlBar autoHide={false}>  
              <ClosedCaptionButton order={1} /></ControlBar>
              

        </Player>

                <div className="video-title">
                    <Link >{title} </Link>
                </div>

            	<div
                    
                > 
                <a style={{color:'#28a745', fontWeight:'700'}}  href='#' />
               
                       {
                           dangerouslySetInnerHTML={{ __html: test.en }}  
                       }
             /*   </div>
              
                <div className="video-view">
                  {store_id}
                   
            </div>  
                <div>
           
                </div>
            
                
            </div>
        </div>
       
    </>
 
       
    )
}

 

import React, { useRef } from "react";
import { useState, useEffect } from "react";
import "./test.css"

const useVideoPlayer = (videoElement) => {
    const [playerState, setPlayerState] = useState({
      isPlaying: false,
      progress: 0,
      speed: 1,
      isMuted: false,
    });
  
    const togglePlay = () => {
      setPlayerState({
        ...playerState,
        isPlaying: !playerState.isPlaying,
      });
    };
  
    useEffect(() => {
      playerState.isPlaying
        ? videoElement.current.play()
        : videoElement.current.pause();
    }, [playerState.isPlaying, videoElement]);
  
    const handleOnTimeUpdate = () => {
      const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
      setPlayerState({
        ...playerState,
        progress,
      });
    };
  
    const handleVideoProgress = (event) => {
      const manualChange = Number(event.target.value);
      videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
      setPlayerState({
        ...playerState,
        progress: manualChange,
      });
    };
  
    const handleVideoSpeed = (event) => {
      const speed = Number(event.target.value);
      videoElement.current.playbackRate = speed;
      setPlayerState({
        ...playerState,
        speed,
      });
    };
  
    const toggleMute = () => {
      setPlayerState({
        ...playerState,
        isMuted: !playerState.isMuted,
      });
    };
  
    useEffect(() => {
      playerState.isMuted
        ? (videoElement.current.muted = true)
        : (videoElement.current.muted = false);
    }, [playerState.isMuted, videoElement]);
  
    return {
      playerState,
      togglePlay,
      handleOnTimeUpdate,
      handleVideoProgress,
      handleVideoSpeed,
      toggleMute,
    };
  };



  const Test = () => {
    const videoElement = useRef(null);
    const {
      playerState,
      togglePlay,
      handleOnTimeUpdate,
      handleVideoProgress,
      handleVideoSpeed,
      toggleMute,
    } = useVideoPlayer(videoElement);
    return (
      <div className="container">
        <div className="video-wrapper">
          <video
            src="http://media.w3.org/2010/05/bunny/movie.mp4"
            ref={videoElement}
            onTimeUpdate={handleOnTimeUpdate}
          />
          <div className="controls">
            <div className="actions">
              <button onClick={togglePlay}>
                {!playerState.isPlaying ? (
                  <i className="bx bx-play"></i>
                ) : (
                  <i className="bx bx-pause"></i>
                )}
              </button>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={playerState.progress}
              onChange={(e) => handleVideoProgress(e)}
            />
            <select
              className="velocity"
              value={playerState.speed}
              onChange={(e) => handleVideoSpeed(e)}
            >
              <option value="0.50">0.50x</option>
              <option value="1">1x</option>
              <option value="1.25">1.25x</option>
              <option value="2">2x</option>
            </select>
            <button className="mute-btn" onClick={toggleMute}>
              {!playerState.isMuted ? (
                <i className="bx bxs-volume-full"></i>
              ) : (
                <i className="bx bxs-volume-mute"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  };

export default Test;
 

 

 
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

 function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
 
  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}


export default function Test() {
  
let string="10,20,30,40,10,30,30"
let template=string.split(',')
let i;

 
 
  return( 
    <div>
      {
        console.log(template)
      }
  
  {
    
    template.map((e)=> e==30?<h1>true</h1>:<h1>false</h1>
    )
  }
     
 
    </div>)
  
 

  
}
 

import React, { Component } from 'react'

//* import { Player,ControlBar,PosterImage,LoadingSpinner,ClosedCaptionButton } from 'video-react';
import ReactPlayer from 'react-player'

export class Test extends Component {
  state={
    products:[]
  }
  componentDidMount(){
    axios.get('https://shop.hulusthul.live/api/storeproducts/11')
    .then(res=>{
     

      this.setState({
        products:res.data
      })
    })
    .catch(res=>{
      console.log(`this is error from laravel ${res}`)
    })
  }
	render() {
		return (
			<>
      <div>
	  {
      this.state.products.map((products)=>(
        console.log(products)
      ))
    }
		</div>	
			</>
		)
	}
}

export default Test
 

 
import React, { useState, Component  } from 'react';
 
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCommentAlt, faShareAlt, faShoppingBag, faSign, faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal'
import {Form,InputGroup,FormControl,Dropdown,DropdownButton,Spinner,Navbar,Nav,Container} from 'react-bootstrap';
import Button from '@mui/material/Button';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import axios from 'axios';
import * as ReactBoostrap from 'react-bootstrap';
 
import NavDropdown from "react-bootstrap/NavDropdown";
import {
	faUserCircle,
	faVideo,
	faCog,
} from "@fortawesome/free-solid-svg-icons";


export default class Test extends Component {
state={
    products:[],
    videoProducts:[],
    isLoading:false,
  }
   



  componentDidMount(){
    const array='10,20,30,40';
    console.log(array);
  this.fatchData(array)

    axios.get('https://shop.hulusthul.live/api/comments')
    .then(res=>{
      this.setState({
        products:res.data,
        isLoading:true
      })
    })
    
  }
  fatchData(array){
   let getValue=array
   console.log(getValue);

  const ArrayValue=getValue.split(',')  
    this.setState({
      videoProducts:ArrayValue
    })
  } 
  render() {
 
 
    return (
     <div>
  <Navbar bg="dark" variant="dark" fixed="bottom">
     
   
    <Nav >
       <div><Nav.Link href="#">Home</Nav.Link></div>
       <div><Nav.Link href="/#">Home</Nav.Link></div>
       <div><Nav.Link href="/#">Home</Nav.Link></div>
       <div><Nav.Link href="/#">Home</Nav.Link></div>
    </Nav>
  
  </Navbar>


<div style={{height:'100vh', background:'red'}}>
<h1>hello</h1>
</div>
<div style={{height:'100vh', background:'yellow'}}>
<h1>hello</h1>
</div>
       </div>
    )
  }
}
 



import React, { Component } from 'react'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios'
export class Test extends Component {

  state={
    user:'',
    email:'',
    comment:''
    
  }
  onChangeHandler=(e)=>{
    this.setState({
          [e.target.name]:e.target.value
       })
     
    }
    handleSubmit=(e)=>{
      e.preventDefault();
  
      
   console.log(this.state)


    axios.post('https://shop.hulusthul.live/api/videocomment',this.state)
            .then(res=>{
              console.log(res)
              
        })
        .catch(error=>{
          console.log(error)
  
        })
   
  
    }
  render() {
    return (
      <div style={{width:'500px'}}>
        <div className="card blog">
				<div className="card-body">
					<h5 className="card-title mb-4">Leave a Comment</h5>
					<Form onSubmit={this.handleSubmit}>
						<Row>
							<Col lg={6} md={6}>
								<Form.Group controlId="comment-author-name">
									<Form.Label>
										Your Name
										<span className="text-danger">*</span>
									</Form.Label>
									<Form.Control type="text" name="user"   value={this.state.user} onChange={this.onChangeHandler}/>
								</Form.Group>
							</Col>
							<Col lg={6} md={6}>
								<Form.Group controlId="comment-author-email">
									<Form.Label>
										Your Email
										<span className="text-danger">*</span>
									</Form.Label>
									<Form.Control
										type="email"
										placeholder=""
								    name='email'
                    value={this.state.email}
                    onChange={this.onChangeHandler}
									/>
								</Form.Group>
							</Col>
              <Col lg={12} md={6}>

						<Form.Group controlId="comment-author-email">
							<Form.Label>
								Review <span className="text-danger">*</span>
							</Form.Label>

							<Form.Control   
               onChange={this.onChangeHandler}  
               type="text" 
                name="comment" 
                value={this.state.comment}
               />
						</Form.Group>
            </Col>
            </Row>
						<Button variant="success"  type="submit">Post Comment</Button>
					</Form>
				</div>
			</div>
      </div>
    )
  }
}

export default Test
 
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

import Homepage from './components/Homepage/Homepage';
import TopCategory from './components/Homepage/TopCategory';

export class Test extends Component {
  componentDidMount(){
    localStorage.setItem('name', 'azhar')
 
  }
  closeWin=()=>{
    console.log(window.history.forward());
  }
  render() {
    return (
     <>
           <TopCategory/>
     </>
    )
  }
}

export default Test

 
import Ticker from 'react-ticker'
import PageVisibility from 'react-page-visibility'
import React, { Component } from 'react'

export class Test extends Component {
  state={
    videoComment:[],
  }
 componentDidMount(){
  
 

    axios.get(`https://shop.hulusthul.live/api/videocomment/34`)
    .then(res=>{
      this.setState({
        videoComment:res.data
      })
       
    })
    .catch(res=>{
      console.log(`this is error from laravel ${res}`)
    })
  }
  render() {
    return (
      <>

       {
         this.state.videoComment.map((e)=>(
          <div>
            <p>{e.comment}</p>
          </div>
         ))
       }
      </>

    )
  }
}

export default Test


import React, { Component } from 'react'
import './test.css'
export class Test extends Component {
  render() {
    return (
 <>
        <div className='headline'>International</div>
        <div className='news-areas'>
          <div className='tickers'>
            <div className='ticker-animations'>

             <div className='ticker-items'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <span>||</span></div>

             <div className='ticker-items'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <span>||</span></div>

             <div className='ticker-items'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <span>||</span></div>

             <div className='ticker-items'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <span>||</span></div>

             <div className='ticker-items'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <span>||</span></div>
            
            </div>
          </div>
        </div>
        </>
    )
  }
}

export default Test


import React, {  Component, PureComponent } from 'react';

export class Test extends  Component {
  state={
    name:'azharul Islam'
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({
        name:'Azharul Islam'
      })
    },1000)
  }
  render() {
    return <>
                   <Test1 name={this.state.name}/>
                   <Test2 name={this.state.name}/>
        </>;
  }
}

export default Test;
 


 class Test1 extends  Component {
  render() {
    return <>
     <h1>I'm {this.props.name}</h1>
    </>;
  }
}

 

 class Test2 extends PureComponent {
  render() {
    return <>
    <h1>I'm {this.props.name}</h1>
   </>;
  }
}


 


import React, { Component } from 'react';
import PreLoader from './components/Atomics/Preloader/PreLoader';

export class Test extends Component {
  state={
    url:'',
    videos:[],
    
    
  }
  componentDidMount(){
    const id='25'
    axios.get('https://shop.hulusthul.live/api/users/profile/25')
    .then(res=>{
      console.log(res.data)
      this.setState({
        videos:[res.data],
     
     })
    })
    .catch(err=>{
      console.log(err)
    })
  }
  render() {
    return (
      <> 

      <div>
        {
          this.state.videos.map((user)=>(
            <div>{user.orders.map(e=><h1>{e.id}</h1>)}
            <h1>{user.count}</h1>
            </div>
           
          ))
          
          }
            


       
      
      </div>
      
      </>
    );
  }
}

export default Test;


import React from 'react';
import { Accordion, Card,Table,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight,faShoppingCart} from "@fortawesome/free-solid-svg-icons";

function Test({totalOrders=3}) {

  
	const classes = `card text-white bg-primary o-hidden h-100 border-none`;
    
  return (
       <>
              
				 
<div className="col-xl-4 col-sm-6 mb-4">

				<div className={classes}>
					<div className="card-body">
         
						<div className="card-body-icon">
							<FontAwesomeIcon icon={faShoppingCart} fixedWidth />
						</div>
						<div className=" d-flex justify-content-between">
							<b>Orders</b> 
							<strong style={{fontWeight:'900'}}> {totalOrders ==0 ? 'No Orders': totalOrders}</strong> 
						</div>
					</div>
          
				 <Accordion>
          <Accordion.Toggle as={Card.Footer} variant="link" eventKey="0">
					<a	className="card-footer text-white clearfix small z-1">
						<span className="float-left">View Details</span>
						<span className="float-right">
							<FontAwesomeIcon icon={faAngleRight} />
						</span>
					</a>
          </Accordion.Toggle>
     
	 
   
    <Accordion.Collapse eventKey="0">
    <Table striped bordered hover className='bg-light'>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
    </Accordion.Collapse>
   
   
</Accordion>
 
				</div>
			</div>
     
       </>
);
}

 
 


export default Test;

 

import React, { Component } from 'react';

export class Test extends Component {

  state={
    accountinfo:[],
  }
componentDidMount(){
  const id=localStorage.getItem('id')
  axios.get(`https://shop.hulusthul.live/api/users/profile/${id}`)
  .then(res=>{
  this.setState({
    accountinfo:[res.data]
  })
  })
  

}
  render() {
    return <div>

      {
        this.state.accountinfo.map((cart)=>(
          <h1 key={cart.id}>{cart.user_cart.length}</h1>
        ))
      }
    </div>;
  }
}

export default Test;
*/

// function ChannelCard({
// 	imgSrc,
// 	imgAlt = "",
// 	imgHref = "#",
// 	views,
// 	channelName,
// 	subscriberCount,
// 	channelHref = "#",
// 	verified,
// 	isSubscribed,
// 	outline = false,
// }) {
// 	let buttonVariant;

// 	if (outline) {
// 		buttonVariant = isSubscribed ? "outline-secondary" : "outline-danger";
// 	} else {
// 		buttonVariant = isSubscribed ? "secondary" : "danger";
// 	}
// 	const buttonText = isSubscribed ? "Subscribed" : "Subscribe";
//   const [playing, setPlaying] = useState(false);
//   const videoRef = useRef(null);

//   // useEffect((e) => {
//   //   window.addEventListener('scroll', handleScroll)

//   // });

//   const startVideo = () => {
//     videoRef.current.pause();
//     setPlaying(false);
//   }

//   const pauseVideo = () => {
//     videoRef.current.play();
//     setPlaying(true);
//   }

//   // const handleScroll = () => {

//   //   if (window.scrollY) {
//   //     videoRef.current.pause();
//   //     setPlaying(false);
//   //     }

//   //   }

//     const handleVideoPress = () => {
//       if (playing) {
//         startVideo();
//       } else {
//         pauseVideo();
//       }
//     };

// 	return (
// 		<>
// 			<div className="channels-card">

//         <div className="channels-card-image">
//             <video
//             style={{width:'100%', height:'300px'}}
//             onClick={handleVideoPress}
//             ref={videoRef}
//             src='https://shop.hulusthul.live/public/videos/teddy.mp4'
//             poster='https://pixy.org/src/21/219269.jpg'

//         ></video>
//         </div>
//         <div className="channels-card-body">

//         <TopCategoriesSlider/>
// 				</div>
// 				  <div className="channels-card-body">
// 					<div className="channels-title">
// 						<a href={channelHref}>
// 							{channelName}{" "}
// 							{verified ? <VerifiedTooltipLinkDark /> : ""}
// 						</a>
// 					</div>
// 					<div className="channels-view">
// 						{subscriberCount} subscribers
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// }

// export default function Test() {
// 	return (
// 		<>
//     <ContentWrapper>
//       <Container fluid>
// 			<div className="video-block section-padding ">
// 				<Row>

// 					<Col xl={4} sm={6} className="mb-3">
// 						<ChannelCard
// 							imgSrc="img/s1.jpg"
// 							views="1.4M"
// 							channelName="Channel Name"
// 							subscriberCount="382,323"
// 							outline
// 						/>
// 					</Col>
// 					<Col xl={4} sm={6} className="mb-3">
// 						<ChannelCard
// 							imgSrc="img/s1.jpg"
// 							views="1.4M"
// 							channelName="Channel Name"
// 							subscriberCount="382,323"
// 							outline
// 						/>
// 					</Col>
// 					<Col xl={4} sm={6} className="mb-3">
// 						<ChannelCard
// 							imgSrc="img/s1.jpg"
// 							views="1.4M"
// 							channelName="Channel Name"
// 							subscriberCount="382,323"
// 							verified
// 							isSubscribed
// 							outline
// 						/>
// 					</Col>
// 					<Col xl={4} sm={6} className="mb-3">
// 						<ChannelCard
// 							imgSrc="img/s1.jpg"
// 							views="1.4M"
// 							channelName="Channel Name"
// 							subscriberCount="382,323"
// 							outline
// 						/>
// 					</Col>
// 				</Row>
// 			</div>
//       </Container>
//     </ContentWrapper>
// 		</>
// 	);
// }

// import { Player,BigPlayButton,ControlBar } from 'video-react';
// function Test() {
//   return (
//     <Player    poster="https://pixy.org/src/21/219269.jpg" >
//     <source src="https://shop.hulusthul.live/public/videos/teddy.mp4" />
//     <BigPlayButton position="center" />
//      <ControlBar autoHide={true} />
//   </Player>
//   )
// }

// export default Test

// import { withRouter } from "react-router-dom";
// import {Form} from 'react-bootstrap';

// import swal from 'sweetalert'

// export class Test extends React.Component {
//     state={
//         user_id:101,
//         user:'',
//         video_id:this.props.id,
//         status:1,
//         email:'',
//         comment:'',
//         product:[],
//         category:[],

//       }
//       componentDidMount(){

//         // const products='https://shop.hulusthul.live/api/allproducts';
//         // const category=' https://shop.hulusthul.live/api/allcategories'

//         // const getProudct=axios.get(products);
//         // const getCategory=axios.get(category);

//       axios.all( [axios.get('https://shop.hulusthul.live/api/allproducts'), axios.get('https://shop.hulusthul.live/api/allcategories')])
//       .then(axios.spread((product, category)=>{
//         this.setState({
//                products:product.data,
//                categorys:category.data
//         })
//         console.log(this.state.category);
//         console.log(this.state.product);
//       }))
//       }

//       onChangeHandler=(e)=>{
//         this.setState({
//               [e.target.name]:e.target.value
//            })

//         }
//         handleSubmit=(e)=>{
//           e.preventDefault();

//           console.log(this.state)

//         // axios.post('https://shop.hulusthul.live/api/videocomment',this.state)
//         //         .then(res=>{
//         //           if(res.data.status == 200){

//         //             swal('Success', 'Comment has been post Successfully', 'success')

//         //           }

//         //     })
//         //     .catch(error=>{
//         //       console.log(error)

//         //     })
//         e.target.reset();
//        this.setState({
//         user_id: null,
//         user:'',
//         video_id:null,
//         status:null,
//         email:'',
//         comment:''
//        })

//         }

//       render() {

//         return (
//           <div >
//             <div className="card blog">
//                     <div className="card-body">

//                         <Form onSubmit={this.handleSubmit}>
//                             <Row>
//                                 <Col lg={6} md={6}>
//                                     <Form.Group controlId="comment-author-name">
//                                         <Form.Label>
//                                             Your Name
//                                             <span className="text-danger">*</span>
//                                         </Form.Label>
//                                         <Form.Control type="text" name="user"   value={localStorage.getItem('name')} onChange={this.onChangeHandler}/>
//                                     </Form.Group>
//                                 </Col>
//                                 <Col lg={6} md={6}>
//                                     <Form.Group controlId="comment-author-email">
//                                         <Form.Label>
//                                             Your Email
//                                             <span className="text-danger">*</span>
//                                         </Form.Label>
//                                         <Form.Control
//                                             type="email"
//                                             placeholder=""
//                                         name='email'
//                         value={this.state.email}
//                         onChange={this.onChangeHandler}
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                   <Col lg={12} md={6}>

//                             <Form.Group controlId="comment-author-email">
//                                 <Form.Label>
//                                     Review <span className="text-danger">*</span>
//                                 </Form.Label>

//                                 <Form.Control
//                    onChange={this.onChangeHandler}
//                    type="text"
//                     name="comment"
//                     value={this.state.comment}
//                    />
//                             </Form.Group>
//                 </Col>
//                 </Row>
//                             <Button variant="success"  type="submit">Post Comment</Button>
//                         </Form>
//                     </div>
//                 </div>
//           </div>
//         )
//       }
//     }

// export default withRouter(Test);
// import './test.css'

// function Test() {
//   return (

//     <>
//     <Navbar />
//     <div>
//           <h4>What does Lorem ipsum dolor mean?
// Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense.

// It is a sequence of Latin words that, as they are positioned, do not form sentences with a complete sense, but give life to a test text useful to fill spaces that will subsequently be occupied from ad hoc texts composed by communication professionals.

// It is certainly the most famous placeholder text even if there are different versions distinguishable from the order in which the Latin words are repeated.

// Lorem ipsum contains the typefaces more in use, an aspect that allows you to have an overview of the rendering of the text in terms of font choice and font size .

// When referring to Lorem ipsum, different expressions are used, namely fill text , fictitious text , blind text or placeholder text : in short, its meaning can also be zero, but its usefulness is so clear as to go through the centuries and resist the ironic and modern versions that came with the arrival of the web.</h4>
// <h4>What does Lorem ipsum dolor mean?
// Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense.

// It is a sequence of Latin words that, as they are positioned, do not form sentences with a complete sense, but give life to a test text useful to fill spaces that will subsequently be occupied from ad hoc texts composed by communication professionals.

// It is certainly the most famous placeholder text even if there are different versions distinguishable from the order in which the Latin words are repeated.

// Lorem ipsum contains the typefaces more in use, an aspect that allows you to have an overview of the rendering of the text in terms of font choice and font size .

// When referring to Lorem ipsum, different expressions are used, namely fill text , fictitious text , blind text or placeholder text : in short, its meaning can also be zero, but its usefulness is so clear as to go through the centuries and resist the ironic and modern versions that came with the arrival of the web.</h4>
// <h4>What does Lorem ipsum dolor mean?
// Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense.

// It is a sequence of Latin words that, as they are positioned, do not form sentences with a complete sense, but give life to a test text useful to fill spaces that will subsequently be occupied from ad hoc texts composed by communication professionals.

// It is certainly the most famous placeholder text even if there are different versions distinguishable from the order in which the Latin words are repeated.

// Lorem ipsum contains the typefaces more in use, an aspect that allows you to have an overview of the rendering of the text in terms of font choice and font size .

// When referring to Lorem ipsum, different expressions are used, namely fill text , fictitious text , blind text or placeholder text : in short, its meaning can also be zero, but its usefulness is so clear as to go through the centuries and resist the ironic and modern versions that came with the arrival of the web.</h4>
// <h4>What does Lorem ipsum dolor mean?
// Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense.

// It is a sequence of Latin words that, as they are positioned, do not form sentences with a complete sense, but give life to a test text useful to fill spaces that will subsequently be occupied from ad hoc texts composed by communication professionals.

// It is certainly the most famous placeholder text even if there are different versions distinguishable from the order in which the Latin words are repeated.

// Lorem ipsum contains the typefaces more in use, an aspect that allows you to have an overview of the rendering of the text in terms of font choice and font size .

// When referring to Lorem ipsum, different expressions are used, namely fill text , fictitious text , blind text or placeholder text : in short, its meaning can also be zero, but its usefulness is so clear as to go through the centuries and resist the ironic and modern versions that came with the arrival of the web.</h4>
// <h4>What does Lorem ipsum dolor mean?
// Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense.

// It is a sequence of Latin words that, as they are positioned, do not form sentences with a complete sense, but give life to a test text useful to fill spaces that will subsequently be occupied from ad hoc texts composed by communication professionals.

// It is certainly the most famous placeholder text even if there are different versions distinguishable from the order in which the Latin words are repeated.

// Lorem ipsum contains the typefaces more in use, an aspect that allows you to have an overview of the rendering of the text in terms of font choice and font size .

// When referring to Lorem ipsum, different expressions are used, namely fill text , fictitious text , blind text or placeholder text : in short, its meaning can also be zero, but its usefulness is so clear as to go through the centuries and resist the ironic and modern versions that came with the arrival of the web.</h4>
// <h4>What does Lorem ipsum dolor mean?
// Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense.

// It is a sequence of Latin words that, as they are positioned, do not form sentences with a complete sense, but give life to a test text useful to fill spaces that will subsequently be occupied from ad hoc texts composed by communication professionals.

// It is certainly the most famous placeholder text even if there are different versions distinguishable from the order in which the Latin words are repeated.

// Lorem ipsum contains the typefaces more in use, an aspect that allows you to have an overview of the rendering of the text in terms of font choice and font size .

// When referring to Lorem ipsum, different expressions are used, namely fill text , fictitious text , blind text or placeholder text : in short, its meaning can also be zero, but its usefulness is so clear as to go through the centuries and resist the ironic and modern versions that came with the arrival of the web.</h4>
// <h4>What does Lorem ipsum dolor mean?
// Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense.

// It is a sequence of Latin words that, as they are positioned, do not form sentences with a complete sense, but give life to a test text useful to fill spaces that will subsequently be occupied from ad hoc texts composed by communication professionals.

// It is certainly the most famous placeholder text even if there are different versions distinguishable from the order in which the Latin words are repeated.

// Lorem ipsum contains the typefaces more in use, an aspect that allows you to have an overview of the rendering of the text in terms of font choice and font size .

// When referring to Lorem ipsum, different expressions are used, namely fill text , fictitious text , blind text or placeholder text : in short, its meaning can also be zero, but its usefulness is so clear as to go through the centuries and resist the ironic and modern versions that came with the arrival of the web.</h4>
// <h4>What does Lorem ipsum dolor mean?
// Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense.

// It is a sequence of Latin words that, as they are positioned, do not form sentences with a complete sense, but give life to a test text useful to fill spaces that will subsequently be occupied from ad hoc texts composed by communication professionals.

// It is certainly the most famous placeholder text even if there are different versions distinguishable from the order in which the Latin words are repeated.

// Lorem ipsum contains the typefaces more in use, an aspect that allows you to have an overview of the rendering of the text in terms of font choice and font size .

// When referring to Lorem ipsum, different expressions are used, namely fill text , fictitious text , blind text or placeholder text : in short, its meaning can also be zero, but its usefulness is so clear as to go through the centuries and resist the ironic and modern versions that came with the arrival of the web.</h4>
//         </div>
//     </>
//   )
// }

// export default Test

// class Navbar extends Component {
//   constructor() {
//     super();
//     this.state = {
//       show: true,
//       scrollPos: 0
//     };
//   }
//   componentDidMount() {
//     window.addEventListener("scroll", this.handleScroll);
//   }
//   componentWillUnmount() {
//     window.removeEventListener("scroll", this.handleScroll);
//   }
//   handleScroll = () => {
//     // console.log(document.body.getBoundingClientRect());
//     this.setState({
//       scrollPos: document.body.getBoundingClientRect().top,
//       show: document.body.getBoundingClientRect().top > this.state.scrollPos
//     });
//   };
//   render() {
//     console.log(this.state);
//     return <nav className={this.state.show ? "active nav" : "hidden nav"}>Navbar</nav>;;
//   }
// }

// export class Test extends Component {

//   state={
//     url:'',
//     videos:[],
//     follow:[],
//     isloading:false

//   }
//  componentDidMount() {

//   const id=localStorage.getItem('id')
//        const  videos='https://shop.hulusthul.live/api/videos';
//        const  follow =`https://shop.hulusthul.live/api/following/${id}`
//        const getVideos=axios.get(videos);
//        const getFollow= axios.get(follow);
//        axios.all([getVideos,getFollow])
//       .then(axios.spread((... allData)=>{
//        this.setState({
//         videos:allData[0].data,
//         follow:allData[1].data,
//         isloading: true
//        })
//       }))
//    .catch(res=>{
//      console.log(`this is error from laravel ${res}`)
//    })
//   }

//   render() {
//     console.log(this.state.user)
//     return (
//       <div>{
//        this.state.isloading? <>{this.state.videos.map(e=><h1>{e.id}</h1>)}</>:<><p>loading...</p></>
//         }</div>
//     )
//   }
// }

// const hasMatch =(followStore, store_id) => { return  followStore.find(function (value) {return value.store_id == store_id }); }

// export default Test

// import React from 'react'
// import {Nav} from'react-bootstrap';

// export const Test = (props) => {
//   return (
//     <>
//     <Nav defaultActiveKey="/" as="ul">
//   <Nav.Item as="li">
//     <Nav.Link to="/">Active</Nav.Link>
//   </Nav.Item>
//   <Nav.Item as="li">
//     <Nav.Link eventKey="link-1">Link</Nav.Link>
//   </Nav.Item>
//   <Nav.Item as="li">
//     <Nav.Link eventKey="link-2">Link</Nav.Link>
//   </Nav.Item>
// </Nav>
//     </>
//   )
// }

// export default  Test;

// export class Test extends Component {
//   render() {
//     return (
//       <>

//       </>
//     )
//   }
// }

// export default Test

// import InfiniteScroll from "react-infinite-scroll-component";

// const style = {
//   height: 30,
//   border: "1px solid green",
//   margin: 6,
//   padding: 8
// };

// export class Test extends Component {
//   state={
// 		category:null,
// 		videos:[],
// 		follow:[],
// 		likes:[],
// 		isloading:false,

//       items: Array.from({ length: 20 }),
//       hasMore: true

// 	}

//   componentDidMount() {

//     const vidoes='https://shop.hoolo.live/api/videos';
//     const likes = `https://shop.hoolo.live/api/getlikes/130`;

//     const getVideos = axios.get(vidoes);
//     const getLikes = axios.get(likes)

//     axios.all([getVideos,getLikes])
//    .then(axios.spread((... allData)=>{
//     this.setState({
//      videos:allData[0].data,
//      likes:allData[1].data.length==0? null: allData[1].data,
//      isloading:true,

//     })
//     console.log(allData[1].data)
//    }))
//   .catch(res=>{
//     console.log(`this is error from laravel ${res}`)
//   })
//  }

//  componentDidUpdate(){

//   const vidoes='https://shop.hoolo.live/api/videos';
//   const likes = `http://shop.hoolo.live/api/getlikes/130`;

//   const getVideos = axios.get(vidoes);
//   const getLikes = axios.get(likes)

//   axios.all([getVideos,getLikes])
//  .then(axios.spread((... allData)=>{
//   this.setState({
//    videos:allData[0].data,
//    likes:allData[1].data==null? allData[1].data.Message: allData[1].data,
//    isloading:true,

//   })
//  }))
// .catch(res=>{
//   console.log(`this is error from laravel ${res}`)
// })
//  }

//  fetchMoreData = () => {
//   if (this.state.items.length >= 100) {
//     this.setState({ hasMore: false });
//     return;
//   }
// a fake async api call like which sends
// 20 more records in .5 secs
//   setTimeout(() => {
//     this.setState({
//       items: this.state.items.concat(Array.from({ length: 10 }))
//     });
//   }, 500);
// };

//   render() {
//     console.log(this.state.likes)
//     return (
//           <>
//            <Container>

//              <div className='mb-5'>
//         <h1>demo: react-infinite-scroll-component</h1>
//         <hr />
//         <InfiniteScroll
//           dataLength={this.state.items.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.hasMore}
//           loader={<h4>Loading...</h4>}
//           endMessage={
//             <p style={{ textAlign: "center" }}>
//               <b>Yay! You have seen it all</b>
//             </p>
//           }
//         >
//           {this.state.items.map((i, index) => (
//             <div style={style} key={index}>
//               div - #{index}
//             </div>
//           ))}
//         </InfiniteScroll>
//       </div>
//            </Container>
//           </>
//     )
//   }
// }

// export default Test

// import GoogleLogin from "react-google-login";

// export class Test extends Component {
  
//   responseGoogle = (response) => {
//     console.log(response);
//   };

//   render() {
//     return (
//       <>
//         <GoogleLogin
//           clientId="442830494029-v2ipj51vf3b4241abt12rh21nhnc78ns.apps.googleusercontent.com"
//           buttonText="Login"
//           onSuccess={this.responseGoogle}
//           onFailure={this.responseGoogle}
//           cookiePolicy={"single_host_origin"}
//         />
//       </>
//     );
//   }
// }

// export default Test;

import React from 'react'
import {signInWithGoogle} from"./firebase";

function Test() {
  return (
    <div>
      <button className="btn btn-success" onClick={signInWithGoogle}><i className="fab fa-google"></i>Sign in with google</button>
    </div>
  )
}

export default Test
