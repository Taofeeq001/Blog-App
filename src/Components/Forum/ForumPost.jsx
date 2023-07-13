import React from "react";
import ReactQuill from "react-quill";


const ForumPost=()=>{
    return(
        <div style={{backgroundColor:'brown', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', width:'100%', height:'100vh'}}>
            <div style={{width:'50%', backgroundColor:'white', display:'flex', flexDirection:'column', border:'1px solid black', height:'60vh'}}>
                <h1>Upload a post to the forum here</h1>
                <div>
                    <h2>Title</h2>
                    <input type="text" />
                </div>
                <div>
                    <h2>Summary</h2>
                    <input type="text" />
                </div>
                <ReactQuill style={{height:'10vh'}}/>
                <div>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}
export default ForumPost;