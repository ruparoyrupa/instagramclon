import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { VscLock } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import './ForgotPassword.scss';
import swal from 'sweetalert';

const ForgotPassword = () => {

  const [email , setEmail] = useState('');
  
  

  //  message state

  const [msg , setMsg] = useState({

    type : '',
    msg : '',
    status : false

  });


  // password recovery link send heandler

  const handlePasswordRecover = async (e) => {
       e.preventDefault();

     await axios.post('http://localhost:5050/api/user/recover-password', {email})
     .then(res => {
        
      swal("Success !", "Password recovery link send successfully !", {
        icon: "success"
      });

      setEmail('');

     })
     .catch(error => {
         setMsg({
        type : 'danger',
        msg : 'Invalid email or email not exixts',
        status : true
       })
     });
  }


  // msg close heandeler

  const handleMsgClose = () => {
    setMsg({
      type : '',
      msg : '',
      status : false
    })
  }
 
  return (
    <>
       <div className="password-continar">
    <div className="password-wraper">
      <h2><VscLock/></h2>
       <h5>Trobule Logging In?</h5>
       <span>Enter your email,phone, or username and we'll send you link to get back into your account</span>
       { msg.status &&  <p className={`alert alert-${msg.type}`}>{msg.msg} <button className="btn-close btn-sm" onClick={handleMsgClose}></button></p>}
      <form  className='password-form' onSubmit={handlePasswordRecover} method='POST'>
         <input  type="text" name='email' className='password-input' value={email} onChange={e => setEmail(e.target.value) } placeholder='phone number, username, or email' />
         <button type='submit'  className='send-link-butten'>Send Login Link</button>
      </form>

      <div className="forgot-pass-divider">OR</div>
      <a className='create-new-account' hrf="#">Create New Account</a>
    </div>

    <div className="back-login-wraper">
       <Link to="/login" className='back-login-link'>Back To Login</Link>
    </div>
  
   </div>
   <AuthFooter/>
    </>
  )
}

export default ForgotPassword;