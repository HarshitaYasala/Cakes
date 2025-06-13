import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';

const OrderConfirmation = () => {
    const location = useLocation();
    const { formData, cartItems } = location.state || {};

    return (
        <>
            <Navbar />
            <div className="confirmation-container">
                <h2>Order Confirmation</h2>
                {formData ? (
                    <div>
                        <h3>Thank you for your order, {formData.name}!</h3>
                        <p>Your order has been placed successfully.</p>
                        <h4>Order Details:</h4>
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index}>
                                    <p>{item.product} - Quantity: {item.quantity}</p>
                                    <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                                </li>
                            ))}
                        </ul>
                        <h4>Shipping Details:</h4>
                        <p>{formData.address}</p>
                        <p>{formData.city}, {formData.zip}</p>
                        <p>{formData.country}</p>
                        <p>Email: {formData.email}</p>
                        <p>Phone: {formData.phone}</p>
                        <Link to="/">Back to Home</Link>
                    </div>
                ) : (
                    <p>No order details available.</p>
                )}
            </div>
        </>
    );
};

export default OrderConfirmation;
