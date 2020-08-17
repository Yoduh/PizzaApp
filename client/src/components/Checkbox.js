import React, {useState, useEffect} from 'react';

const Checkbox = ({label, handleCheckboxChange}) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        handleCheckboxChange(label, isChecked);
    }, [isChecked])

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