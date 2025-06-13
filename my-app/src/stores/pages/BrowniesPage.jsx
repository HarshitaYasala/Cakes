import React from 'react';
import { BrownieandbarData } from '../data/Browniesandbars';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
const BrowniesPage = () => {
    return ( 
      <>
      <Navbar/>
        <div className='pageSection'>
        {BrownieandbarData.map((item) => {
            return (
                <><Link to={`/Browniesabdbars/${item.id}`}>
                    <div className='pageImg'>
                        <img src={item.image} alt='' />
                    </div>
                </Link>
                </>
            );
        })}
    </div>
    </>
     );
}
 
export default BrowniesPage;