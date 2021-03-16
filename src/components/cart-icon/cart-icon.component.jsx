import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart-action";
import { ReactComponent as ShoppingIcon } from "../assets/11.2 shopping-bag.svg.svg";
import "./cart-icon.styles.scss";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

const Carticon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapDispatchtoProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStatetoProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});
export default connect(mapStatetoProps, mapDispatchtoProps)(Carticon);
