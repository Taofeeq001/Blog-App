import React, { useState } from "react";
import './Dashboard.css';
import Aside from "./Aside";
import SportUpdate from "./SportUpdate";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiLogOutCircle, BiSolidDashboard } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { MdOutlineForum, MdSportsScore } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";



const Dashboard=()=>{
    const [toggle, setToggle] = useState(false)
    const handleToggle=()=>{
        setToggle(!toggle)
    }
    return(
        <div className="board">
            <div className="board-container">
                {/* Aside Section */}
                <Aside/>
                <div className="dashboard-center">
                    <div className={toggle? "mobileSub":"mobile-asid"}>
                        <div className="asid-top">
                            <a href="" className="logo">Logo</a>
                        </div>
                        <div className="menu-items2">
                            <a className="items" href="/dashboard">
                                <BiSolidDashboard/>
                                <h4 className="list">Dashboard</h4>
                            </a>
                            <a  className="items" href="/news">
                                <BsNewspaper/>
                                <h4 className="list">News</h4>
                            </a>
                            <a className="items" href="/sports">
                                <MdSportsScore/>
                                <h4 className="list">Sport</h4>
                            </a>
                            <a className="items" href="/forum">
                                <MdOutlineForum/>
                                <h4 className="list">Sport Forum</h4>
                            </a>
                            <a className="items" href="/settings">
                                <IoMdSettings/>
                                <h4 className="list">Settings</h4>
                            </a>
                            <a className="items" href="/signin">
                                <BiLogOutCircle/>
                                <h4 className="list">Log Out</h4>
                            </a>
                        </div>
                    </div>
                    
                    <div className="dashboard-view">
                        <div className="dash-view">
                            <div className="dash-viewTop">
                                <h1>Welcome user to Your dashboard</h1>
                            </div>
                            <RxHamburgerMenu onClick={handleToggle} className="mobile"/>
                        </div>
                    </div>
                </div>                  
                
                {/* import the sport update */}
                <SportUpdate/>
                
                
            </div>
        </div>
    )
}
export default Dashboard;