import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button';
import CartItem from '../cart-item';
import { selectCartItems } from '../../redux/cart/selector';
import { toggleCartHidden } from '../../redux/cart/cartAction';
import "./index.scss";

const CartDropDown = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown' key={Math.ceil(new Date().getTime() * Math.random())}>
            <div className="cart-items">
                {
                    cartItems.length ?
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                        :
                        <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }} > Go To Checkout </CustomButton>
        </div>

    )
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
})


export default withRouter(connect(mapStateToProps)(CartDropDown));
