import React, { useState } from "react";
import './Forum.css';
import Aside from "../Dashboard/Dash/Aside";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Data } from "./Data";


const Forum=()=>{
    const [search, setSearch] = useState("")
    const filteredSearch = Data.filter((filt)=>
        filt.topic.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        filt.author.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        
    )
    return(
        <div className='forum-board'>
            <div className='forumboard-container'>
                <Aside className="left"/>
                <div className='forum-container'>
                    <div className="forum-top">
                        <div className="btns">
                            <button className="newpost"> <FiPlus style={{width:'20px', height:'20px'}}/> New Post</button>
                            <button className="toppost">Top Posts</button>
                            <button className="newpost">Most Read</button>
                            <button className="toppost"><a href="/forumpost">Upload a post here</a></button>
                        </div>
                        <div className="forum-search">
                            <input type="search" 
                            name="search"
                            value={search}
                            onChange={event=> setSearch(event.target.value)} 
                            placeholder="Search here"
                             />
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
                    
                    <table className="forumdetails">
                        <tr className="row">
                            <th className="subject-author">Subject/Author</th>
                            <th className="lastpost">Updated at</th>
                            <th className="Read">Read</th>
                        </tr>
                        {
                            filteredSearch.map((dat, index)=>(
                            <tr className="row" key={index}>
                                <td className="author">
                                    <div>
                                        <b>{dat.topic}</b>
                                    </div>
                                    <div>
                                        {dat.summary}
                                    </div>
                                    <div>
                                        <p>By: {dat.author}</p>
                                    </div>
                                </td>
                                <td>{dat.posted_at}</td>
                                <td>{dat.Read}</td>
                            </tr>
                            ))
                        }
                        
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Forum;