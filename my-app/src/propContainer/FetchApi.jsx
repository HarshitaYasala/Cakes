import React, {useState, useEffect} from 'react';

const userDetails = "https://jsonplaceholder.typicode.com/posts";

const FetchApi = () => {
    const[user, setUser] = useState([])

    const userHandler = async () => {
        const response = await fetch(userDetails);
        const newData = await response.json();
        setUser(newData);
    };

    useEffect(()=>{
        console.log(userHandler());
    }, []);
    console.log(user);
    return <div>
            {user.map((item)=>{
                return(
                    <div className='userSection'>
                        <h2 style={{color:"blue"}}> {item.title}</h2>
                        <h3 style={{color:"green"}}>{item.body}</h3>
                    </div>
                )
            })}
        </div>;
};
 
export default FetchApi;
