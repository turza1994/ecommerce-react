import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Test from './pages/test.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} />
      <Route path="/shop" component={Shop} />
      <Route path="/:test" component={Test} />
    </div>
  );
}

export default App;
