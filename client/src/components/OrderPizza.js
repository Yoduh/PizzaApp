import React from 'react';

const OrderPizza = ({pizza, removePizza, index}) => {
    const renderPizza = () => {
        return(
            <div className="container">
                <div className="row">
                    <div className="col col-pizza"> {/* column for pizza name and toppings rows*/}
                        <div className="row pizza">
                            <h5>{pizza.size} Pizza </h5>
                        </div>
                        <div className="row toppings">
                            <span className="mr-1">Toppings:</span>
                            {pizza.toppings.map((topping, index) => {
                                return (
                                    <span key={index}>
                                        {topping}{index === pizza.toppings.length - 1 ? '' : ',\u00A0'}
                                    </span>)
                            })}
                        </div>
                    </div>
                    {window.location.pathname === '/' ? 
                        <div className="col" id="col-remove">
                            <button className="btn btn-sm btn-danger mr-2" onClick={() => removePizza(index)}>Remove</button>
                        </div>
                    : null }
                    <div className="col" id="col-price">
                        <h5>${pizza.price.toFixed(2)}</h5>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="pizzaContainer m-3">
            {renderPizza()}
        </div>
    );
}

export default OrderPizza;