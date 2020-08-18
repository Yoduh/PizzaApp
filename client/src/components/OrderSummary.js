import React, {useState, useEffect} from 'react';
import OrderPizza from './OrderPizza';

const OrderSummary = ({order, setOrder}) => {
    const [totals, setTotals] = useState([0, 0, 0]);

    // calculate subtotal, tax, and total whenever the order changes
    useEffect(() => {
        const prices = order.map(pizza => pizza.price);
        const subTotal = (prices.reduce((sum, price) => sum + price));
        const tax = (subTotal * 0.07);
        const total = (subTotal + tax);
        setTotals([subTotal, tax, total]);
    }, [order])
    
    const removePizza = (index) => {
        let orderList = [...order];
        orderList.splice(index, 1);
        setOrder(orderList);
    }
    const renderOrder = () => {
        return order.map((pizza, index) => {
            return <OrderPizza key={index} pizza={pizza} removePizza={removePizza} index={index}/>
        })
    }

    const submitOrder = () => {
        // Order POST method implementation:
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
        
        postOrder('/orders/add', { 
            order: order,
            cost: totals[2].toFixed(2),
            customer_id: 1138 
        })
        .then(data => { console.log(data); })
        .catch(err => console.log(err));
    }

    return (
        <div className="container" id="summaryContainer">
                <h2 className="m-3">Order Summary</h2>
                {renderOrder()}
                <div id="orderCost" className="m-3">
                    <h5>Subtotal: ${totals[0].toFixed(2)}</h5>
                    <h5>Tax: ${totals[1].toFixed(2)}</h5>
                    <h5>Total: ${totals[2].toFixed(2)}</h5>
                    <button className="btn btn-success" onClick={() => submitOrder()}>Submit Order</button>
                </div>
        </div>
    );
}

export default OrderSummary;