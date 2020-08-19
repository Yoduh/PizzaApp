import React, {useState, useEffect} from 'react';
import OrderSummary from './OrderSummary'

const OrderHistory = ({user}) => {
    const [history, setHistory] = useState([]);
    // get orders based on logged in user from backend
    useEffect(() => {
        const fetchOrders = async () => {
            const url = user === 'Admin' ? '/orders' : `/orders/${user}`;
            const results = await fetch(url);
            let data = await results.text();
            setHistory(JSON.parse(data));
        }
        if (!user) {
            setHistory([]);
            return;
        }
        fetchOrders();
    }, [user])
    
    const removeHistory = (id) => {
        async function deleteOrder(url = '') {
            const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            });
            return response.status;
        }
        
        deleteOrder(`/orders/${id}`)
        .then(status => {
            if (status === 200) {
                const newHistory = history.filter(item => item.id !== id);
                console.log(newHistory);
                setHistory(newHistory);
            }
        })
        .catch(err => console.log(err));
    }

    const renderHistory = () => {
        return (
            !user ? <div>Login to view order history</div>  // user not logged in 
            : history.length === 0 ? <div>No history exists</div>   // user has no history
            : history.map((item) => {
                return (
                    <div className="history-row" key={item.id}>
                        <h4>{user === 'Admin' ? item.customer_id === -1 ? 'Admin ' : `Customer #${item.customer_id} ` : ''}Order #{item.id}</h4>
                        {/* {item.order.map((pizza, index) => { 
                            return (<OrderPizza pizza={pizza} index={index} key={`${item.id}-${index}`}/>)
                        })} */}
                        <OrderSummary order={item.order} />
                        {user === 'Admin' ? <button className="btn btn-danger" onClick={() => removeHistory(item.id)}>Delete from History</button> : null}
                    </div>
                );
            })
        )
    }
    return (
        <div className="container historyContainer">
            <h1 id="title">Order History</h1>
            {renderHistory()}
        </div>
    );
}

export default OrderHistory;