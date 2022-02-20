import React from 'react';

import { Routes, Route} from "react-router-dom"
import './App.css';
import Header from './components/header/header.component';
import { addCollectionAndDocuments, auth, createUserProfileDocument } from './firebase/firebase.utils';
import Home from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { connect } from "react-redux"
import {setCurrentUser} from "./redux/user/user.actions"
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import Checkout from './pages/checkout/checkout.component';
import { selectCollectionsForPreview } from "./redux/shop/shop.selector"

class App extends React.Component {


  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser, collectionsArray} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })

        })
      }
      setCurrentUser(userAuth)
      // addCollectionAndDocuments("items",collectionsArray.map(({title,items}) => ({title,items})))
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  renderRightComponent = ()=> {
    if (this.props.currentUser) {
      return <Home />
    }
    else {
      return <SignInAndSignUpPage />
    }
  }

  render() {
    return (
      <div>
        <Header  />
        <Routes>
          <Route exact path="/" element={<Home  />} />
          <Route  path="shop/*" element={<ShopPage />} />
          <Route exact path="signin" element={this.renderRightComponent()} />
          <Route exact path="checkout" element={<Checkout />} />
        </Routes>
      </div>
    );
  }
}



const mapStateProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview

})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})


export default connect(mapStateProps,mapDispatchToProps)(App);
