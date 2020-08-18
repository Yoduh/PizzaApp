import React, {useState} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import CreateOrder from './CreateOrder';
import OrderHistory from './OrderHistory';
import Navbar from './Navbar';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <div>
      <BrowserRouter>
        <div>
            <Navbar setUser={setUser}/>  
            <Route exact path="/">
              <CreateOrder user={user} />
            </Route>
            <Route exact path="/history">
              <OrderHistory user={user} />
            </Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
