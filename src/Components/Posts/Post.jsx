import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Post.css';
import {formatISO9075} from 'date-fns'

const Post= () => {
    const [post, setPost]= useState({});
    const {title} = useParams();
    
    const fetchData = async()=>{
        const base_url = `https://blog-api-8337.onrender.com/${title}`
        try {
            await fetch(base_url)
            .then((res)=> res.json())
            .then(data => setPost(data))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchData()
    }, [])
    
    
    return(
        <div className="singlepost">
            {
                <div className="post-content">
                    <div className="singlepost-top" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <h1>{post.title}</h1>
                        <div className="editpost">
                            <button>Edit Post</button>
                            <em style={{border:'1px solid black', padding:'10px', backgroundColor:'green', borderRadius:'10px', color:'white', fontWeight:700}}>Views: {post.views}</em>
                        </div>
                    </div>
                    {/* <em>Created at:{formatISO9075(new Date(post.createdAt))}</em> */}
                    <img src={`https://blog-api-8337.onrender.com/${post.cover_img}`} alt="" />
                    <div dangerouslySetInnerHTML={{__html: post.content}}></div>
                    <b>Post Summary: {post.summary}</b>
                </div>
            }
        </div>
    )
}
export default Post;