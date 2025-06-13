import React from 'react';
import { combopackData } from '../data/ComboPack';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
 const ComboPackspage = () => {
    return ( 
        <>
        <Navbar/>
        <div className='pageSection'>
            {
                combopackData.map((item)=>{
                    return(
                        <Link to={`/combopacks/${item.id}`}>
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
  
 export default ComboPackspage;