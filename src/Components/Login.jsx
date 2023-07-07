import React from "react";
import './Login.css'
import {AiOutlineUser} from 'react-icons/ai';
import {GoPasskeyFill} from 'react-icons/go';
import {BiLogoApple} from 'react-icons/bi'

const Login =()=>{
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
                        <input type="text" placeholder="Email or Phone" />
                    </div>
                    <div className="password">
                        <GoPasskeyFill/>
                        <input type="password" placeholder="Password" name="" id="" />
                    </div>
                    <a href="">Forgot Password?</a>
                    <div className="btn-container">
                        <button className="btn1">Sign In</button>
                        <p>OR</p>
                        <button className="btn2">
                            <BiLogoApple/>
                            Sign in with Apple
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;