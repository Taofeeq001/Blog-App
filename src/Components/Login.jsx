import React from "react";
import './Login.css'

const Login =()=>{
    return(
        <div>
            <main>
                <div>
                    <h1>Sign In</h1>
                    <p>Login and See what we have for you</p>
                </div>
                <form action="">
                    <div>

                        <input type="text" placeholder="Email or Phone" />
                    </div>
                    <div>
                        <input type="password" name="" id="" />
                    </div>
                    <a href="">Forgot Password?</a>
                    <div>
                        <button>Sign In</button>
                    </div>
                    <p>OR</p>
                    <div>
                        <button>Sign in with Apple</button>
                    </div>
                </form>
            </main>
        </div>
    )
}
export default Login;