import React from 'react';
import { cakesData } from '../data/cakes';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
const CakesPage = () => {
    return ( 
      <>
      <Navbar/>
        <div className='pageSection'>
        {cakesData.map((item) => {
            return (
                <><Link to={`/cakes/${item.id}`}>
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
 
export default CakesPage;