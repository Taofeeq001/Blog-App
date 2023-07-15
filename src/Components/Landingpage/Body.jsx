import React from "react";
import './Body.css'
// import Trendingprops from "./Trendingprops";
import susan from '../../Images/susanpix.jpg'

const Body=()=>{
    return(
        <div className="body">
            <div className="trending-news">
                <h1>TRENDING NEWS</h1>
                <div className="trend">
                    {/* <Trendingprops
                        image={susan}
                        link1 = "click here to see more"
                        link2 = 'Another click will survice'
                        link3 = "another one "
                        more = 'click here'
                        class = 'one'
                    /> */}
                    <div className="internation-news">
                        <h2>International New</h2>
                        <div className="trend-top">
                            <img className="trend-img" src={susan} alt="" />
                            <a href=""> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quia!</a>
                        </div>
                        <div className="trend-list">
                            <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque sunt repellat vero quisquam laborum?</a>
                            <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque sunt repellat vero quisquam laborum?</a>
                            <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque sunt repellat vero quisquam laborum?</a>
                            <a href="">More International News</a>
                        </div>
                    </div>
                    <div className="internation-news">
                        <h2>Trade New</h2>
                        <div className="trend-top">
                            <img className="trend-img" src={susan} alt="" />
                            <a href=""> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quia!</a>
                        </div>
                        <div className="trend-list">
                            <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque sunt repellat vero quisquam laborum?</a>
                            <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque sunt repellat vero quisquam laborum?</a>
                            <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque sunt repellat vero quisquam laborum?</a>
                            <a href="">More International News</a>
                        </div>
                    </div>
                    <div className="internation-news">
                        <h2>National New</h2>
                        <div className="trend-top">
                            <img className="trend-img" src={susan} alt="" />
                            <a href=""> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quia!</a>
                        </div>
                        <div className="trend-list">
                            <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque sunt repellat vero quisquam laborum?</a>
                            <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque sunt repellat vero quisquam laborum?</a>
                            <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque sunt repellat vero quisquam laborum?</a>
                            <a href="">More International News</a>
                        </div>
                    </div>
                    {/* <div className="internation-news">
                        <h2>International New</h2>
                        <div>
                            <img className="trend-img" src={susan} alt="" />
                            <a href=""> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quia!</a>
                        </div>
                        <div>
                            <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque sunt repellat vero quisquam laborum?</a>
                            <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque sunt repellat vero quisquam laborum?</a>
                            <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque sunt repellat vero quisquam laborum?</a>
                            <a href="">More International News</a>
                        </div>
                    </div>
                    <div className="internation-news">
                        <h2>International New</h2>
                        <div>
                            <img className="trend-img" src={susan} alt="" />
                            <a href=""> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quia!</a>
                        </div>
                        <div>
                            <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque sunt repellat vero quisquam laborum?</a>
                            <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque sunt repellat vero quisquam laborum?</a>
                            <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque sunt repellat vero quisquam laborum?</a>
                            <a href="">More International News</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default Body;