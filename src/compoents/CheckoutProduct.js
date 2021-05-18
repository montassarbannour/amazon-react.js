import React from 'react'
import StarRateSharpIcon from '@material-ui/icons/StarRateSharp';
import './CheckoutProduct.css'
import { UseStateValue } from '../StateProvider';


function CheckoutProduct({id,title,image, price,rating}) {
    const [{basket},dispatch]= UseStateValue();
    const RemoveFormBasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })

    }
   
    return (
        <div className="CheckoutProduct">
            <img className="CheckoutProduct__img" src={image} alt=""/>
            <div className="CheckoutProduct__info">
                <p className="CheckoutProduct__title">{title}</p>
                <p className="CheckoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="CheckoutProduct__rating">
                {Array(rating)
                .fill()
                .map((_) =>(
                    <p><StarRateSharpIcon/></p>
                ))}
            </div>
            <button onClick={RemoveFormBasket}>Remove form basket</button>

            </div>

            
        </div>
    )
}

export default CheckoutProduct
