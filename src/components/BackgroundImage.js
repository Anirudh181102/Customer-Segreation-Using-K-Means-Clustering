import React from 'react'
import imageee from '../assets/2-1.jpg'
import "./BackgroundImage.css"

export default function BackgroundImage() {
  return (
    <div className='main'>
      <img className='imag' src={imageee} alt='hereee' />

      <div className='Opening'>
        <b>Thapar-RBS</b>
      </div>

      <div className='cover'>

        <h1 className='welcomeBack'>WELCOME BACK</h1>

        <p className='welcomeLine'>Welcome back! Please Enter Your Details</p>
        
        <div className='email-word'>
          <h6 >Email</h6>
        </div>
        <input type="text" placeholder='username'/>
        <br />
        <div className='password-word'>
          <h6 >Password</h6>
        </div>
        <input type="password" placeholder='password' />
        <br />
        
        <div className='remember-and-forgot' >
          <input type="checkbox" className='checkbox' name="remember"/>
          <label htmlFor="remember" className='label'>Remember me</label>
          <button type="button" className='forgot'>Forgot Password</button>
        </div>
        
        <button type="button" className='submit' >Sign In</button>
      
      </div>
    </div>
  )
}
