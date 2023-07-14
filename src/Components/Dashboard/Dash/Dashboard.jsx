import React, { useState } from "react";
import './Dashboard.css';
import Aside from "./Aside";
import SportUpdate from "./SportUpdate";



const Dashboard=()=>{
    const [toggle, setToggle] = useState(false)
    return(
        <div className="board">
            <div className="board-container">
                {/* Aside Section */}
                <Aside/>
                <div className="dashboard-center">
                    <div className="dashboard-view">
                        <div className="dash-viewTop">
                            <h1>Welcome user to Your dashboard</h1>
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