import React from 'react';
import {connect} from 'react-redux';
import cart from "../../assets/images/cart.svg";
import {toggleCartHidden} from "../../redux/cart/cartAction";
import { selectCartItemsCount } from '../../redux/cart/selector';
import "./index.scss";
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCartHidden,itemCount }) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>

            <img src={cart} className="shopping-icon" />
            <span className="item-count">{itemCount}</span>


        </div>

    )
}


const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})



export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
