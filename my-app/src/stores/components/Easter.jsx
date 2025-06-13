import React from 'react';
import { easterspecialData } from '../data/EsaterSpecial';
import { Link } from 'react-router-dom';
const Easter = () => {
    return ( 
        <><h2 className='heading'>Easter Special</h2>
        <div className='proSection'>
            {
                easterspecialData.map((item)=>{
                    return(
                        <Link to={`/easterspecial`}>
                        <div className='imgBox'>
                            <img className= 'proImage' src={item.img} alt=''/>
                        </div>
                        </Link>
                    )
                })
            }
        </div></>
     );
}
 
export default Easter;