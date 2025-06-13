import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item, quantity = 1) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + quantity }
                        : cartItem
                );
            } else {
                return [...prevItems, { ...item, quantity }];
            }
        });
    };

    const removeFromCart = (item) => {
        setCartItems((prevItems) => prevItems.filter(cartItem => cartItem.id !== item.id));
    };

    const updateQuantity = (itemId, quantity) => {
        setCartItems((prevItems) => prevItems.map(cartItem =>
            cartItem.id === itemId
                ? { ...cartItem, quantity }
                : cartItem
        ));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
