 import Row from "react-bootstrap/Row";
import "./shop.css";
import Paginate from "../Atomics/Paginate/Paginate";
import BasicShop from "./BasicShop";
import Col from "react-bootstrap/Col";
import SectionHeader from "../Atomics/SectionHeader/SectionHeader";

 
 
 



const HomeShop = () => {

  
  return (
    <>
      
          <div className="video-block section-padding">
            <Row>
            <Col md={12}>
                <SectionHeader heading="Shop" />
              </Col>

             <BasicShop />
            </Row>
          </div>
          <Paginate />
        
    </>
  );
};

export default HomeShop;
