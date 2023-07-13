import React, { useState } from "react";
import './Aside.css'
import {RxHamburgerMenu} from 'react-icons/rx'
import {BiSolidDashboard} from 'react-icons/bi';
import {BsNewspaper} from 'react-icons/bs';
import {MdSportsScore, MdOutlineForum} from 'react-icons/md'
import {BiLogOutCircle} from 'react-icons/bi'
import {IoMdSettings} from 'react-icons/io'
import {FiX} from 'react-icons/fi'

const Aside=()=>{
    const [click, setClick] = useState(false);
    const [active, setActive] = useState(false)
    const buttonClick = ()=>{
        setClick(!click)
    }
    // const handleActive=(e)=>{
    //     e.preventDefault();
    //     setActive(!active)
    // }
    return(
        <nav className={click? "nav-sub":'nav'}>
            <div className="destop-nav">
                <div className="asid-top">
                    <a href="" className={click? "log":"logo"}>Logo</a>
                    <button onClick={buttonClick} className="aside-btn">
                        {click? <FiX className="toggle"/>:<RxHamburgerMenu className="toggle"/>}
                    </button>
                </div>
                <div className="menu-items">
                    <a className="items" href="/dashboard">
                        <BiSolidDashboard/>
                        <h4 className={click? "list-sub":"list"}>Dashboard</h4>
                    </a>
                    <a  className="items" href="/news">
                        <BsNewspaper/>
                        <h4 className={click? "list-sub":"list"}>News</h4>
                    </a>
                    <a className="items" href="/sports">
                        <MdSportsScore/>
                        <h4 className={click? "list-sub":"list"}>Sport</h4>
                    </a>
                    <a className="items" href="/forum">
                        <MdOutlineForum/>
                        <h4 className={click? "list-sub":"list"}>Sport Forum</h4>
                    </a>
                    <a className="items" href="/settings">
                        <IoMdSettings/>
                        <h4 className={click? "list-sub":"list"}>Settings</h4>
                    </a>
                    <a className="items" href="/signin">
                        <BiLogOutCircle/>
                        <h4 className={click? "list-sub":"list"}>Log Out</h4>
                    </a>
                </div>
            </div>
            <div className="mobile-nav">
                <div className="asid-top">
                    <a href="" className={click? "log":"logo"}>Logo</a>
                    {/* <button onClick={buttonClick} className="aside-btn">
                        {click? <FiX className="toggle"/>:<RxHamburgerMenu className="toggle"/>}
                    </button> */}
                </div>
                <div className="menu-items">
                    <a className="items" href="/dashboard">
                        <BiSolidDashboard/>
                        <h4 className={click? "list-sub":"list"}>Dashboard</h4>
                    </a>
                    <a  className="items" href="/news">
                        <BsNewspaper/>
                        <h4 className={click? "list-sub":"list"}>News</h4>
                    </a>
                    <a className="items" href="/sports">
                        <MdSportsScore/>
                        <h4 className={click? "list-sub":"list"}>Sport</h4>
                    </a>
                    <a className="items" href="/forum">
                        <MdOutlineForum/>
                        <h4 className={click? "list-sub":"list"}>Sport Forum</h4>
                    </a>
                    <a className="items" href="/settings">
                        <IoMdSettings/>
                        <h4 className={click? "list-sub":"list"}>Settings</h4>
                    </a>
                    <a className="items" href="/signin">
                        <BiLogOutCircle/>
                        <h4 className={click? "list-sub":"list"}>Log Out</h4>
                    </a>
                </div>
            </div>
        </nav>        
    )
}
export default Aside;