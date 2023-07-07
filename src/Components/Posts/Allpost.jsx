import React, { useEffect, useState } from "react";
import './Allpost.css'

const Allpost=()=>{
    const [post, setPost] = useState([{}])
    
    const fetchData = async()=>{
        const base_url = `https://blog-api-8337.onrender.com/`
        try {
            await fetch(base_url)
            .then((res)=>res.json())
            .then(data=> setPost(data))
            
        } catch (error) {
            console.log(error)
        }
    }   
    useEffect(()=>{
        fetchData()
    }, [])
    return(
        <div className="body">
            <h1>All posts</h1>
            <div >
                {
                    post.map((post, index)=>{
                        return(
                            <div key={index} className="allpost">
                                <h1><a href={`/posts/${post._id}`}>{post.title}</a></h1>
                                <p><a href={`/posts/${post._id}`}>{post.summary}</a></p>
                                <img src={`https://blog-api-8337.onrender.com/${post.cover_img}`} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Allpost;