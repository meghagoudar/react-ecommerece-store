import React from 'react'
import Cartitem from './cartitem';
export default function Cartlist({value}){
    const {cart}= value;
     return (
            <div className="container-fluid">
                {cart.map(item=>{
                   return   <Cartitem  key={item.id}  item={item} value={value} />;

                })}
                
                 </div>
        );
    };

// export default Cartlist;
