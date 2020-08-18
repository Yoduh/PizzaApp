import React from 'react';
import Checkbox from './Checkbox';

const ToppingsList = ({toppings, ismeat, changeToppings, pizza}) => {
    // render each topping as a separate checkbox
    const renderToppings = (toppings, ismeat) => {
        return toppings && toppings.length > 0 ? (
            toppings.map(topping => {
            return topping.ismeat === ismeat ? (
                <Checkbox key={topping.name} label={topping.name} handleCheckboxChange={changeToppings} pizza={pizza} />
                ) : null
            })
        ): null;
    }

    return (
        <div id='toppingsContainer' name='toppings' className='d-flex flex-column flex-start justify-content-center'>
            {renderToppings(toppings, ismeat)}
        </div>
    );
}

export default ToppingsList;