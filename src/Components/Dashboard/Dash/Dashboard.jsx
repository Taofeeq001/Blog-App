import React from "react";
import './Dashboard.css';
import Aside from "./Aside";
import SportUpdate from "./SportUpdate";



const Dashboard=()=>{
    return(
        <div className="board">
            <div className="board-container">
                {/* Aside Section */}
                <Aside/>
                <div className="dashboard-center">
                    <h1>Welcome user to Your dashboard</h1>
                    <h1>Welcome user to Your dashboard</h1>
                    <h1>Welcome user to Your dashboard</h1>
                    <h1>Welcome user to Your dashboard</h1>
                    <h1>Welcome user to Your dashboard</h1>
                    <h1>Welcome user to Your dashboard</h1>
                    <h1>Welcome user to Your dashboard</h1>
                    <h1>Welcome user to Your dashboard</h1>
                    <h1>Welcome user to Your dashboard</h1>
                </div>                  
                
                {/* import the sport update */}
                <SportUpdate/>
                
                
            </div>
        </div>
    )
}
export default Dashboard;