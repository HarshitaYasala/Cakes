import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { cakesData } from '../data/cakes';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';

const CakeSin = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = cakesData.find((item) => item.id === id);

    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (value > 0) {
            setQuantity(value);
        }
    };

    return (
        <>
            <Navbar />
            <div className="ind-page">l
                <div className="ind-image">
                    <img src={product.image} alt='' />
                </div>
                <div className="ind-details space">
                    <div className="ind-product">
                        <h2>{product.product}</h2>
                    </div>
                    <div className="ind-price space">
                        <h3>{product.price}</h3>
                    </div>
                    <div className="ind-description space">
                        <h3>{product.description}</h3>
                    </div>
                    <div className="quantity-control">
                        <h3>
                        <label className='numberquantity'>Quantity:</label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={handleQuantityChange}
                            min="1"
                        />
                        </h3>
                    </div>
                    <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
                </div>
            </div>
        </>
    );
}

export default CakeSin;
