import React from "react";
import "./stripe-button.styles.scss";
import StripeCheckout from "react-stripe-checkout"
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const PublishKey =
    "pk_test_51InJLfLL6214pXMBnZ18A2gn0aC1Rkkf4nOJVAiw0L7TN9JUoWfGAnCRNLC3tscrihV5501pwLJ46px0bHIdZplP00KXHi4Qjw";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Seccessfull");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CROWN CLOTHING"
      shippingAddress
      billingAddress
      image="https://svgsahre.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={PublishKey}
    />
  );
};
export default StripeCheckoutButton;
