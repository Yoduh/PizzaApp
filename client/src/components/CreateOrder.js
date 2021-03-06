import React, {useState, useEffect} from 'react';
import ToppingsList from './ToppingsList';
import SizesList from './SizesList';
import OrderSummary from './OrderSummary';
import QuantityWidget from './QuantityWidget';
import pizzaSize from '../images/pizza-size.png';

const CreateOrder = ({user, setIsLoading}) => {
    /********  initialize state *********/
    const [toppings, setToppings] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [pizza, setPizza] = useState({})
    const [order, setOrder] = useState([]);
    const [error, setError] = useState('');
    const [quantity, setQuantity] = useState(1);

    // get available toppings from backend
    const fetchToppings = async () => {
        const results = await fetch('/toppings');
        let data = await results.text();
        setToppings(JSON.parse(data));
    }

    // get available sizes from backend
    const fetchSizes = async () => {
        const results = await fetch('/sizes');
        let data = await results.text();
        setSizes(JSON.parse(data));
    }

    // on initial load, fetch all toppings and sizes and set them as state
    useEffect(() => {
        setIsLoading(true);
        fetchToppings();
        fetchSizes();
    }, [setIsLoading])
    
    useEffect(() => {
        if (sizes && toppings && sizes.length > 0 && toppings.length > 0)
            setIsLoading(false);
    }, [sizes, toppings, setIsLoading])

    // calculates price of pizza on any change to size or toppings
    const calculatePrice = (updatedToppings, updatedSize) => {
        let total = 0;
        if (updatedToppings) {
            updatedToppings.forEach(topping => {
                total += Number(toppings.find(t => t.name === topping).price);
            })
        }
        if (updatedSize) {
            total += Number(sizes.find(s => s.name === updatedSize).price);
        }
        return total;
    }

    // pizza.size to change when user selects pizza size radio button
    const changeSize = (updatedSize) => {
        const total = calculatePrice(pizza.toppings, updatedSize)
        setPizza({...pizza, size: updatedSize, price: total})
    }

    //pizza.toppings to change when user checks topping checkboxes on/off
    const changeToppings = (topping, isChecked) => {
        let updatedToppings = [];
        // topping checked on
        if (isChecked) {
            if (pizza.toppings)
                updatedToppings = [...pizza.toppings, topping];
            else
                updatedToppings = [topping];
        // topping checked off
        } else if(pizza.toppings) {
            updatedToppings = pizza.toppings.filter(ele => ele !== topping)
        }
        const total = calculatePrice(updatedToppings, pizza.size);
        setPizza({...pizza, toppings: [...updatedToppings], price: total});
    }

    const addPizzaToOrder = () => {
        if (!pizza.toppings || pizza.toppings.length === 0) {
            setError('Please add at least 1 topping');
            return;
        }
        else if (!pizza.size) { // should no longer hit with default size set
            setError('Please select a size');
            return;
        }
        setError('');
        const updatedOrder = [...order];
        for (let i = 0; i < quantity; i++)
            updatedOrder.push(pizza);
        setOrder(updatedOrder);
        // clear pizza options
        setPizza({size: sizes[0].name});
        setQuantity(1);
    }
    
    return (        
    <div className="App">
        <h1 id="title">Create Your Pizza</h1>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-3 pizzaSizes">
                    <h4>Select Pizza Size</h4>
                    <SizesList sizes={sizes} changeSize={changeSize} pizza={pizza}/>
                    {/* className to include index of pizza.size allowing CSS to figure out scale size */}
                    <img className={`pizza-size-img _${sizes ? (sizes.findIndex(size => size.name === pizza.size)) : -1}`} src={pizzaSize} alt="pizza-size"/>
                </div>
                <div className="col-sm-12 col-md-3 meatToppings">
                    <h4>Meat Toppings</h4>
                    <ToppingsList toppings={toppings} ismeat={true} changeToppings={changeToppings} pizza={pizza}/>
                </div>
                <div className="col-sm-12 col-md-6 nonMeatToppings">
                    <h4>Non-meat Toppings</h4>
                    <ToppingsList toppings={toppings} ismeat={false} changeToppings={changeToppings} pizza={pizza}/>
                </div>
            </div>
            <div id="button-row" className="row d-flex align-items-center">
                <p className="errorMessage">{error ? error : ''}</p>
                <button className="btn btn-secondary clear mr-2" onClick={() => setPizza({size: pizza.size})}>Clear Toppings</button>
                <QuantityWidget quantity={quantity} setQuantity={setQuantity}/>
                <button className="btn btn-info add-to-order ml-2" onClick={() => addPizzaToOrder()}>Add to Order</button>
            </div>
            {order.length > 0 ? 
                (<div id="summaryBorder" data-margin={pizza.size}>
                    <h2 className="m-3">Order Summary</h2>
                    <OrderSummary order={order} setOrder={setOrder} user={user}/>
                </div>)
            : null}
        </div>
    </div>
    );
}

export default CreateOrder;