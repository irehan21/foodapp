import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
const LoginPopUp = ({setshowLogin}) => {
    
    const [currState, setcurrState] = useState("Login")
  return (
    <div className='Login-popup'>
      <form className='Login-popup-container' action="">
        <div className="Login-popup-title">
            <h2>{currState}</h2>
            <img  onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="Login-popup-inputs">
            {currState==="Login"?<></> : <input type="text" placeholder='your name' required />}
            <input type="text" placeholder='your email' required />
            <input type="password" placeholder='password' required />
        </div>
        <button>{currState==="Sign Up"? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        { 
            currState==="Login"
            ? <p >Create a new account? <span onClick={()=> setcurrState("Sign Up")}>Click here</span></p>
            : <p>Already have an account? <span onClick={()=> setcurrState("Login")}>Login here</span></p>

        }
      </form>
    </div>
  )
}

export default LoginPopUp
