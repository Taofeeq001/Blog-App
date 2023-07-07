import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Post.css'

const Post= () => {
    const [post, setPost]= useState({});
    const {id} = useParams();
    const fetchData = async()=>{
        const base_url = `https://blog-api-8337.onrender.com/${id}`
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
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        <h1>{post.title}</h1>
                        <em style={{border:'1px solid black', padding:'10px', backgroundColor:'green', borderRadius:'10px', color:'white', fontWeight:700}}>Views: {post.views}</em>
                    </div>
                    <em>Created at: {post.createdAt}</em>
                    <p>{post.title}</p>
                    <div dangerouslySetInnerHTML={{__html: post.content}}></div>
                    <b>Post Summary: {post.summary}</b>
                </div>
            }
        </div>
    )
}
export default Post;