import React from 'react';
import { easterspecialData } from '../data/EsaterSpecial';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
const EasterSpecial = () => {
    return ( 
        <>
        <Navbar/>
        <div className='pageSection'>
            {
                easterspecialData.map((item)=>{
                    return(
                        <Link to ={`/easterspecial/${item.id}`}>
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
 
export default EasterSpecial;