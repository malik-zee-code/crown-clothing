import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-action";
import Homepage from "./pages/homepage/homepage.component";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SigninAndSignupPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import {
  auth,
  createUserProfileDocument,
} from "./components/firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import  Checkout  from "./pages/checkout/checkout.component";

class App extends React.Component {
  UnsubscribefromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.UnsubscribefromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
          // console.log(this.state);
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.UnsubscribefromAuth();
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={Checkout} />

            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SigninAndSignupPage />
                )
              }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
const mapstatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchtoProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapstatetoProps, mapDispatchtoProps)(App);
