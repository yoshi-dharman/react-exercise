import { useState } from "react";

import React from 'react'
import ProductItem from './ProductItem'

function ListProduct() {

    const [data] = useState([
        {
          name: "laptop",
        },
        {
          name: "mouse",
        },
        {
          name: "laptop",
        },
    ]);


    return (
        <div className="mt-5">
            <ul>
                {data.map((item,index) => {
                //    console.log(index);
                return <ProductItem key={index} name={item.name}/>
                })}
            </ul>
        </div>
    );

}

export default ListProduct;