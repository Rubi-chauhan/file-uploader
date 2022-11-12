import React from "react"
import googleImage from '../../assests/GoogleImage.png'
import  "./LoginPage.css"

export default function LoginPage() {

  const googleLogin = () => {
    window.open("http://localhost:3000/upload", "_self");
}

  return (
    <div className='loginPage'>
      <div className="LoginForm">    
        <h1>Sign In Using GOOGLE </h1>
      </div>
        <div className='googleContainer'>
                <img src={googleImage} alt="Google Icon" /> 
                <p onClick={googleLogin}>Login With Google</p>
        </div>
    </div>
  )
}




