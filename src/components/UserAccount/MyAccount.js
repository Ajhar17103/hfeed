import React, { Component } from "react";
import "./MyAccount.css";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import ThinFooter from "../Footer/ThinFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faAngleRight,
  faVideo,
  faListAlt,
  faCloudUploadAlt,
} from "@fortawesome/free-solid-svg-icons";
import AccountHero from "./AccountHero";
import AccountNav from "./AccountNav";
import ChannelVideos from "./ChannelVideos";
import InfoCard from "../Atomics/InfoCard/InfoCard";
import Orders from "./Orders";
import CancelOrder from "./CancelOrder";
import ReturnProducts from "./ReturnProducts";
import EditProfile from "./EditProfile";
import axios from "axios";
import Login from "../Auth/Login";
import Follow from "./Follow";
import Likes from "./Likes";
import PreLoader from "../Atomics/Preloader/PreLoader";
import MyChat from "./MyChat";

export class MyAccount extends Component {
  state = {
    accountinfo: [],
    isloading: false,
    userLoginId: "1",
  };

  componentDidMount() {
    const id = localStorage.getItem("id");
    axios
      .get(`https://shop.hoolo.live/api/users/profile/${id}`)
      .then((res) => {
        this.setState({
          accountinfo: [res.data],
          userLoginId: id,
          isloading: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate() {
    localStorage.setItem(
      "following",
      this.state.accountinfo.map((e) => e.following.map((f) => f.store_id))
    );
  }

  render() {

    return (
      <>
        {this.state.isloading ? (
          <>
            {" "}
            {this.state.userLoginId ? (
              <>
                {this.state.accountinfo.map((userinfo) => (
                  <>
                    <ContentWrapper
                      className="single-channel-page"
                      key={userinfo.id}
                    >
                      <AccountHero userinfo={userinfo.user_info} />
                      <AccountNav userinfo={userinfo.user_info} />
                    </ContentWrapper>

                    <ContentWrapper>
                      <Container fluid className="pb-0">
                        <Row>
                          <EditProfile
                            userinfo={userinfo.user_info}
                            address={userinfo.user_address}
                            bank={userinfo.user_bank}
                          />
                          <MyChat />

                          <Orders
                            orders={userinfo.orders}
                            totalOrders={userinfo.total_orders}
                          />

                          <ReturnProducts
                            ReturnProducts={userinfo.returned_products}
                            totalReturn={userinfo.total_returned}
                          />

                          <CancelOrder
                            cancelOrder={userinfo.cancelled_orders}
                            totalCancel={userinfo.total_cancelled_orders}
                          />
                          <Follow
                            follow={userinfo.following}
                            totalFollow={userinfo.total_following}
                          />

                          <Likes />
                        </Row>

                        <hr />
                      </Container>
                      <ThinFooter />
                    </ContentWrapper>
                  </>
                ))}
              </>
            ) : (
              <>
                <Login />
              </>
            )}
          </>
        ) : (
          <>
            {" "}
            <PreLoader />{" "}
          </>
        )}
      </>
    );
  }
}

export default MyAccount;
