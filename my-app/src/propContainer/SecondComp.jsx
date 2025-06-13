import React from 'react';
const SecondComp = (props) => {
    const {name, area, zipcode, country} = props.harr
    return ( 
        <section>
            <div>{name}</div>
            <div>{area}</div>
            <div>{zipcode}</div>
            <div>{country}</div>
        </section>
    
     )
}
 
export default SecondComp;