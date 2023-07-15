import React from "react";

const Trendingprops=(props)=>{
    return(
        <div className={props.class}>
            <img src={props.image} alt="" />
            <a href="">{props.link1}</a>
            <a href="">{props.link2}</a>
            <a href="">{props.link3}</a>
            <a href="">{props.more}</a>
        </div>
    )    
}
export default Trendingprops;