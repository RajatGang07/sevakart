import React from 'react';
import CustomButton from '../custom-button';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishKey = "pk_test_VSoCKHTCBs142CRNn5Hbuo5300ZqiIkk9c";

   const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return (
       <StripeCheckout 
        label="Pay Now"
        name = "Sevakart"
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is ${price} `}
        amount= {priceForStripe}
        panelLabel= 'Pay Now'
        token = {onToken}
        stripeKey = {publishKey}
       />


    )
}


export default StripeCheckoutButton;
