import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faShoppingBag,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { Accordion, Card, Table, Button } from "react-bootstrap";
import NullTable from "./NullTable";

function MyReturnProducts(props) {
  const classes = `card text-white bg-dark o-hidden h-100 border-none`;

  return (
    <>
      <div className="col-xl-4 col-sm-6 mb-4">
        <div className="card o-hidden border-none">
          {/* <div className="card-body">

		<div className="card-body-icon">
			<FontAwesomeIcon icon={faShoppingBag} fixedWidth />
		</div>
		<div className=" d-flex justify-content-between">
			<b>Return Products</b> 
			<strong style={{fontWeight:'900'}}> {props.totalReturn ==0 ? 'No Orders': props.totalReturn}</strong> 
		</div>
	</div> */}

          <Accordion>
            <Accordion.Toggle as={Card.Footer} variant="link" eventKey="0">
              <a className="text-dark clearfix small z-1">
                <strong>
                  <span className="float-left">
                    Return Products{" "}
                    {props.totalReturn == 0
                      ? "No Orders"
                      : `(${props.totalReturn})`}{" "}
                  </span>
                  <span className="float-right">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                </strong>
              </a>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
              <ReturnTable
                ReturnProducts={props.ReturnProducts}
                totalReturn={props.totalReturn}
              />
            </Accordion.Collapse>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default MyReturnProducts;

const ReturnTable = (props) => {
  return (
    <>
      {props.totalReturn == 0 ? (
        <NullTable name="Retun Product" action="Order" />
      ) : (
        <Table striped bordered hover className="bg-light" size="sm" responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Order ID</th>
              <th>Return Payment Mode</th>
              <th>Qunatity</th>
              <th>Amount</th>
              <th>Reason</th>
              <th>Invoice</th>
              <th>Return Details</th>
            </tr>
          </thead>

          <tbody>
            {props.ReturnProducts.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.user_order_id}</td>
                <td>{product.pay_mode}</td>
                <td>{product.qty}</td>
                <td>{product.amount}</td>
                <td>{product.reason}</td>
                <td>
                  <a
                    href={`https://shop.hoolo.live/getmyinvoice/${product.order_id}`}
                  >
                    View
                  </a>
                </td>
                <td>
                  <a
                    href={`https://shop.hoolo.live/view/order/${product.order_id}`}
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};
