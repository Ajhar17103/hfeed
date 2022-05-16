import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import "./Auth.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FourZeroFour from "../FourZeroFour/FourZeroFour";
import Login from "./Login";
import Signup from "./Signup";
import ForgetPassword from "./ForgetPassword";

import Verification from "./verification";

const Auth = () => {
  const history = useHistory();
  return (
    <>
      <Switch>
        <Route path="/auth/:link">
         
                <Switch>
                  
                  <Route path="/auth/login">
                    <Login history={history} />
                  </Route>

                  <Route path="/auth/register">
                    <Signup history={history} />
                  </Route>

                  <Route
                    path="/auth/forgot-password"
                    component={ForgetPassword}
                  />
                  <Route path="/auth/verification" component={Verification} />
                  <Redirect to="/auth/login" />
                </Switch>
              
             
        </Route>
        <Route path="*" component={FourZeroFour} />
      </Switch>
    </>
  );
};

export default Auth;
