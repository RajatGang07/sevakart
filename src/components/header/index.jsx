import React from "react";
import { connect } from 'react-redux';
import {
  Link
} from "react-router-dom";
import logo from '../../assets/images/crown.svg';
import { auth } from "../../firebase/utils";

import "./index.scss";
import CartIcon from "../cart-icon";
import CartDropDown from "../cart-dropdown";
import { selectCartHidden } from "../../redux/cart/selector";
import { selectCurrentUser } from "../../redux/user/selector";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser,hidden }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <img src={logo} className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
          </Link>
        <Link className='option' to='/shop'>
          CONTACT
          </Link>
        {
          currentUser ? <div className='option' onClick={() => auth.signOut()}> Sign Out</div> : <Link className="option" to='signIn'>SignIn</Link>
        }

        <CartIcon />
      </div>
      {
        hidden ? null :<CartDropDown /> 
      }
      
    </div>

  )
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header);
