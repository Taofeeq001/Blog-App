import React, { useEffect, useState } from "react";
import './Body.css'
// import Trendingprops from "./Trendingprops";

const Body=()=>{
    const [news, setNews] = useState([]);
    const fetchNews = async () =>{
        const base_url = `https://blog-api-8337.onrender.com/`
        try {
            await fetch(base_url, {mode:'no-cors'}).then(res=> res.json())
            .then(data=> setNews(data))
        } catch (error) {
            // console.log(error)
        }
    }
    useEffect(()=>{
        fetchNews()
    }, [])

    return(
        <div className="body">
            <div className="trending-news">
                <h1>TRENDING NEWS</h1>
                <div className="trend">
                    <div className="internation-news">
                        {
                            news.map((list, index)=>{
                                return(
                                    <div key={index} className="trend-top">
                                        <a href={`/posts/${list.title}`}><img className="trend-img" src={`https://blog-api-8337.onrender.com/${list.cover_img}`} alt="" /></a>
                                        <a href={`/posts/${list.title}`}><h2>{list.title}</h2></a>
                                        <a href={`/posts/${list.title}`}>{list.summary}</a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Body;