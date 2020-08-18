import React, {useState, useEffect} from 'react';
import OrderPizza from './OrderPizza';

const OrderSummary = ({order, setOrder, user}) => {
    const [totals, setTotals] = useState([0, 0, 0]);
    const [error, setError] = useState('');

    // calculate subtotal, tax, and total whenever the order changes
    useEffect(() => {
        const prices = order.map(pizza => pizza.price);
        const subTotal = (prices.reduce((sum, price) => sum + price));
        const tax = (subTotal * 0.07);
        const total = (subTotal + tax);
        setTotals([subTotal, tax, total]);
    }, [order])

    // this is to remove any lingering login error message if user successfully logged in
    useEffect(() => {
        if (user)
            setError('');
    }, [user])
    
    // removes pizza from order when user clicks Remove button
    const removePizza = (index) => {
        let orderList = [...order];
        orderList.splice(index, 1);
        setOrder(orderList);
    }

    // renders each added pizza on the order
    const renderOrder = () => {
        return order.map((pizza, index) => {
            return <OrderPizza key={index} pizza={pizza} removePizza={removePizza} index={index}/>
        })
    }

    // post order to backend
    const submitOrder = () => {
        async function postOrder(url = '', data = {}) {
            const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            });
            return response.json();
        }
        
        // tie order to user.  Admin user id == -1
        postOrder('/orders', { 
            order: order,
            cost: totals[2].toFixed(2),
            customer_id: user === 'Admin' ? -1 : user
        })
        .then(data => { setOrder([]); })
        .catch(err => console.log(err));
    }

    return (
        <div className="container" id="summaryContainer">
                {renderOrder()}
                <div id="orderCost" className="m-3">
                    <h5>Subtotal: ${totals[0].toFixed(2)}</h5>
                    <h5>Tax: ${totals[1].toFixed(2)}</h5>
                    <h5>Total: ${totals[2].toFixed(2)}</h5>
                    <p className="errorMessage mb-2">{error ? error : ''}</p>
                    {window.location.pathname === '/' ? <button className="btn btn-success" onClick={() => user ? submitOrder() : setError('You need to be logged in to do that')}>Submit Order</button>
                    : null }
                </div>
        </div>
    );
}

export default OrderSummary;