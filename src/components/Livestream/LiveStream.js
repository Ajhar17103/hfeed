import { useState,useEffect } from "react";
import { Button, Row,Col,Card} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import './LiveStream.css'
import swal from 'sweetalert'


const LiveStream = () => {
  const [timerDay,SetTimerDays] = useState();
  const [timerHours,setTimerHours] = useState();
  const [timerMinutes,setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer=()=>{
    const countdownDate= new Date("April 28, 2022").getTime();
    interval=setInterval(()=>{
        const now = new Date().getTime();
        const distance = countdownDate - now
        const days = Math.floor( distance / (24 * 60 * 60 * 1000 ));

        const hours =  Math.floor( (distance % ( 24 * 60 * 60 * 1000 )) / ( 1000 * 60 * 60 ));

        const minutes = Math.floor( (distance % ( 60 * 60 * 1000 )) / ( 1000 * 60  ));

        const seconds = Math.floor( ( distance % ( 60 * 1000) / 1000));

        if(distance<0){
           clearInterval(interval.current) 
        }else{
           SetTimerDays(days);
           setTimerHours(hours);
           setTimerMinutes(minutes);
           setTimerSeconds(seconds)
        }
   });
}

useEffect(()=>{
startTimer();
})

let alertFunc=()=>{
  swal('Welcome To Hulusthul', 'We Are Launching Soon...', 'success');
}
  return (
    <>
      <ContentWrapper>
   
            
        <Container fluid>
        
     
        
 
           <Row>
             
           <Col xl={3} sm={6} xs={12} className="mb-2"  >
           <div className="video-card">
			 
       <div className="video-card-image" onClick={alertFunc}>
         <Link className="play-icon" to="#">
           <FontAwesomeIcon icon={faPlayCircle} />
         </Link>
         
         <Link to="#" >
           <img style={{height:'350px'}} className="img-fluid" src="img/live-banner-4.jpeg" alt="title" />
         </Link>
        
       </div>
       <div className="video-card-body">

         <div className="video-title">
           <Link to="#"  >Stylish Ladies bag</Link>
         </div>
 

       {/*	<div
           
         > 
         <a style={{color:'#28a745', fontWeight:'700'}}  href={shopUrl}>	{  shop}  </a>
               
         </div>
         <div className="video-view">
           {views} views &nbsp;
           <FontAwesomeIcon icon={faCalendarAlt} /> {timeAgo} ago
       </div> */}
         <div>
                 
         </div>
         <hr/>
         <div style={{marginLeft:'40px'}}>
          <Row>
                       
                    <div style={{ alignItems:'center'}}>
                    <button style={{background:'black', color:'white', width:'80px'}} className='btn   btn-sm mr-2'   > {10<=timerDay ? timerDay:`0 ${timerDay}`}  <br/> Days</button>
                    
                   
                               
                    <button style={{background:'black', color:'white', }} className='btn btn-dark btn-sm mr-2'>{10<=timerHours ? timerHours:`0 ${timerHours}`} <br/> Hours</button>
                    
                          
                          <button style={{background:'black', color:'white', }} className='btn btn-dark btn-sm mr-2'>{10<=timerMinutes ? timerMinutes:`0 ${timerMinutes}`} <br/> Minutes</button>
                           
        
                          <button style={{background:'black', color:'white', }} className='btn btn-dark btn-sm '>{10<=timerSeconds ? timerSeconds :`0 ${timerSeconds}` } <br/> Seconds</button>
                    </div> 
                    
         </Row>  
         </div>
       </div>
     </div>
           </Col>
           <Col xl={3} sm={6} xs={12} className="mb-2"  >
           <div className="video-card">
			 
       <div className="video-card-image" onClick={alertFunc}>
         <Link className="play-icon" to="#">
           <FontAwesomeIcon icon={faPlayCircle} />
         </Link>
         
         <Link to="#" >
           <img style={{height:'350px'}} className="img-fluid" src="img/live-banner-4.jpeg" alt="title" />
         </Link>
        
       </div>
       <div className="video-card-body">

         <div className="video-title">
           <Link to="#"  >Stylish Ladies bag</Link>
         </div>
 

       {/*	<div
           
         > 
         <a style={{color:'#28a745', fontWeight:'700'}}  href={shopUrl}>	{  shop}  </a>
               
         </div>
         <div className="video-view">
           {views} views &nbsp;
           <FontAwesomeIcon icon={faCalendarAlt} /> {timeAgo} ago
       </div> */}
         <div>
                 
         </div>
         <hr/>
         <div style={{marginLeft:'40px'}}>
          <Row>
                       
                    <div style={{ alignItems:'center'}}>
                    <button style={{background:'black', color:'white', width:'80px'}} className='btn   btn-sm mr-2'   > {10<=timerDay ? timerDay:`0 ${timerDay}`}  <br/> Days</button>
                    
                   
                               
                    <button style={{background:'black', color:'white', }} className='btn btn-dark btn-sm mr-2'>{10<=timerHours ? timerHours:`0 ${timerHours}`} <br/> Hours</button>
                    
                          
                          <button style={{background:'black', color:'white', }} className='btn btn-dark btn-sm mr-2'>{10<=timerMinutes ? timerMinutes:`0 ${timerMinutes}`} <br/> Minutes</button>
                           
        
                          <button style={{background:'black', color:'white', }} className='btn btn-dark btn-sm '>{10<=timerSeconds ? timerSeconds :`0 ${timerSeconds}` } <br/> Seconds</button>
                    </div> 
                    
         </Row>  
         </div>
       </div>
     </div>
           </Col>
           <Col xl={3} sm={6} xs={12} className="mb-2"  >
           <div className="video-card">
			 
       <div className="video-card-image" onClick={alertFunc}>
         <Link className="play-icon" to="#">
           <FontAwesomeIcon icon={faPlayCircle} />
         </Link>
         
         <Link to="#" >
           <img style={{height:'350px'}} className="img-fluid" src="img/live-banner-4.jpeg" alt="title" />
         </Link>
        
       </div>
       <div className="video-card-body">

         <div className="video-title">
           <Link to="#"  >Stylish Ladies bag</Link>
         </div>
 

       {/*	<div
           
         > 
         <a style={{color:'#28a745', fontWeight:'700'}}  href={shopUrl}>	{  shop}  </a>
               
         </div>
         <div className="video-view">
           {views} views &nbsp;
           <FontAwesomeIcon icon={faCalendarAlt} /> {timeAgo} ago
       </div> */}
         <div>
                 
         </div>
         <hr/>
         <div style={{marginLeft:'40px'}}>
          <Row>
                       
                    <div style={{ alignItems:'center'}}>
                    <button style={{background:'black', color:'white', width:'80px'}} className='btn   btn-sm mr-2'   > {10<=timerDay ? timerDay:`0 ${timerDay}`}  <br/> Days</button>
                    
                   
                               
                    <button style={{background:'black', color:'white', }} className='btn btn-dark btn-sm mr-2'>{10<=timerHours ? timerHours:`0 ${timerHours}`} <br/> Hours</button>
                    
                          
                          <button style={{background:'black', color:'white', }} className='btn btn-dark btn-sm mr-2'>{10<=timerMinutes ? timerMinutes:`0 ${timerMinutes}`} <br/> Minutes</button>
                           
        
                          <button style={{background:'black', color:'white', }} className='btn btn-dark btn-sm '>{10<=timerSeconds ? timerSeconds :`0 ${timerSeconds}` } <br/> Seconds</button>
                    </div> 
                    
         </Row>  
         </div>
       </div>
     </div>
           </Col>
           <Col xl={3} sm={6} xs={12} className="mb-2"  >
           <div className="video-card">
			 
       <div className="video-card-image" onClick={alertFunc}>
         <Link className="play-icon" to="#">
           <FontAwesomeIcon icon={faPlayCircle} />
         </Link>
         
         <Link to="#" >
           <img style={{height:'350px'}} className="img-fluid" src="img/live-banner-4.jpeg" alt="title" />
         </Link>
        
       </div>
       <div className="video-card-body">

         <div className="video-title">
           <Link to="#"  >Stylish Ladies bag</Link>
         </div>
 

       {/*	<div
           
         > 
         <a style={{color:'#28a745', fontWeight:'700'}}  href={shopUrl}>	{  shop}  </a>
               
         </div>
         <div className="video-view">
           {views} views &nbsp;
           <FontAwesomeIcon icon={faCalendarAlt} /> {timeAgo} ago
       </div> */}
         <div>
                 
         </div>
         <hr/>
         <div style={{marginLeft:'40px'}}>
          <Row>
                       
                    <div style={{ alignItems:'center'}}>
                    <button style={{background:'black', color:'white', width:'80px'}} className='btn   btn-sm mr-2'   > {10<=timerDay ? timerDay:`0 ${timerDay}`}  <br/> Days</button>
                    
                   
                               
                    <button style={{background:'black', color:'white', }} className='btn btn-dark btn-sm mr-2'>{10<=timerHours ? timerHours:`0 ${timerHours}`} <br/> Hours</button>
                    
                          
                          <button style={{background:'black', color:'white', }} className='btn btn-dark btn-sm mr-2'>{10<=timerMinutes ? timerMinutes:`0 ${timerMinutes}`} <br/> Minutes</button>
                           
        
                          <button style={{background:'black', color:'white', }} className='btn btn-dark btn-sm '>{10<=timerSeconds ? timerSeconds :`0 ${timerSeconds}` } <br/> Seconds</button>
                    </div> 
                    
         </Row>  
         </div>
       </div>
     </div>
           </Col>
           

           </Row>

          
        </Container>
      </ContentWrapper>
    </>
  );
};

export default LiveStream;
