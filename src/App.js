import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage.component';
import Test from './pages/test.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} />
      <Route path="/:test" component={Test} />
    </div>
  );
}

export default App;
