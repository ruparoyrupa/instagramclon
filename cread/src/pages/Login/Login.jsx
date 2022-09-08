import React, { useState } from 'react'
import './Login.scss';
import { GrFacebook  } from "react-icons/gr";
import {Link, useNavigate} from 'react-router-dom';
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import swal from 'sweetalert';
import axios from 'axios';
import cookie from 'js-cookie';  
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import LoaderContext from '../../context/LoaderContext';
import { creatTost } from '../../utility/Toste';
import AuthTamp from '../AuthTamp/AuthTamp';

const Login = () => {

  //  use navegate

  const navigate = useNavigate();

  //  use auth context

  const { dispatch } = useContext(AuthContext);


    //  use loader context

    const { loaderDispatch } = useContext(LoaderContext);

// login state
  
  const [ input , setInput ] = useState({
    auth : '',
    password : ''

});



  // handle input

  const handleInput = (e) => {

    setInput((prev) => ({ ...prev , [e.target.name] : e.target.value}))
  }

  //  login from heandler

  const heandleUserLogin = async (e) => {

      e.preventDefault();

      try {
        if ( !input.auth || !input.password ) {
         
          swal("Warning", "All fields are required", "error");
          
        }else{
          await axios.post('http://localhost:5050/api/user/login', { email : input.auth , password : input.password })
          .then( res => {

            if (res.data.user.isVerified) {

              cookie.set('token', res.data.token );
              dispatch({type : 'LOGIN_USER_SUCCESS' , payload : res.data.user});
              loaderDispatch({type : 'LOADER_START'});
  
              navigate('/');
              
            }else{
              creatTost('Please verify your account');
            }

          
            
          })
        }
        
      } catch (error) {

        swal("Danger", "Woring email or password", "error");
        console.log(error);
      }


  }


  return (
   <>
      <div className="login">
       <div className="login-continer">
       <div className="login-continer-left">
          <AuthTamp/>
        </div>
        <div className="login-continer-right">
        <div className="login-wraper">
      <a className='logo-link' href="#"><img className='logo' src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" alt="" /></a>

      <form onSubmit={heandleUserLogin} className='login-form'>
         <input  type="text" name='auth' className='login-input' value={input.auth} onChange={handleInput} placeholder='phone number, username, or email' />
         <input  type="text" name='password' className='login-input' value={input.password} onChange={handleInput}  placeholder='password' />
         <button type='submit'  className='login-butten'>Log In</button>
      </form>

      <div className="divider">OR</div>
      <a className='login-with-facebook' href="#"> < GrFacebook/> Log in with Facebook </a>
      <Link className='forgot-password' to="/forgot-password">Forgot password?</Link>
    </div>

    <div className="signe-up-wraper">
      <span className='signe-up-text'>Don't have an account? <Link to="/register" className='signe-up-link'>Sign up</Link></span>
    </div>

    <div className="get-app">
      <span className="app-text">Get the app.</span>

      <div className="app-img">
        <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" />
        <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" />
      </div>
    </div>
        </div>
       </div>
       <AuthFooter/>  
   </div>
   </>
  )
}

export default Login