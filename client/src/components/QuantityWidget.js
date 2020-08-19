import React from 'react';

const QuantityWidget = ({quantity, setQuantity}) => {
    return (
        <div className="quantityContainer d-flex">
            <button className="btn minus" onClick={() => quantity !== 1 ? setQuantity(quantity - 1) : null}>-</button>
            <div className="quantity">{quantity}</div>
            <button className="btn plus" onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
    );
}

export default QuantityWidget;