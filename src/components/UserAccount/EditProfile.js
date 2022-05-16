import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faListAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Accordion, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./MyAccount.css";
import Time from "react-time-format";

function EditProfile(props) {
  const classes = ``;

  return (
    <>
      <div className="col-xl-4 col-sm-6 mb-4">
        <div className="card  bg o-hidden ">
          {/* <div className="card-body">
						<div className="card-body-icon">
							<FontAwesomeIcon icon={faUser} fixedWidth />
						</div>
						<div className="mr-5">
                        <b>My Profile</b>    
						</div>
					</div> */}
          <Accordion>
            <Accordion.Toggle as={Card.Footer} variant="link" eventKey="0">
              <a className="text-dark clearfix small z-1">
                <strong>
                  <span className="float-left">My Profile</span>
                  <span className="float-right">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                </strong>
              </a>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
              <UserTable
                userinfo={props.userinfo}
                address={props.address}
                bank={props.bank}
              />
            </Accordion.Collapse>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default EditProfile;

const UserTable = (props) => {
  return (
    <>
      {props.userinfo.map((user) => (
        <Card style={{ width: "100%" }} bg="info" key={user.id}>
          <Card.Img
            variant="top"
            alt="hulusthul"
            src={`https://shop.hoolo.live/images/user/${user.image}`}
          />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>
              <strong> Member Since: </strong>{" "}
              <Time value={user.created_at} format="DD-MM-YYYY" />
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush textSize">
            {props.address.map(
              ({ address, city_name, state_name, country_name }) => (
                <ListGroupItem>
                  <strong className="text-info">Address: </strong>{" "}
                  {`${address}, ${state_name},${city_name}, ${country_name} `}
                </ListGroupItem>
              )
            )}
            {/* { props.bank.map(({bankname,ifsc,acname,country_name})=>(
		<ListGroupItem>
		<strong className='text-info'>Bank Info: </strong> {`${bankname}, ${acname},${ifsc}, ${country_name} `} 
		</ListGroupItem>
	))} */}
            <ListGroupItem>
              <strong className="text-info">Email: </strong> {user.email}{" "}
            </ListGroupItem>
            <ListGroupItem>
              <strong className="text-info">Mobile: </strong>{" "}
              {`+880${user.mobile}`}{" "}
            </ListGroupItem>
            <ListGroupItem>
              <strong className="text-info">User Role: </strong>{" "}
              {user.role_id == `u` ? "User" : "Vendor"}{" "}
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link
              href="https://shop.hulusthul.live/profile"
              className="btn btn-light btn-sm float-right"
            >
              Edit Profile
            </Card.Link>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};
