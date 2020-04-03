import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../pages/homePage/index';
import ShopPage from '../pages/shop-page/index';
import Header from "./header/index"
import SignInAnsSignUp from '../pages/sign-in and sign-up/index';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from "../firebase/utils";
import {connect} from 'react-redux';
import { setCurrentUser } from '../redux/user/userActions';
import { selectCurrentUser } from '../redux/user/selector';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from '../pages/checkout-page';
import { selectCollectionsForPreview } from '../redux/shop/selector';


class App extends React.Component {
  

  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser,collectionsArray } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);

      //data to add firebase
      // addCollectionAndDocuments('collections',collectionsArray.map(({title,items}) => ({
      //   title,items
      // })));
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header  />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path='/signIn' render= {() => this.props.currentUser ? (<Redirect to='/' />) : <SignInAnsSignUp />}/>

        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps )(App);