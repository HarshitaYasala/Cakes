import React, { useState } from 'react';
import { useCart } from './context/CartContext';
import Navbar from './components/Navbar';

const Checkout = () => {
    const { cartItems } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        zip: '',
        country: '',
        email: '',
        phone: '',
        cardNumber: '',
        cardExpiry: '',
        cardCVC: '',
    });

    const sanitizePrice = (price) => {
        if (typeof price === 'string') {
            const sanitized = price.replace(/[^0-9.-]+/g, '');
            const parsed = parseFloat(sanitized);
            return !isNaN(parsed) ? parsed : 0;
        }
        return typeof price === 'number' && !isNaN(price) ? price : 0;
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            const price = sanitizePrice(item.price) * item.quantity;
            return total + price;
        }, 0);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to the backend or show a success message
        console.log('Form submitted', formData);
    };

    return (
        <>
            <Navbar />
            <div className="checkout-container">
                <h2>Checkout</h2>
                <div className="cart-summary">
                    <h3>Order Summary</h3>
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="cart-image">
                                <img className='proImage' src={item.image} alt={item.product} />
                            </div>
                            <div className="cart-details">
                                <h4>{item.product}</h4>
                                <p>{item.description}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>${(sanitizePrice(item.price) * item.quantity).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                    <div className="total-price">
                        <h3>Total Price: ${calculateTotalPrice().toFixed(2)}</h3>
                    </div>
                </div>
                <div className="shipping-form">
                    <h3>Shipping Details</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City:</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="zip">ZIP Code:</label>
                            <input
                                type="text"
                                id="zip"
                                name="zip"
                                value={formData.zip}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="country">Country:</label>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone:</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <h3>Payment Details</h3>
                        <div className="form-group">
                            <label htmlFor="cardNumber">Card Number:</label>
                            <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cardExpiry">Expiry Date:</label>
                            <input
                                type="text"
                                id="cardExpiry"
                                name="cardExpiry"
                                value={formData.cardExpiry}
                                onChange={handleChange}
                                placeholder="MM/YY"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cardCVC">CVC:</label>
                            <input
                                type="text"
                                id="cardCVC"
                                name="cardCVC"
                                value={formData.cardCVC}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="checkout-btn">  Place Order</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Checkout;
