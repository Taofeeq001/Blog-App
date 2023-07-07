import React, { useState } from "react";
import './Login.css'
import {AiOutlineUser} from 'react-icons/ai';
import {GoPasskeyFill} from 'react-icons/go';
import {BiLogoApple} from 'react-icons/bi'

const Login =()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [redirect, setRedirect] = useState(false)

    return(
        <div className="login">
            <div className="login-container">
                <div>
                    <h1>Sign In</h1>
                    <p>Login and See what we have for you</p>
                </div>
                <div className="login-form" action="">
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
                        <button className="btn1">Sign In</button>
                        <h4>OR</h4>
                        <a style={{width:'100%'}} href="/registerwithapple">
                            <button className="btn2">
                                <BiLogoApple/>
                                Sign In with Apple
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;