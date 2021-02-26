import React from 'react';

function ProductItem(props) {
    return (
        <>
        <li className="p-1">
            {props.name}
        </li>
        </>
    );
}

export default ProductItem;
