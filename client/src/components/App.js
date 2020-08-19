import React, {useState} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { SemipolarLoading } from 'react-loadingg';

import CreateOrder from './CreateOrder';
import OrderHistory from './OrderHistory';
import Navbar from './Navbar';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <div>
            <div id="loader" className={isLoading ? '' :'hidden'}>
              <SemipolarLoading color={'#ff8800'} size={'large'}/>
            </div>
            <Navbar setUser={setUser}/>  
            <Route exact path="/">
              <CreateOrder user={user} setIsLoading={setIsLoading}/>
            </Route>
            <Route exact path="/history">
              <OrderHistory user={user} setIsLoading={setIsLoading}/>
            </Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
