import React from "react";
import './ForumPost.css'
import ReactQuill from "react-quill";


const ForumPost=()=>{
    return(
        <div className="fpost">
            <div className="fpost-body">
                <h1>Upload a post to the forum here</h1>
                <div>
                    <h2>Title</h2>
                    <input type="text" />
                </div>
                <div>
                    <h2>Summary</h2>
                    <input type="text" />
                </div>
                <div>
                    <ReactQuill/>
                </div>
                <div className="attest">
                    <input type="checkbox" name="" id="" />
                    <p>Note: User are liable and accountable for any content post here</p>
                </div>
                <div className="forum-btn">
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}
export default ForumPost;