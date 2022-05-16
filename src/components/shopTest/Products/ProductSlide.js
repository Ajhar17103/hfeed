import {Link} from "react-router-dom";
import './ProductSlide.css'

function ProductSlide(props) {
  return (
    <>
     <div className="product-slide-item">
          <Link to={`product-details/${props.id}/${props.product_name}`}>
            <img
              
              className=""
              src={`https://shop.hoolo.live/images/simple_products/${props.img}`}
             
            />

            {/*<h5 dangerouslySetInnerHTML={{ __html: JSON.parse(product_detail).en }} /> */}

            <h5 className="mt-2">{props.product_name}  </h5>
            <h6>
            {props.offer_price == null ? (
                <span>{`৳ ${props.price}`} </span>
              ) : (
                <span>
                  {" "}
                  <strong> {`৳ ${props.offer_price} `} </strong>{" "}
                  <strong style={{ textDecoration: "line-through" }}>
                    {" "}
                    {`৳ ${props.price}`}
                  </strong>{" "}
                </span>
              )}
            </h6>

            {/* <button className="btn btn-sm" style={{backgroundColor:'#262626',color:'white', borderRadius:'10px'}}>Shop Now</button> */}
          </Link>
        </div>
    </>
  )
}

export default ProductSlide;
