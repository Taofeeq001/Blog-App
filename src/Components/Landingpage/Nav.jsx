import React, { useState } from "react";
import './Nav.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { FiX } from "react-icons/fi";

const Nav = ()=>{
    const [toggle, setToggle] = useState(false)
    return(
        <nav className="landing-nav">
            <div className="destop-nav">
                <h3>SportEnTrust</h3>
                <div className="menu">
                    <a href="">Home</a>
                    <a href="">News</a>
                    <a href="">Sports</a>
                    <a href="">Weather News</a>
                    <a href="">Politics</a>
                    <a href="">Sport Forum</a>
                    <a href="">Movies</a>
                    <div className="nav-log">
                        <button><a style={{color:'white', fontWeight:'bold'}} href="/signin">Login</a></button>
                        <button><a style={{color:'white', fontWeight:'bold'}} href="/signup">Sign UP</a></button>
                    </div>
                </div>
                <button onClick={()=> setToggle(!toggle)} className="mobile-toggle">
                    {toggle? <FiX/>:<RxHamburgerMenu/>}
                </button>
            </div>
            <div className={toggle? "mobile-sub":"mobile-menu"}>
                <a href="">Home</a>
                <a href="">Sports</a>
                <a href="">News</a>
                <a href="">Weather News</a>
                <a href="">Politics</a>
                <a href="">Sport Forum</a>
                <a href="">Movies</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    )
}
export default Nav;