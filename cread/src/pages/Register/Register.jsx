import React from 'react';
import axios from 'axios';
import '../Login/Login.scss';
import './Register.scss';
import { FaFacebookF} from "react-icons/fa";
import {Link} from 'react-router-dom';
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import { useState } from 'react';
import swal from 'sweetalert';
import { ToastContainer } from 'react-toastify';
import { creatTost } from '../../utility/Toste';

const Register = () => {

  // state for form 

  const [ input , setInput ] = useState({
      name : '',
      email : '',
      userName : '',
      password : ''

  })

  

  // handle input

  const handleInput = (e) => {

    setInput((prev) => ({ ...prev , [e.target.name] : e.target.value}))
  }


  //  handle user registration


  const handleUserRegister = async (e) => {

    e.preventDefault();

    try {
      
      if ( !input.name || !input.email || !input.userName || !input.password  ) {
       
        swal("Warning", "All fields are required", "error");

        // creatTost('All fields are required');
        
      }else{
        await axios.post('http://localhost:5050/api/user/register', input ).then( res => {
          setInput((prev) => ({
            name : '' ,
            email : '' ,
            userName : '' ,
            password : ''
          }))

          swal("Success !", "Account has been created successfully !", {
            icon: "success"
          });

        });

      }
      
    } catch (error) {

      console.log(error);
      
    }

  }


  return (
    <div className="register-continar">
    <div className="register-wraper">
      <a className='logo-link' href="#"><img className='logo' src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" alt="" /></a>

       <span className="reg-text">Sign up to see photos and videos from your friends.</span>

       <a className='register-with-facebook' href="#"> < FaFacebookF /> <button className='reg-btn'>Log in with Facebook</button> </a>

      <div className="register-divider">OR</div>

      <form onSubmit={handleUserRegister} className='register-form' >
         <input name='email' onChange={handleInput} type="text" className='register-input' value={input.email} placeholder='Mobile Number, or Email' />
         <input name='name' onChange={handleInput} type="text" className='register-input' value={input.name} placeholder='Full Name' />
         <input name='userName' onChange={handleInput} type="text" autoComplete= 'off'  className='register-input' value={input.userName}  placeholder='Username' />
         <input name='password' onChange={handleInput} type="text"  autoComplete= 'off' className='register-input' value={input.password}  placeholder='password' />

        <div className="form-text">
        <p className="reg-form-text"> People who use our service may have uploaded your contact information to Instagram. <a href="#">Learn More</a> </p>

        <p className="reg-form-text"> By signing up, you agree to our <a href="#">Terms</a> , <a href="#">Privacy Policy</a> and <a href="#">Cookies Policy</a> . </p>
        <button type='submit' className='sign-up-butten'>Sign up</button>
        </div>
      </form>

    </div>

    <div className="reg-signe-up-wraper">
      <span className='reg-signe-up-text'>Have an account? <Link to="/login" className='reg-signe-up-link'>Log in</Link></span>
    </div>

    <div className="get-app">
      <span className="app-text">Get the app.</span>

      <div className="app-img">
        <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" />
        <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" />
      </div>
    </div>
    <AuthFooter/>
   </div>
   
  )
}

export default Register