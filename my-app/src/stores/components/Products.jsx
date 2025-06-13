import React from 'react';
import Cakes from './Cakes';
import CupCakes from './CupCakes'
import ComboPacks from './ComboPacks';
import Easter from './Easter';
import Brownies from './Brownies';


const Products = () => {
    return ( 
        <div>
            <Cakes/>
            <CupCakes/>
            <ComboPacks/>
            <Easter/>
            <Brownies/>
        </div>
     );
}
 
export default Products;