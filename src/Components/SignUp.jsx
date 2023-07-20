import React, { useEffect, useState } from "react";
import './SignUp.css'
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp=()=>{
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setComfirmPassword] = useState("");
    const [error, setError] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isClick, setIsClick] = useState(false)


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name){
            // alert('First Name required')
            setError(true)
        }
        else if(!surname){
            alert('surname required')
        }
        else if(!username || !password){
            alert('Username and Password is highly required')
        }
        else if (password !== confirmPassword){
            err('Password does not align!')
            setError(true)
            setRedirect(false)
        }
        else if(name && surname && username && password===confirmPassword){
            setIsClick(true)
        
        const base_url = `https://blog-api-8337.onrender.com/register`
        try {
        
                const submitForm =async()=>{
                    const res = await fetch(base_url, {
                        method: 'POST',
                        headers:{"content-type": "application/json"},
                        body: JSON.stringify({username, password})
                    })
                    if (res.ok){
                        setError(false)
                        setRedirect(true)
                        setIsClick(false)
                        notify("Successfully signed up")
                    }
                }

                submitForm()
        } catch (error) {
            setError(true);
            setErrorMessage(error)
            setIsClick(true)
        }

    }
    }
    const notify =(msg)=>{
        toast.success(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const err =(msg)=>{
        toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    if(redirect){
        return <Navigate to={'/signin'}/>
    }
    
    return(
        <div className="signup">
            <main>
                <div className="left">
                    <h1>INFORMATION</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur  id, nostrum, temporibus nemo aut earum et aliquam quasi obcaecati assumenda ea consequatur rem culpa quibusdam eos eligendi. Esse doloribus quas, natus dolor laudantium cum quasi illum modi? Aliquid eveniet, obcaecati natus rem totam fugit iure culpa. Quisquam vel distinctio eum repellendus vero corrupti. Neque repellat dicta laboriosam iusto, laborum asperiores maxime accusantium quia fugiat. Culpa, voluptatibus saepe in nihil illo eveniet quos quae totam unde fugiat. Aut, quae. Quae nam doloremque, laborum id enim eos eum voluptatibus porro sunt quis voluptates dolores iste?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptas ab neque omnis quis blanditiis minus veniam atque, aut incidunt alias nam obcaecati sequi. Nisi atque ab deleniti dolore, libero reprehenderit beatae provident nam esse rem explicabo, iusto nihil dolor.</p>
                    <div>
                        <a href="./signin"><button className="button1">Have and Account</button></a>
                    </div>
                </div>
                <form className="signup-form" onSubmit={handleSubmit} action="">
                    <div className="top-name">
                        <div className="column">
                            <label htmlFor="">First Name</label>
                            <input className={error? "borderError":"borderSub"} type="text" 
                                value={name} 
                                onChange={event=> setName(event.target.value)}
                                name="first name" 
                            />
                        </div>
                        <div className="column">
                            <label htmlFor="">Last Name</label>
                            <input type="text"
                            value={surname} 
                            onChange={event=> setSurname(event.target.value)}
                            name="Surname"  />
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="b-info1">
                            <div className="column">
                                <label htmlFor="">Your Email</label>
                                <input type="email"
                                value={username} 
                                onChange={event=> setUsername(event.target.value)}
                                name="User name"  />
                            </div>
                            <div className="b-info1">
                                <div className="column">
                                    <label htmlFor="">Password</label>
                                    <input type="password"
                                    value={password} 
                                    onChange={event=> setPassword(event.target.value)}
                                    name="password"  />
                                </div>
                                <div className="column">
                                    <label htmlFor="">Confirm Password</label>
                                    <input type="password"
                                    value={confirmPassword} 
                                    onChange={event=> setComfirmPassword(event.target.value)}
                                    name="confirm password"  />
                                </div>
                            </div>
                        </div>
                        <div className="b-info2">
                            <input type="checkbox" name="" id="" />
                            <p>I agree to the <span><a style={{color:'blue'}} href="">Terms and Conditions</a></span></p>
                        </div>
                    </div>
                    <div className="reg">
                        <button className={isClick? "btn-after":'button1'} type="submit">{isClick? "Registering":"Register"}</button>
                    </div>
                </form>
            </main>
        </div>
    )
}
export default SignUp;
