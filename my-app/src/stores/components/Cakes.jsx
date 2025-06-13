import React from 'react';
import { cakesData } from '../data/cakes';
import { Link } from 'react-router-dom';
import { homeData } from '../data/homeData';
import Navbar from './Navbar';


const Cakes = () => {
    
    return (
        <><h2 className='heading'>Cakes</h2>
        <div className='proSection'>
            {
                cakesData.map((item)=>{
                    return(
                        <Link to={`/cakes`}>
                        <div className='imgBox'>
                            <img className= 'proImage' src={item.img} alt=''/>
                            <h2>{item.pro}</h2>
                        </div>
                        </Link>
                    )
                })
            }
        </div></>
     )
}
 
export default Cakes;