import { useEffect, useState,Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "video-react/dist/video-react.css";
import Navigation from "./components/Navigation/Navigation";
import Sidebar from "./components/Sidebar/Sidebar";
import Homepage from "./components/Homepage/Homepage";
import Channels from "./components/Channels/Channels";
import VideoPage from "./components/VideoPage/VideoPage";
import UploadVideo from "./components/UploadVideo/UploadVideo";
import History from "./components/History/History";
import Categories from "./components/Categories/Categories";
import Upload from "./components/Upload/Upload";
import Blog from "./components/Blog/Blog";
import BlogDetails from "./components/Blog/BlogDetails";
import Blank from "./components/Blank/Blank";
import FourZeroFour from "./components/FourZeroFour/FourZeroFour";
import Contact from "./components/Contact/Contact";
import Subscriptions from "./components/Subscriptions/Subscriptions";
import Auth from "./components/Auth/Auth";
import Settings from "./components/Settings/Settings";
import Shop from "./components/Shop/Shop";
import { CustomScrollToTop } from "./components/Atomics/ScrollToTop/ScrollToTop";
import ViewCart from "./components/Cart/ViewCart";
import Checkout from "./components/Cart/Checkout";
import ProductDetails from "./components/Shop/ProductDetails";
import TestAxios from "./Test";
import Test from "./Test";
import Live from "./components/Live/Live";
import VideoBlock from "./components/Homepage/VideoBlock";
import Video from "./components/Live/Video";
import VideoList from "./components/Homepage/Video";
import VendorStore from "./components/Stores/VendorStore";
import VendorAccountShop from "./components/Stores/VendorAccountShop";
import PreLoader from "./components/Atomics/Preloader/PreLoader";
import Terms from "./components/Atomics/Terms&condition/Term";
import CommentMedia from "./components/VideoPage/CommentMedia";
import CommentForm from "./components/Blog/CommentForm";
import LiveStream from "./components/Livestream/LiveStream";
import MyAccount from "./components/UserAccount/MyAccount";
import VideoCase from "./components/Video/VideoCase";
import Stream from "./components/Livestream/Stream";
import ShopTest from "./components/shopTest/Shop";
import Follow from "./components/UserAccount/Follow";
import Trending from "./components/Video/TrendingVideo";
import Discover from "./components/Video/Discover";
import FollowVideo from "./components/Video/FollowVideo";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Group from "./components/Group/Group";
import GroupDetails from "./components/Group/GroupDetails";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
  return (
    <>
      <div>
        <Router>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/">
              <Content showMenu={showMenu} setShowMenu={setShowMenu} />
            </Route>
            
            <Route path="*" component={FourZeroFour} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

function Content({ props, products }) {
  const history = useHistory();

  return (
    <>
      <div className="homepage-wrapper">
        <Navigation props={props} history={history} />
        <div id="wrapper">
          

          <Switch>
            <Route exact path="/">
              <Homepage history={history} />
            </Route>
           
            <Route exact path="/video">
              <VideoList />
            </Route>

            <Route exact path="/my-account">
              <MyAccount />
            </Route>
            <Route exact path="/video-page">
              <VideoPage />
            </Route>
            <Route exact path="/upload-video">
              <UploadVideo />
            </Route>
            <Route exact path="/history">
              <History />
            </Route>
            <Route exact path="/categories">
              <Categories />
            </Route>
            <Route exact path="/upload">
              <Upload />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/blog-details">
              <BlogDetails />
            </Route>
            <Route exact path="/blank">
              <Blank />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/store">
              <Subscriptions />
            </Route>
            <Route exact path="/settings">
              <Settings />
            </Route>
            <Route path="/vendors/:uuid">
              <VendorStore />
            </Route>

            <Route exact path="/products">
              <Shop />
            </Route>
            <Route exact path="/video-block">
              <VideoBlock />
            </Route>
            <Route exact path="/video-show/:video">
              <VideoPage />
            </Route>
            <Route exact path="/view-cart" history={history}>
              <ViewCart />
            </Route>
            <Route exact path="/product-details/:id/:name">
              <ProductDetails />
            </Route>

            <Route exact path="/checkout">
              <Checkout />
            </Route>
            <Route exact path="/preloader">
              <PreLoader />
            </Route>

            <Route exact path="/videos">
              <VideoCase />
            </Route>

            <Route exact path="/test">
              <Test />
            </Route>
            <Route exact path="/live">
              <Live />
            </Route>

            <Route exact path="/stream">
              <LiveStream />
            </Route>

            <Route exact path="/privacy-policy">
              <Terms />
            </Route>

            <Route exact path="/livestream">
               <Stream/>
            </Route>
            
            <Route exact path="/shop">
              <ShopTest/>
            </Route>
            <Route exact path="/follow">
              <FollowVideo/>
            </Route>
            <Route exact path="/trending">
              <Trending/>
            </Route>
            <Route exact path="/discover">
               <Discover/>
            </Route>

            <Route exact path="/group">
            <Group/>
            </Route>
            <Route exact path="/group-details/:id/:name">
            <GroupDetails/>
            </Route>


            <Route path="*" component={FourZeroFour} />
          </Switch>
        </div>
        <ScrollToTop
          smooth
          component={<CustomScrollToTop />}
          className="scroll-to-top outline-0"
          color="white"
        />
      </div>
    </>
  );
}

export default App;




export class Apps extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}

