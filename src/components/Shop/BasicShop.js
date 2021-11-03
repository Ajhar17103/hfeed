import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./shop.css";
import ThinFooter from "../Footer/ThinFooter";
import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import ShopCart from "./ShopCard";
import Paginate from "../Atomics/Paginate/Paginate";
import { useEffect,useState } from "react";
import api from '../../Api/Api'

 


const BasicShop = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  let fetchProducts = () => {
    api
      .get("products", {
        per_page: 20,
      })
      .then((response) => {
        if (response.status === 200) {
          setProducts(response.data);
        }
      })
      .catch((error) => {});
  };
  return (
    <>
         
       
               
 

              {products.map((product) => (
                <Col xl={3} sm={6} className="mb-3" key={product.id}>
                  <ShopCart product={product} />
                  
                </Col>
              ))}
            
       
           
      
    </>
  );
};

export default BasicShop ;
