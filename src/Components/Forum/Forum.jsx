import React from "react";
import './Forum.css';
import Aside from "../Dashboard/Dash/Aside";
import { FiPlus, FiSearch } from "react-icons/fi";

const Forum=()=>{
    return(
        <div className='forum-board'>
            <div className='forumboard-container'>
                <Aside/>
                <div className='forum-container'>
                    <div className="forum-top">
                        <div className="btns">
                            <button className="newpost"> <FiPlus style={{width:'20px', height:'20px'}}/> New Post</button>
                            <button className="toppost">Top Posts</button>
                            <button className="newpost">Most Read</button>
                            <button className="toppost"><a href="/forumpost">Upload a post here</a></button>
                        </div>
                        <div className="forum-search">
                            <input type="search" name="" id="" placeholder="Search here" />
                            <FiSearch/>
                        </div>
                    </div>
                    <div className="forum-options">
                        <h4>Showing:</h4>
                        <select name="" id="">
                            <option value="">All</option>
                            <option value="">XYZ</option>
                            <option value="">ABC</option>
                            <option value="">EFG</option>
                        </select>
                    </div>
                    {/* <div className="forumdetails">
                        <div className="subject-author">
                            <h2>Subject/Author</h2>
                            <p>What do you understand by the word Sport Administration</p>
                        </div>
                        <div className="lastPost">
                            <h4>Updated at</h4>
                            32 Mins ago
                        </div>
                        <div className="Read">
                            <h4>No. of read</h4>
                            0
                        </div>
                    </div> */}
                    <table className="forumdetails">
                        <tr>
                            <th className="subject-author">Subject/Author</th>
                            <th className="lastpost">Updated at</th>
                            <th className="Read">Read</th>
                        </tr>
                        <tr>
                            <td>What do you understand</td>
                            <td>32 mins ago</td>
                            <td>0</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Forum;