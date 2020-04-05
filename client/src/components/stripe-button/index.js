import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishKey = "pk_test_VSoCKHTCBs142CRNn5Hbuo5300ZqiIkk9c";

    const onToken = token => {
        console.log(token);
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token

            }
        }).then(response => {
            NotificationManager.success('Payment was successful', 'Payment')
        }).catch(error => {
            console.log("Payment alert");
            NotificationManager.error('Payment Error')
        })
    }
    return (
        <div>
            <StripeCheckout
                label="Pay Now"
                name="Sevakart"
                billingAddress
                shippingAddress
                image='https://svgshare.com/i/CUz.svg'
                description={`Your total is ${price} `}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishKey}
            />
            <NotificationContainer />

        </div>



    )
}


export default StripeCheckoutButton;
