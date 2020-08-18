import React from 'react';

const SizesList = ({sizes, changeSize, pizza}) => {
    // render each size as a separate button
    const renderSizes = (sizes) => {
        return sizes && sizes.length > 0 ? (
            sizes.map(size => {
            return (
                // clicking will add size to pizza object which will make button 'active'
                <button type="button"
                    className={`btn btn-primary mb-2 sizeButton ${pizza.size === size.name ? ' active' : ''}`} 
                    key={size.name}
                    onClick={() => changeSize(size.name)}>
                        {size.name}
                </button>
                )
            })
        ) : null;
    }

    return (
        <div id="sizeContainer" className='toppingsContainer d-flex flex-column' name='toppings'>
            {renderSizes(sizes)}
        </div>
    )
}

export default SizesList;