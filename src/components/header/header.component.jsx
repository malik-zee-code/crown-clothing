import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.utils";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../assets/4.3 crown.svg.svg";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import "./header.styles.scss";
import Carticon from "../cart-icon/cart-icon.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { cartHidden } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <Carticon />
    </div>
    {hidden ? null : <CartDropDown />}
  </div>
);

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: cartHidden,
});

export default connect(mapStatetoProps)(Header);
