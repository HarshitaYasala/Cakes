import React, { useState, useEffect } from 'react';

const Size = () => {
    const [screenSize, setScreensize] = useState({
        width:window.innerWidth,
        height:window.innerHeight,
    });

    const updateScreenSize=()=>{
        setScreensize({
            width: window.innerWidth,
            height:window.innerHeight,
        });
    };

    useEffect(()=>{
        window.addEventListener('resize', updateScreenSize);

        return () => {
            window.removeEventListener('resize', updateScreenSize);
        }
    })
    return (  
        <div>
            <h1>Screen Size Example</h1>
            <p>Resize the window to see the screenSize</p>
            <p>Width:{screenSize.width}</p>
            <p>Height:{screenSize.height}</p>

        </div>
    );
}
 
export default Size;