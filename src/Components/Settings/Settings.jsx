import React from "react";
import './Settings.css';
import Aside from "../Dashboard/Dash/Aside";


const Settings=()=>{
    return(
        <div className="settings-board">
            <div className="settingsboard-container">
                <Aside/>
                <div className='settings-container'></div>
            </div>
        </div>
    )
}
export default Settings;