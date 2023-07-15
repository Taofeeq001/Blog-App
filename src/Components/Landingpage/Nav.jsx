import React from "react";
import './Nav.css';

const Nav = ()=>{
    return(
        <nav className="landing-nav">
            <h3>SportEnTrust</h3>
            <div className="menu">
                <a href="">Home</a>
                <a href="">Sports</a>
                <a href="">News</a>
                <a href="">Weather News</a>
                <a href="">Politics</a>
                <a href="">Sport Forum</a>
                <a href="">Movies</a>
                <div className="nav-log">
                    <button><a style={{color:'white', fontWeight:'bold'}} href="/signin">Login</a></button>
                    <button><a style={{color:'white', fontWeight:'bold'}} href="/signup">Sign UP</a></button>
                </div>
            </div>
            <div className="mobile-menu">
                <a href="">Home</a>
                <a href="">Sports</a>
                <a href="">News</a>
                <a href="">Weather News</a>
                <a href="">Politics</a>
                <a href="">Sport Forum</a>
                <a href="">Movies</a>
                <div>
                    <button><a href="/login">Login</a></button>
                </div>
            </div>
        </nav>
    )
}
export default Nav;