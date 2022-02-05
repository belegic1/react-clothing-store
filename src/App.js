import React from 'react';

import { Routes, Route,  Navigate} from "react-router-dom"
import './App.css';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Home from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { connect } from "react-redux"
import {setCurrentUser} from "./redux/user/user.actions"

class App extends React.Component {


  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props
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
      else {
        setCurrentUser(userAuth)
      }
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
          <Route exact path="shop" element={<ShopPage />} />
          <Route exact path="signin" element={this.renderRightComponent()} />
        </Routes>
      </div>
    );
  }
}



const mapStateProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateProps,mapDispatchToProps)(App);
