import React from 'react';
import './Sport.css'
import Aside from '../Dashboard/Dash/Aside';
// import '../Dashboard/Dashboard.css'
import SportUpdate from '../Dashboard/Dash/SportUpdate';

const Sport=()=>{
    return(
        <div className='sport-board'>
            <div className='sportboard-container'>
                <Aside/>
                <div className='sport-container'></div>
                <SportUpdate/>
            </div>
        </div>
    )
}
export default Sport;