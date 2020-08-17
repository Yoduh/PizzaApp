import React, {useState, useEffect} from 'react';
import './App.css';

const App = () => {
  // initialize state
  // toppings initializes to empty array
  const [toppings, setToppings] = useState([]);
  // sizes initializes to empty array
  const [sizes, setSizes] = useState([]);

  const fetchToppings = async () => {
    const results = await fetch('/toppings');
    let data = await results.text();
    setToppings(JSON.parse(data));
  }
  const fetchSizes = async () => {
    const results = await fetch('/sizes');
    let data = await results.text();
    setSizes(JSON.parse(data));
  }

  // on initial load, fetch all toppings and sizes and set them as state
  useEffect(() => {
    fetchToppings();
    fetchSizes();
  }, [])

  // render each topping as a separate div
  const renderToppings = () => {
    return toppings.length > 0 ? (
      toppings.map(topping => {
        return <div key={topping.topping}>{topping.topping}</div>
      })
    ): null;
  }
  // render each size as a separate div
  const renderSizes = () => {
    return sizes.length > 0 ? (
      sizes.map(size => {
        return <div key={size.size}>{size.size}</div>
      })
    ): null;
  }

  return (
    <div className="App">
      <h1>Toppings</h1>
      {renderToppings()}    
      <h1>Sizes</h1>
      {renderSizes()}
    </div>
  );
}

export default App;
