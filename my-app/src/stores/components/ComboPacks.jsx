import React from 'react';
import { combopackData } from '../data/ComboPack';
import { Link } from 'react-router-dom';
 const ComboPacks = () => {
    return ( 
        <><h2 className='heading'>Cookies</h2>
        <div className='proSection'>
            {
                combopackData.map((item)=>{
                    return(
                        <Link to={`/combopacks`}>
                        <div className='imgBox'>
                            <img className= 'proImage' src={item.img} alt=''/>
                            <h2>{item.product}</h2>
                        </div>
                        </Link>
                    )
                })
            }
        </div></>
     );
 }
  
 export default ComboPacks;