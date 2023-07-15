import React from "react";
import './Settings.css';
import Aside from "../Dashboard/Dash/Aside";


const Settings=()=>{
    return(
        <div className="settings-board">
            <div className="settingsboard-container">
                <Aside/>
                <div className='settings-container'>
                    <div>
                        <h2>Account Details</h2>
                        <div>
                            <a href="">Change password</a>
                            <a href="">Edit Account</a>
                        </div>
                    </div>
                    <div>
                        <p>Name: </p>
                        <p>Email:</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Settings;