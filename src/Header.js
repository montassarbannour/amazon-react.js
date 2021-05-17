import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <nav className="header">
            {/*logo on the left */}
            <Link to="/"> 
                
            <img className="header__logo" 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
           </Link>

            {/*search box */}
            <div className="header__search">
              <input type="text" className="header__searchInput"/>
              <SearchSharpIcon className="header__search_icno"/>
              
            </div>
            
            {/*3 links */}
            <div className="header__nav" >
                {/*1 link */}
                <Link to="/login" className="header__link">
                    <div className="header__option"> 
                     <span className="header__option__one">Hello</span>
                     <span className="header__option__two">Sing in</span>   
                    </div>
                
                </Link>
                {/*2 link */}
                <Link to="/" className="header__link">
                    <div className="header__option"> 
                     <span className="header__option__one">Returns</span>
                     <span className="header__option__two">Orders</span>   
                    </div>
                
                </Link>
                {/*3 link */}
                <Link to="/" className="header__link">
                    <div className="header__option"> 
                     <span className="header__option__one">Your</span>
                     <span className="header__option__two">Prime</span>   
                    </div>
                
                </Link>
                {/*4 link */}
                <Link to="/checkout" className="header__link">
                    <div className="header__option__basket">
                        {/*shopping basket */}
                        <ShoppingBasketIcon/>
                        {/*number of items in the basket */}
                        <span className="header__option__two header__bashet__cont">0 Basket</span>

                    </div>
                </Link>

            </div>
            
            {/*basket icon with number */}
             
        </nav>
        
    )
}

export default Header
