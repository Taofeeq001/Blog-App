import React from "react";
import './Settings.css';
import Aside from "../Dashboard/Dash/Aside";
import {PiPasswordDuotone} from 'react-icons/pi'
import {TbUserEdit} from 'react-icons/tb'
import {BiUserCircle} from 'react-icons/bi'


const Settings=()=>{
    return(
        <div className="settings-board">
            <div className="settingsboard-container">
                <Aside/>
                <div className='settings-container'>
                    <h1 style={{color:'green'}}>Hello, USER!</h1>
                        <BiUserCircle className="user-setting"/>
                    <div className="settings-details">
                        <h2>Account Details</h2>
                        <div className="account-reset">
                            <a style={{display:'flex',alignItems:'center'}} href="">Change password <PiPasswordDuotone/> </a>
                            <a style={{display:'flex',alignItems:'center'}} href="">Edit Account <TbUserEdit/></a>
                        </div>
                    </div>
                    <div className="setting-details">
                        <p>Name: user's Name </p>
                        <p>Email:  user's Email</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Settings;