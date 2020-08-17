import React from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton'
import Checkbox from './Checkbox';

const ToppingsList = ({toppings, isMeat}) => {
    
    const handleCheckboxChange = (label, isChecked) => {
        console.log(label + ' ' + isChecked);
    }
    // render each topping as a separate div
    const renderToppings = (toppings, isMeat) => {
        return toppings && toppings.length > 0 ? (
            toppings.map(topping => {
            return topping.isMeat === isMeat ? (
                <Checkbox key={topping.topping} label={topping.topping} handleCheckboxChange={handleCheckboxChange} />
                ) : null
            })
        ): null;
    }

    return (
        <div id='toppingsContainer' name='toppings' className='d-flex flex-column flex-start justify-content-center'>
            {renderToppings(toppings, isMeat)}
        </div>
    );
}

export default ToppingsList;