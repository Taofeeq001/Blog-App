import React, { useState, useEffect } from "react";
import './Aside.css'
import {RxHamburgerMenu} from 'react-icons/rx';
import {FiX} from 'react-icons/fi'
import { tabs1 } from "./DashData";
import { tabs2 } from "./DashData";

const Aside = ()=>{
    const [isActive, setIsActive] = useState(0);
    const [aside, setAside] = useState(false)

    const asideClick =()=>{
        setAside(!aside)
    }
    return(
        <div className={aside? "aside-sub":"aside"}>
            <div className="aside-top">
                <h1>Image</h1>
                <button onClick={asideClick} className= "hamburger">
                    {
                        aside? <FiX/>:<RxHamburgerMenu/>
                    }
                    
                </button>
            </div> 
            <div className="aside-content" >
                {
                    tabs1.map((tab, index)=>{
                        return(
                            <div key={index} onClick={()=> setIsActive(index)} 
                            className={`${isActive===index? "active":"dash-item"} ${aside? "aside-sub p": "dash-item"}`}>
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