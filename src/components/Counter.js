import React from 'react'

import { useState } from "react";

function Counter() {

    const [number, setNumber] = useState(0);
    function increase() {
        setNumber(number + 1);
    }

    function decrease() {
        if (number > 0) 
            setNumber(number - 1);
    }

    return (
        <div className="m-3 d-flex justify-content-around">
            <div>Counter</div>
            <button className="btn btn-primary" onClick={decrease}>-</button>
            {number}
            <button className="btn btn-primary" onClick={increase}>+</button>
        </div>
    )
}

export default Counter
