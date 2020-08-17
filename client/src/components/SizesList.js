import React from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton'

const SizesList = ({sizes, setNewPizza}) => {
    // render each size as a separate div
    const renderSizes = (sizes) => {
        return sizes && sizes.length > 0 ? (
            sizes.map(size => {
            return (
                    <ToggleButton key={size.size} value={size.size}>
                        {size.size}
                    </ToggleButton>
                )
            })
        ) : null;
    }

    return (
        <ToggleButtonGroup type='radio' name='sizes' id='sizesContainer' vertical onChange={value => setNewPizza(value)}>
            {renderSizes(sizes)}
        </ToggleButtonGroup>
    )
}

export default SizesList;