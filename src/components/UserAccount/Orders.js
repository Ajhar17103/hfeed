import React, { Component } from "react";
import { Accordion, Card, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";
import NullTable from "./NullTable";

const MyOrder = (props) => {
  return (
    <>
      <div className="col-xl-4 col-sm-6 mb-4">
        <div className="card   o-hidden ">
          {/* <div className="card-body">
  
	<div className="card-body-icon">
		<FontAwesomeIcon icon={faShoppingCart} fixedWidth />
	</div>
	<div className=" d-flex justify-content-between">
		<b>Orders</b> 
		<strong style={{fontWeight:'900'}}> {props.totalOrders ==0 ? 'No Orders': props.totalOrders}</strong> 
	</div>
  </div> */}

          <Accordion>
            <Accordion.Toggle as={Card.Footer} variant="link" eventKey="0">
              <a className="text-dark clearfix small z-1">
                <strong>
                  <span className="float-left">
                    Orders{" "}
                    {props.totalOrders == 0
                      ? "No Orders"
                      : `(${props.totalOrders})`}{" "}
                  </span>
                  <span className="float-right">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                </strong>
              </a>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
              <OrderTable
                orders={props.orders}
                totalOrders={props.totalOrders}
              />
            </Accordion.Collapse>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default MyOrder;

function OrderTable(props) {
  return (
    <>
      {props.totalOrders == 0 ? (
        <NullTable name="Orders" action="Shop" />
      ) : (
        <>
          {" "}
          <Table
            striped
            bordered
            hover
            className="bg-light"
            size="sm"
            responsive
          >
            <thead>
              <tr>
                <th>#</th>
                <th>Order ID</th>
                <th>Transaction ID</th>
                <th>Qunatity</th>
                <th>Amount(BDT)</th>
                <th>Order Details</th>
              </tr>
            </thead>

            <tbody>
              {props.orders.map((order, index) => (
                <tr key={order.id}>
                  <td>{index + 1}</td>
                  <td>{order.order_id}</td>
                  <td>{order.transaction_id}</td>
                  <td>{order.qty_total}</td>
                  <td>{order.order_total}</td>
                  <td>
                    {" "}
                    <a
                      href={`https://shop.hoolo.live/view/order/${order.order_id}`}
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
}
