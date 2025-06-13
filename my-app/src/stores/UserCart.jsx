import React, { useState, useEffect } from 'react';
import { useCart } from './context/CartContext';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';

const UserCart = () => {
    const { cartItems, removeFromCart, updateCartItemQuantity } = useCart();
    const [cartItemsState, setCartItems] = useState(cartItems);
    const [selectAll, setSelectAll] = useState(false);

    useEffect(() => {
        setCartItems(cartItems);
    }, [cartItems]);

    const sanitizePrice = (price) => {
        if (typeof price === 'string') {
            const sanitized = price.replace(/[^0-9.-]+/g, '');
            const parsed = parseFloat(sanitized);
            return !isNaN(parsed) ? parsed : 0;
        }
        return typeof price === 'number' && !isNaN(price) ? price : 0;
    };

    const calculateTotalPrice = () => {
        return cartItemsState.reduce((total, item) => {
            const price = sanitizePrice(item.price) * item.quantity;
            if (item.checked) {
                return total + price;
            }
            return total;
        }, 0);
    };

    const handleCheckboxChange = (index) => {
        const updatedCartItems = [...cartItemsState];
        updatedCartItems[index].checked = !updatedCartItems[index].checked;
        setCartItems(updatedCartItems);
    };

    const handleSelectAll = () => {
        const updatedCartItems = cartItemsState.map((item) => ({
            ...item,
            checked: !selectAll
        }));
        setCartItems(updatedCartItems);
        setSelectAll(!selectAll);
    };

    const handleRemoveFromCart = (id) => {
        removeFromCart(id);
        setCartItems(cartItems.filter(cartItem => cartItem.id !== id));
    };

    const handleQuantityChange = (index, quantity) => {
        const updatedCartItems = [...cartItemsState];
        updatedCartItems[index].quantity = quantity;
        setCartItems(updatedCartItems);
        updateCartItemQuantity(updatedCartItems[index].id, quantity);
    };

    return (
        <>
            <Navbar />
            <div>
                <h2 className='y-cart'>Your Cart</h2>
                {cartItemsState.length === 0 ? (
                    <p className='empty'>Your Cart is Empty</p>
                ) : (
                    <div className='fullcart'>
                        {cartItemsState.map((item, index) => (
                            <div key={item.id} className="cart-section">
                                <label className='checkbox1'>
                                    <input
                                        type="checkbox"
                                        checked={item.checked}
                                        onChange={() => handleCheckboxChange(index)}
                                    />
                                </label>
                                <div className="cart-image">
                                    <img className='proImage' src={item.image} alt={item.product} />
                                </div>
                                <div className="cart-details">
                                    <h3>{item.product}</h3>
                                    <h2>${(sanitizePrice(item.price) * item.quantity).toFixed(2)}</h2>
                                    <h3>{item.description}</h3>
                                </div>
                                <button className='removeBtn' onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                            </div>
                        ))}
                        <label className='checkbox1'>
                            <input
                                type="checkbox"
                                checked={selectAll}
                                onChange={handleSelectAll}
                            />
                            <span className='all-checkbox'>ALL</span>
                        </label>
                        <div className="total-price">
                            <h3>
                                Total Price: ${calculateTotalPrice().toFixed(2)} 
                                <Link to="/checkout">
                                    <button className='checkout'>CHECKOUT</button>
                                </Link>
                            </h3>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default UserCart;
