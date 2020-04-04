import React, {useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../pages/homePage/index';
import ShopPage from '../pages/shop-page/index';
import Header from "./header/index"
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from '../pages/checkout-page';
import SignInAndSignUpPage from "../pages/sign-in and sign-up/index";
import { selectCurrentUser } from '../redux/user/userSelector';
import { checkUserSession } from '../redux/user/userActions';

const App = ({checkUserSession, currentUser}) => {

  useEffect (() => {
    checkUserSession();
  }, [checkUserSession])
 
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);