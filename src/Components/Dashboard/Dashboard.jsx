import React from "react";
import './Dashboard.css'
import Aside from "./DashboardItems/Aside";

const Dashboard = ()=>{
    return(
        <div className="dashboard">
            <div className="dashboard-content">
                <Aside/>
                <div className="dashboardcenter">
                    <h1>Dashboard</h1>
                </div>
                <div style={{backgroundColor:'white'}}><h3>Comments and Highlight page</h3></div>
            </div>
        </div>
    )
}
export default Dashboard;