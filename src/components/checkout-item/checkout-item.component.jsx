import React from "react";
import "./checkout-item.styles.scss";
import {
  ClearItemFromcart,
  removeitem,
  addItem,
} from "../../redux/cart/cart-action";
import { connect } from "react-redux";

const CheckoutItem = ({ cartItem, clearItem, removeitem, addItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeitem(cartItem)}>
          &#10096;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10097;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};
const mapDispatchtoProps = (dispatch) => ({
  clearItem: (item) => dispatch(ClearItemFromcart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeitem: (item) => dispatch(removeitem(item)),
});
export default connect(null, mapDispatchtoProps)(CheckoutItem);
