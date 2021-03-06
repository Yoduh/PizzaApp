import React, {useState, useEffect} from 'react';

const Checkbox = ({label, handleCheckboxChange, pizza}) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        handleCheckboxChange(label, isChecked);
    }, [isChecked, label])

    // if topping is no longer on pizza (options cleared or pizza added), uncheck the box
    useEffect(() => {
        if (pizza.toppings && pizza.toppings.filter(topping => topping === label))
            return;
        setIsChecked(false);
    }, [pizza, label])

    return (
        <div className="checkbox">
            <label>
                <input className="mr-1" type="checkbox" value={label} checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                {label}
            </label>
        </div>
    );
}

export default Checkbox;