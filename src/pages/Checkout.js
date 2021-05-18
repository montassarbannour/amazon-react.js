import React from 'react'
import { UseStateValue } from '../StateProvider';
import "./Checkout.css"
import CheckoutProduct from "../compoents/CheckoutProduct"
import Subtotal from '../compoents/Subtotal';


function Checkout() {
    const [{basket}]=UseStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/08/AMAZON-FASHION/2021/FASHION/FLIP/04_MAY/MERCH/GW/GW_HERO_TALL_1500X600_WMN_STAYCATION._CB670095782_.jpg" alt=""/>
        {basket?.length===0 ?(
            <div>
                <h2>Your Shopping basket is empty</h2>
                <p>
                    You have no items in your basket. to buy one or more items, click "Add to basket" next to the item.
                </p>
            </div>
        ):(
            <div>
                <h2 className="checkout__title">Your Shopping basket</h2>
                {basket?.map(item =>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />

                ))}

            </div>
        )}
           </div>
           {basket.length > 0 && (
            <div className="checkout__right">
            <Subtotal/>
            </div>
        )}
        </div>
        
    )
}

export default Checkout;
