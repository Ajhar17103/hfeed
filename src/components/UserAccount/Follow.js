import React from "react";
import { Accordion, Card, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faWalking } from "@fortawesome/free-solid-svg-icons";
import NullTable from "./NullTable";
import Time from "react-time-format";
import { Link } from "react-router-dom";

function Follow(props) {
  const classes = `card text-white bg-warning o-hidden h-100 border-none`;
  //   const follows =props.follow.map(e=>e.store_id)
  //   console.log(follows)
  //   localStorage.setItem('f',follows)
  return (
    <>
      <div className="col-xl-4 col-sm-6 mb-4">
        <div className="card  bg o-hidden ">
          {/* <div className="card-body">
						<div className="card-body-icon">
							<FontAwesomeIcon icon={faWalking} fixedWidth />
						</div>
						<div className="mr-5">
                        <b>Following</b>    
						</div>
					</div> */}
          <Accordion>
            <Accordion.Toggle as={Card.Footer} variant="link" eventKey="0">
              <a className="text-dark clearfix small z-1">
                <strong>
                  <span className="float-left">
                    Following{" "}
                    {props.totalFollow == 0
                      ? "No Following"
                      : `( ${props.totalFollow})`}
                  </span>
                  <span className="float-right">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                </strong>
              </a>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
              <FollowTable
                follow={props.follow}
                totalFollow={props.totalFollow}
              />
            </Accordion.Collapse>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Follow;

function FollowTable(props) {
  return (
    <>
      <>
        {props.totalFollow == 0 ? (
          <NullTable name="Follow" action="Following" />
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
                  <th className="text-right">#</th>
                  <th className="text-center">Icon</th>
                  <th>Store</th>
                  <th>Since</th>
                  <th>Visit</th>
                </tr>
              </thead>

              <tbody>
                {props.follow.map((follow, index) => (
                  <tr key={follow.id}>
                    <td className="text-right">{index + 1}</td>
                    <td className="text-center">
                      <img
                        className="vendor-profile-img"
                        src={`https://shop.hoolo.live/images/store/${follow.store_logo}`}
                        alt={follow.store_name}
                      />
                    </td>
                    <td>{follow.store_name}</td>
                    <td>
                      <Time value={follow.created_at} format="DD-MM-YYYY" />{" "}
                    </td>
                    <td>
                      {" "}
                      <Link
                        to={`/vendors/${follow.store_uuid}`}
                        className="visitLink"
                      >
                        {" "}
                        visit{" "}
                      </Link>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        )}
      </>
    </>
  );
}
