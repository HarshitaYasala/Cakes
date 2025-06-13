import React from 'react';
import { BrownieandbarData } from '../data/Browniesandbars'; 
import { Link } from 'react-router-dom';
import { homeData } from '../data/homeData';
import Navbar from './Navbar';


const Brownies = () => {
    
    return (
        <><h2 className='heading'>Brownies and Bars</h2>
        <div className='proSection'>
            {
                BrownieandbarData.map((item)=>{
                    return(
                        <Link to={`/BrowniesandBars`}>
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
 
export default Brownies;