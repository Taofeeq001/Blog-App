import React, { useState } from "react";
import './Login.css'
import {AiOutlineUser} from 'react-icons/ai';
import {GoPasskeyFill} from 'react-icons/go';
import {BiLogoApple} from 'react-icons/bi'
import { Navigate, json } from "react-router-dom";

const Login =()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [errorMessage, setErrorMessage] = useState()
    const [isClick, setIsClick] = useState(false)

    const loginSubmit=(e)=>{
        e.preventDefault();
        if(!username || !password){
            setError(true)
            setErrorMessage("Username and Password is required!")
        }else if(username !== '' && password !==''){
            const base_url = `https://blog-api-8337.onrender.com/login/`
            try {
                setIsClick(true)

                const loginData =async()=>{
                    const response = await fetch(base_url, {
                        method: 'POST',
                        headers: {"content-type":"application/json"},
                        body: JSON.stringify({username, password})
                    }).then(res => res.json())
                    if (response.ok){
                        setRedirect(true);
                        alert("Login Successfully. Redirecting to Dashboard...");
                        setIsClick(false);
                        setError(false)

                    }
                    else{
                        const {message} = response;
                        setError(true)
                        setErrorMessage("Error: "+message)
                        setIsClick(false);
                    }
                }
                loginData()
                
            } catch (error) {
                setError(true)
                // setErrorMessage(error)
                // setIsClick(true)
            }
        }
       
        
    }


    if(redirect){
        return <Navigate to={'/dashboard'}/>
    }
    return(
        <div className="login">
            <div className="login-container">
                <div>
                    <h1>Sign In</h1>
                    <p>Login and See what we have for you</p>
                    {
                        error && (
                    <p className="error">{errorMessage}</p>
                        )
                    }
                </div>
                <form onSubmit={loginSubmit} className="login-form" action="">
                    <div className="username">
                        <AiOutlineUser/>
                        <input type="text" 
                            value={username} 
                            onChange={(event)=> setUsername(event.target.value) }
                            placeholder="Email or Phone" 
                        />
                    </div>
                    <div className="password">
                        <GoPasskeyFill/>
                        <input type="password" placeholder="Password"
                        value={password} 
                        onChange={(event)=> setPassword(event.target.value) } />
                    </div>
                    <a href="">Forgot Password?</a>
                    <div className="btn-container">
                        <button type="submit" className={isClick? "btn1-sub":"btn1"}>{isClick? "Loading..." : "Sign In"}</button>
                        <h4>OR</h4>
                        <a style={{width:'100%'}} href="/registerwithapple">
                            <button className="btn2">
                                <BiLogoApple/>
                                Sign In with Apple
                            </button>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;