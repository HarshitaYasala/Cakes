import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-form-submit");
    const loginErrorMsg = document.getElementById("login-error-msg");
    document.addEventListener('DOMContentLoaded', function () {
    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;
    
        if (username === "user" && password === "web_dev") {
            alert("You have successfully logged in.");
        } else {
            loginErrorMsg.style.opacity = 1;
        }
    })
})
   
    return ( 
       <>
        <div id="login-error-msg-holder">
      <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
    </div>
    
    <form id="login-form">
      <input type="text" name="username" id="username-field" class="login-form-field" placeholder="Username"/>
      <input type="password" name="password" id="password-field" class="login-form-field" placeholder="Password"/>
      <Link to='/'>
      <input type="submit" value="Login" id="login-form-submit"/>
      </Link>
    </form>
        </>
     );
}
 
export default LoginPage;