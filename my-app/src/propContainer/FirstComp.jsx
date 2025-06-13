import React, { useState, useEffect } from 'react';
const FirstComp = () => {
    const [name, setName] = useState("Harshita");

    useEffect(()=>{
    if(name== "Harshita"){
        setName("Harr")
    }else{
        setName("Sweety")
    }
},[])

    return ( 
        <div>
            <h1>My name is {name}</h1>
        </div>
     )
}
 
export default FirstComp;