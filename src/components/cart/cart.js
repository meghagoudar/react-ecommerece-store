import React from 'react';
import Title from '../title';
import CartColumns from './cartColumns';
import EmptyCart from './emptycart';
import {ProductConsumer} from '../../context';
// import Cartitem from './cartitem';
import Cartlist from './cartlist';
import CartTotals from './carttotals';

export default function Cart (){

        return (
            <div>
                <ProductConsumer >
                    {value=>{
                        const {cart} = value;
                        if(cart.length>0){
                            return (  <React.Fragment> 
                                <Title name="your" title="cart"/>
                                <CartColumns/>
                                <Cartlist value={value}/>
                                <CartTotals value={value}/>
                            </React.Fragment>

                            );
                        }
                        else{
                            return(<EmptyCart/>);
                        }
                    }}
                </ProductConsumer>
            </div>
        )
    }

