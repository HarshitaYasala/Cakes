import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormExample = () => {
    const notify = () => toast("Wow so easy!")
    const[userName, setUserName]= useState("")

    const[newUserDetails, setNewUserDetails] =useState()


    const getUserName=(event)=>{
        setUserName(event.target.value)

    }
    const userDetails=(e)=>{
        e.preventDefault()
        setNewUserDetails(userName)
        notify()

    }
    return ( 
      
      <section className='formSection'>
        <h2>Hello, {newUserDetails}</h2>
        <ToastContainer />
        <div className='inputDiv'>

            <form onSubmit={userDetails}>
            <input type="text" placeholder='Enter your name' onChange={getUserName}/>
            <br />
            <button type='submit'>Submit</button>
            </form>
            
        </div>
      </section>
   
     )
}
 
export default FormExample;