import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { VerifiedTooltip } from "../Atomics/CustomCheckTooltips/CustomCheckTooltips";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VendorStore from "./VendorStore.css";
import { faSearch, faUserPlus } from "@fortawesome/free-solid-svg-icons";

export default function ChannelNav(props) {
  const { name, uuid, store_logo } = props.navContent;
  return (
    <>
      <div className="vendor-nav">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 0px",
          }}
        >
          <div className="vendor-brand d-flex">
            <div>
              <img
                className="vendor-profile-img"
                src={`https://shop.hoolo.live/images/store/${store_logo}`}
                alt={name}
              />
            </div>

            <div className="mt-2 ml-2">
              {name} <VerifiedTooltip />
            </div>
          </div>

          <div style={{ display: "flex" }}>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <Nav defaultActiveKey="/" as="ul">
              &nbsp;&nbsp;&nbsp;
              <Nav.Item as="li">
                <Nav.Link onClick={() => props.updateStore("video")}>
                  Video
                </Nav.Link>
              </Nav.Item>
              &nbsp;&nbsp;&nbsp;
              <Nav.Item as="li">
                <Nav.Link onClick={() => props.updateStore("store")}>
                  Products
                </Nav.Link>
              </Nav.Item>
              &nbsp;&nbsp;&nbsp;
              <Nav.Item as="li">
                <Nav.Link eventKey="link-2">Others</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          {/* < div style={{display:'flex', }}>
						&nbsp;&nbsp;&nbsp;
						<a href={`https://shop.hulusthul.live/store/${uuid}/${name}`} >
							<Button variant="outline-success" size="xs">
						 Visit Store 	 
							</Button>
							</a>
							&nbsp;&nbsp;&nbsp;
							<Button variant="outline-danger" size="sm">
							<FontAwesomeIcon icon={faUserPlus} />	Follow   
							</Button>
						</div> */}
        </div>
      </div>
    </>
  );
}
