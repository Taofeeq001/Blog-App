import React, { useState } from "react";
import './CreatePost.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Navigate} from 'react-router-dom'

const CreatePost=()=>{
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    
    
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
        const data = new FormData();
        data.set("title", title);
        data.set("summary", summary);
        data.set("content", content);
        data.set('file', file[0]);
        e.preventDefault()
        if(!title && !summary && !content){
            alert('pls input the required fields')
        }
        else if(title && summary && content ){
            const base_url = `https://blog-api-8337.onrender.com/create-post`
            try {
                setLoading(true)
                const postData =async()=>{
                    const response = await fetch(base_url,{
                        method:'POST',
                        headers:{'content-type': 'application/json'},
                        body: JSON.stringify(data),
                        credentials: "include",
                        mode:'cors'
                    })
                    if(response.ok){
                        alert('Post successfully')
                        setRedirect(true)
                        setLoading(false)
                    }else{
                        const {message} = response;
                        setError(true)
                        setErrorMessage("Error: " + message)
                        setLoading(false)

                    }
                }
                postData()
                
            } catch (error) {
                setError(true)
                // console.log(error)

            }
        }
        
      }

      if(redirect){
        return<Navigate to={'/allpost'}/>
      }

    return(
        
        <form className="upload-post" onSubmit={uploadPost}>
            <h1>Create Your post Here</h1>
            <p>{errorMessage}</p>
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
                name="file"
                value={file}
                onChange={(event) => setFile(event.target.value)}
                id="" 
            />
            <ReactQuill
                className="message"
                formats={formats}
                modules={modules}
                value={content}
                onChange={newContent => setContent(newContent)}
                theme="snow"
                name='content'
            />
            <div className="btn">
                <button type="submit">{loading? "Creating Post......":"Create Post"}</button>
            </div>

        </form>
    )
}
export default CreatePost;