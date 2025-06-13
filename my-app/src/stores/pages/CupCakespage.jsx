import React from 'react';
import Navbar from '../components/Navbar';
import { cupcakesData } from '../data/CupCakes';
import { Link } from 'react-router-dom';

const CupCakespage = () => {
    return ( 
        <>
        <Navbar/>
        <div className='pageSection'>
            {
                cupcakesData.map((item)=>{
                    return(
                        <Link to={`/cupcakes/${item.id}`}>
                        <div className= 'pageImg'>
                            <img src={item.image} alt=''/>
                        </div>
                        </Link>
                    )
                })
            }
        </div></>
     );
}
 
export default CupCakespage;