import React from "react";
import { auth } from "../firebase/firebase.utils";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../assets/4.3 crown.svg.svg";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import {
  HeaderContainer,
  LogoContainer,
  OptionsDiv,
  OptionLink,
  // OptionDiv,
} from "./header.styles";
import Carticon from "../cart-icon/cart-icon.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { cartHidden } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsDiv>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>

      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <Carticon />
    </OptionsDiv>
    {hidden ? null : <CartDropDown />}
  </HeaderContainer>
);

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: cartHidden,
});

export default connect(mapStatetoProps)(Header);
