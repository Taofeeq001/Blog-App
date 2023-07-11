import React from "react";
import './Dashboard.css'
import Aside from "./DashboardItems/Aside";
import SportUpdate from "./DashUpdate/SportUpdate";

const Dashboard = ()=>{
    return(
        <div className="dashboard">
            <div className="dashboard-content">
                <Aside/>
                <div className="dashboardcenter">
                    <h1>Dashboard</h1>
                </div>
                <div className="update" >
                    <h1>Trending Sports</h1>
                    <SportUpdate/>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;