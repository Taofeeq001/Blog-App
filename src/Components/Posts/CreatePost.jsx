import React, { useState } from "react";
import './CreatePost.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Navigate} from 'react-router-dom'

const CreatePost=()=>{
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [cover_img, setCover_Img] = useState('');
    const [redirect, setRedirect] = useState(false)
    const quilChange=()=>{
        setContent(content)
    }
    
    const modules = {
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ size: [] }],
          [{ font: [] }],
          [{ align: ["right", "center", "justify"] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          [{ color: ["red", "#785412"] }],
          [{ background: ["red", "#785412"] }]
        ]
      };
    
      const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "link",
        "color",
        "image",
        "background",
        "align",
        "size",
        "font"
      ];
      const uploadPost = (e)=>{
        e.preventDefault()
        if(!title && !summary && !content){
            alert('pls input the required fields')
        }
        const base_url = `http://blog-api-8337.onrender.com/create-post/`
        try {
            const postData =async()=>{
                const response = await fetch(base_url,{
                    body: JSON.stringify({title, summary, content, cover_img}),
                    headers:{'content-type': 'application/json'},
                    method:'POST'
                })
                if(response.ok){
                    alert('Post successfully')
                    setRedirect(true)
                }
            }
            postData()
            
        } catch (error) {
            
        }
      }

    return(
        
        <form className="upload-post" onSubmit={uploadPost}>
            <h1>Create Your post Here</h1>
            <div className="det">
                <h2>Heading</h2>
                <input className="title" type="text" 
                    name="title" 
                    value={title} 
                    onChange={event=> setTitle(event.target.value)}  
                />
            </div>
            <div className="det">
                <h2>Summary</h2>
                <input className="summary" type="text" 
                    name="summary" 
                    value={summary} 
                    onChange={event => setSummary(event.target.value)}  
                />
            </div>
            <input
                type="file" 
                name="cover_img"
                value={cover_img}
                onChange={(event) => setCover_Img(event.target.value)}
                id="" 
            />
            <ReactQuill
                className="message"
                formats={formats}
                modules={modules}
                value={content}
                onChange={quilChange}
                theme="snow"
                name='content'
            />
            <div className="btn">
                <button type="submit">Create Post</button>
            </div>

        </form>
    )
}
export default CreatePost;