import React from 'react';
import './NewsBoard.css'
import Aside from '../Dashboard/Dash/Aside';
// import '../Dashboard/Dashboard.css'
import SportUpdate from '../Dashboard/Dash/SportUpdate';

const NewsBoard=()=>{
    return(
        <div className='news-board'>
            <div className='newsboard-container'>
                <Aside/>
                <div className='news-container'></div>
                <SportUpdate/>
            </div>
        </div>
    )
}
export default NewsBoard;