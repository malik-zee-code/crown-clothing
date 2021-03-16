import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { cartItemTotal } from "../../redux/cart/cart.selector";
import CheckoutItem from '../../components/checkout-item/checkout-item.component.jsx'

const Checkout = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Discription</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => 
    (<CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <span className="total">Total: ${total}</span>
  </div>
);
const mapStatetoProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: cartItemTotal,
});
export default connect(mapStatetoProps)(Checkout);
