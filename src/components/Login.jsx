import React, { useState } from 'react'
import "./Login.css"


export const Login = () => {
    const [Action,setAction] = useState("login");

  return (
    <div className='container'>
        <div className="logo">
            <a href="https://aimedlabs.com/"> <img src="https://aimedlabs.com/logo1.svg" alt="" /></a>
        </div>
        <div className='header'>
            <div className='login'>{Action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
           
            <div className='input'>
               <img src="data:image/png;base64,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" alt="" />
                <input type="email" placeholder='Email' />
            </div> 
            <div className='input'>
                <img src="data:image/png;base64,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" alt="" />
                <input type="password" placeholder='Password' />

            </div>
        </div>
        {Action ==="sign up" ? < div></div> :   <span> forget password ?<a href="https://aimedlabs.com/"> click here !</a></span>}
       
        <div className="sub">

            <div className= {Action ==="login"? "submit gray":"submit" } onClick={()=>{
                setAction("sign up")
            }}>Sign up</div>
            <div className={Action ==="sign up"? "submit gray":"submit" } onClick={()=>{
                setAction("login")} }> Login</div>
            
        </div>

    </div>
  )
}
