import React from 'react';
import { cupcakesData } from '../data/CupCakes';
import { Link } from 'react-router-dom';
const CupCakes = () => {
    return ( 
        <><h2 className='heading'>Cup Cakes</h2>
        <div className='proSection'>
            {
                cupcakesData.map((item)=>{
                    return(
                        <Link to={`/cupcakes`}>
                        <div className='imgBox'>
                            <img className= 'proImage' src={item.img} alt=''/>
                            <h2>{item.pro}</h2>
                        </div>
                        </Link>
                    )
                })
            }
        </div></>
    );
}
 
export default CupCakes;