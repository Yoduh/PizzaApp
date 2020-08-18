import React from 'react';

const OrderPizza = ({pizza, removePizza, index}) => {
    const renderPizza = () => {
        return(
            <>
                <h5 className="pizza">
                    {pizza.size} Pizza 
                    <span className="float-right">
                        <button className="btn btn-sm btn-danger mr-2" onClick={() => removePizza(index)}>Remove</button>
                        ${pizza.price.toFixed(2)}
                    </span>
                </h5>
                <div className="toppings">
                    <span>Toppings: </span>
                    {pizza.toppings.map((topping, index) => {
                        return (
                            <span key={index}>
                                {topping}{index === pizza.toppings.length - 1 ? '' : ', '} 
                            </span>)
                    })}
                </div>
                <div className="price">
                    
                </div>
            </>
        );
    }
    return (
        <div className="pizzaContainer m-3">
            {renderPizza()}
        </div>
    );
}

export default OrderPizza;