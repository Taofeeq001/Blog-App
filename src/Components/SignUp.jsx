import React, { useState } from "react";
import './SignUp.css'
import { Navigate } from "react-router-dom";

const SignUP=()=>{
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
            alert('First Name required')
        }
        else if(!surname){
            alert('surname required')
        }
        else if(!username || !password){
            alert('Username and Password is highly required')
        }
        else if (password !== confirmPassword){
            alert("The password inputed does not match, Please recheck!")
        }
        else if(name && surname && username && password===confirmPassword){
            setIsClick(true)
        }
        const base_url = `https://blog-api-8337.onrender.com/register`
        try {
            const submitForm =async()=>{
                const res = await fetch(base_url, {
                    method: 'POST',
                    headers:{"content-type": "application/json"},
                    body: JSON.stringify({username, password})
                })
                if(res.ok){
                    alert("Login successful. Proceed to Login")
                    setRedirect(true)
                    setIsClick(false)
                }
            }
            submitForm()
        } catch (error) {
            setError(true);
            setErrorMessage(error)
            setIsClick(true)
        }
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
                        <a href="./signin"><button>Have and Account</button></a>
                    </div>
                </div>
                <form onSubmit={handleSubmit} action="">
                    <div className="top-name">
                        <div className="column">
                            <label htmlFor="">First Name</label>
                            <input type="text" 
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
                            <p>I agree to the <span><u>Terms and Conditions</u></span></p>
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
export default SignUP;
