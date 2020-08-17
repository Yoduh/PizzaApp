import React, {useState, useEffect} from 'react';
import ToppingsList from './ToppingsList';
import SizesList from './SizesList';

const CreateOrder = () => {
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

    const setNewPizza = (val) => {console.log(val)}

    return (        
    <div className="App">
        <h1>Create Your Pizza Order</h1>
        <div className="container">
            <div className="row">
                <div className="col-sm-3 pizza-selection">
                    <h3>Select Pizza Size</h3>
                    <SizesList sizes={sizes} setNewPizza={setNewPizza}/>
                </div>
                <div className="col-sm-9 toppings-selection">
                    <h3>Select Toppings</h3>
                    <div className="row">
                        <div className="col-sm-6 meatToppings">
                            <h4>Meat Toppings</h4>
                            <ToppingsList toppings={toppings} isMeat={true} />
                        </div>
                        <div className="col-sm-6 nonMeatToppings">
                            <h4>Non-meat Toppings</h4>
                            <ToppingsList toppings={toppings} isMeat={false} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default CreateOrder;