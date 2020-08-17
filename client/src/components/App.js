import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import CreateOrder from './CreateOrder';
import OrderHistory from './OrderHistory';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
        <div>
            <Route path="/" exact component={CreateOrder} />
            <Route path="/history" exact component={OrderHistory} />
        </div>
    </BrowserRouter>
  );
}

export default App;
