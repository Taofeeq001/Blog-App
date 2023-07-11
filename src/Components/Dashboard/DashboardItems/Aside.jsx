import React, { useState, useEffect } from "react";
import './Aside.css'
import {RxHamburgerMenu} from 'react-icons/rx';
import { tabs1 } from "./DashData";
import { tabs2 } from "./DashData";

const Aside = ()=>{
    const [isActive, setIsActive] = useState(0);
    const [isActive2, setIsActive2] = useState(0)
    return(
        <div className="aside">
            <div className="aside-top">
                <h1>Image</h1>
                <RxHamburgerMenu className="hamburger"/>
            </div> 
            <div className="aside-content" >
                {
                    tabs1.map((tab, index)=>{
                        return(
                            <div key={index} onClick={()=> setIsActive(index)} className={isActive===index? "active":"dash-item"}>
                                <span>{tab.icon}</span>
                                <p>{tab.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Aside;