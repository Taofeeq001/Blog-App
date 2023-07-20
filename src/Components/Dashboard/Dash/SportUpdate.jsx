import React, { useState } from "react";
import './SportUpdate.css'
import susan from '../../../Images/susanpix.jpg'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'


const SportUpdate=()=>{
    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)
    return(
        <div className="update-container">
            <div className="update-title">
                <h1>Sports Updates</h1>
            </div>
            <div className="sportupdate">
                <div className="sportupdatesub">
                    <img src={susan} alt="" />
                    <div>
                        <h3>Susan Kemon </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <p> Assumenda, quis. Voluptate eaque libero explicabo nobis odit consequuntur quos. Libero similique illo incidunt. Fugit error consectetur, illum natus molestiae nobis eligendi.</p>
                <div className="reaction">
                    <button onClick={()=> setLike(like +1)} className="like"><AiOutlineLike/> {like}</button>
                    <button onClick={()=> setDislike(dislike +1)} className="dislike"><AiOutlineDislike/> {dislike}</button>
                </div>
            </div>
            <div className="sportupdate">
                <div className="sportupdatesub">
                    <img src={susan} alt="" />
                    <div>
                        <h3>Susan Kemon </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <p> Assumenda, quis. Voluptate eaque libero explicabo nobis odit consequuntur quos. Libero similique illo incidunt. Fugit error consectetur, illum natus molestiae nobis eligendi.</p>
                <div className="reaction">
                    <button onClick={()=> setLike(like +1)} className="like"><AiOutlineLike/> {like}</button>
                    <button onClick={()=> setDislike(dislike +1)} className="dislike"><AiOutlineDislike/> {dislike}</button>
                </div>
            </div>
            <div className="sportupdate">
                <div className="sportupdatesub">
                    <img src={susan} alt="" />
                    <div>
                        <h3>Susan Kemon </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <p> Assumenda, quis. Voluptate eaque libero explicabo nobis odit consequuntur quos. Libero similique illo incidunt. Fugit error consectetur, illum natus molestiae nobis eligendi.</p>
                <div className="reaction">
                    <button className="like"><AiOutlineLike/> 0</button>
                    <button className="dislike"><AiOutlineDislike/> 0</button>
                </div>
            </div>
            <div className="sportupdate">
                <div className="sportupdatesub">
                    <img src={susan} alt="" />
                    <div>
                        <h3>Susan Kemon </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <p> Assumenda, quis. Voluptate eaque libero explicabo nobis odit consequuntur quos. Libero similique illo incidunt. Fugit error consectetur, illum natus molestiae nobis eligendi.</p>
                <div className="reaction">
                    <button className="like"><AiOutlineLike/> 0</button>
                    <button className="dislike"><AiOutlineDislike/> 0</button>
                </div>
            </div>
            <div className="sportupdate">
                <div className="sportupdatesub">
                    <img src={susan} alt="" />
                    <div>
                        <h3>Susan Kemon </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <p> Assumenda, quis. Voluptate eaque libero explicabo nobis odit consequuntur quos. Libero similique illo incidunt. Fugit error consectetur, illum natus molestiae nobis eligendi.</p>
                <div className="reaction">
                    <button className="like"><AiOutlineLike/> 0</button>
                    <button className="dislike"><AiOutlineDislike/> 0</button>
                </div>
            </div>
            <div className="sportupdate">
                <div className="sportupdatesub">
                    <img src={susan} alt="" />
                    <div>
                        <h3>Susan Kemon </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <p> Assumenda, quis. Voluptate eaque libero explicabo nobis odit consequuntur quos. Libero similique illo incidunt. Fugit error consectetur, illum natus molestiae nobis eligendi.</p>
                <div className="reaction">
                    <button className="like"><AiOutlineLike/> 0</button>
                    <button className="dislike"><AiOutlineDislike/> 0</button>
                </div>
            </div>
            <div className="sportupdate">
                <div className="sportupdatesub">
                    <img src={susan} alt="" />
                    <div>
                        <h3>Susan Kemon </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <p> Assumenda, quis. Voluptate eaque libero explicabo nobis odit consequuntur quos. Libero similique illo incidunt. Fugit error consectetur, illum natus molestiae nobis eligendi.</p>
                <div className="reaction">
                    <button className="like"><AiOutlineLike/> 0</button>
                    <button className="dislike"><AiOutlineDislike/> 0</button>
                </div>
            </div>
        </div>
    )
}
export default SportUpdate;