import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Test from './pages/test.component';
import './App.css';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={Shop} />
      <Route path="/signin" component={SignInSignUp} />
      {/* <Route path="/:test" component={Test} /> */}
    </div>
  );
}

export default App;
