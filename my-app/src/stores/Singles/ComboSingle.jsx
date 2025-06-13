import React from 'react';
import { combopackData } from '../data/ComboPack';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';
const ComboSingle = () => {
    const {id} = useParams();
    const {addToCart, cartItems} = useCart()
    const product = combopackData.find((item)=>item.id === id)
    console.log(id)
    return ( 
        <>
       <Navbar/>
        <div className="ind-page">
            <div className="ind-image">
                <img src={product.image} alt=''/>
            </div>
            <div className="ind-details space">
            <div className="ind-product">
                <h2>{product.product}</h2>
            </div>
            <div className="ind-price space">
                <h3>{product.price}</h3>
            </div>
            <div className="ind-desciption space">
                <h3>{product.description}</h3>
            </div>
            <button onClick={()=>addToCart(product)}>Add to Cart</button>
            </div>
        </div>
        </>
     );
}
 
export default ComboSingle;