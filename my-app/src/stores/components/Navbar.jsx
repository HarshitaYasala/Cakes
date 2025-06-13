import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const {cartItems} = useCart()
    return ( 
        <><div className='navSection'>
            <Link to='/'>
            <div className="title">
                <h2>CAKES DEN</h2>
            </div>
            </Link>
            <div className="search">
                <input className='typesearch' type='text' placeholder='search' />
            </div>
            <div className="user">
                <Link to='/login'>
                <div className="user-detail">
                   Login
                </div>
                </Link>
                <Link to='/cart'>
                <div className='cart'>
                         Cart
                    <span>
                        {cartItems.length}
                    </span>
                </div>
                </Link>
            </div>
        </div>
        <div className='subMenu'>
            <ul>
                <Link to='/cakes'><li>Cakes</li></Link>
                <Link to='/cupcakes'><li>Cup Cakes</li></Link>
                <Link to='/easterspecial'><li>Easter Special</li></Link>
                <Link to='/combopacks'><li>Combo Packs</li></Link>
                <Link to='/BrowniesandBars'><li>Brownies and Bars</li></Link>
            </ul>

            </div></>
     );
}
 
export default Navbar;