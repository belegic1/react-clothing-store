import React from 'react';
import StripeCheckout from "react-stripe-checkout"
const StripeButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishibleKey = "pk_test_XagnoskYeodomBT2eKUSMMLI002UDzgTTv"
    const onToken = token => {
        console.log(token);
        alert("Payment sucessful")
    }
    return <StripeCheckout
        label="Pay Now"
        name="React Clothing D.O.O"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishibleKey}

    />
};

export default StripeButton;
