import React from 'react'

import { Product } from "../../components/types/type";


type Prop = {
  item: Product;
};


export default function ProductItem({item}: Prop) {
  return (
    <div>
      <img
        src= {item.image}
        alt=""
        style={{height:"200"}}
      />
      <p>{item.title}</p>
      <p>{item.price}</p>
      <p>{item.category}</p>
      <p>{item.description}</p>
    </div>
  );
}
