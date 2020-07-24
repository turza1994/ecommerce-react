import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth } from "./firebase/firebase.utils";

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Test from './pages/test.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import './App.css';


class App extends Component {

  constructor(){
    super();

    this.state={
      currentUser: null
    }

  }
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
      console.log(this.state.currentUser)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <div className="App">
          <Header currentUser = { this.state.currentUser } />
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInSignUp} />
          {/* <Route path="/:test" component={Test} /> */}
        </div>
      </div>
    )
  }
}

export default App

