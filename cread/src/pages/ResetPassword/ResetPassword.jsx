 

import React from 'react';
import { useState } from 'react';
import './ResetPassword.scss';
import {useNavigate ,  useParams} from 'react-router-dom'
import axios from 'axios'
import { creatTost } from '../../utility/Toste';




 
 const ResetPassword = () => {

    // get params
   const {token} = useParams();
   const navigate = useNavigate();

  const [password , setPassword] = useState({

    npassword : '',
    cpassword : ''

  });

  // message  state


  const [msg , setMsg] = useState({

    type : '',
    msg : '',
    status : false

  });


    // handle input

    const handleInput = (e) => {

      setPassword((prev) => ({ ...prev , [e.target.name] : e.target.value}))
    }


  // password reset handler

    const handleResetPassword = async (e) => {
      e.preventDefault();

    try {

          // cheak password

          if (!password.npassword) {
            setMsg({
              type : 'warning',
              msg : 'Please set a password',
              status : true
            })
          } else if ( password.npassword !== password.cpassword  ) {
            setMsg({
              type : 'warning',
              msg : 'Password not match',
              status : true
            })
          }else{
            await axios.post('http://localhost:5050/api/user/reset-password', {
              token : token,
              password : password.cpassword 
            })
            .then(res => {

              setMsg({
                type : '',
                msg : '',
                status : false
              });
              setPassword('');
              creatTost('Your password changed successfully')
              navigate('/login')
              
              
            })
            .catch(error => {
              creatTost('Time out , please try again')
            })
          }
      
    } catch (error) {
      creatTost(' Try again');
      console.log(error);
    }
      
    };



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
     <div className="reset-password-container">
        <div className="reset-password">
            <div className="card shadow">
               <div className="card-header">
                <h2 className='header-titel'>Reset Password</h2>
                </div> 
                { msg.status &&  <p className={`alert alert-${msg.type}`}>{msg.msg} <button className="btn-close btn-sm" onClick={handleMsgClose}></button></p>} 
               <form onSubmit={handleResetPassword}>
               <div className="card-body">
              
                <div className="new-password">
                <label htmlFor="">New Password</label>
                <input className='new-input shadow' name='npassword' value={password.npassword} onChange={handleInput}   type="password" />
                </div>
                <div className="confarm-password">
                <label htmlFor="">Confarm Password</label>
                <input className='confarm-input shadow' name='cpassword' value={password.cpassword} onChange={handleInput}  type="password" />
                </div>
                 <div className="reset-btn">
                 <button className='butten shadow'>Reset</button>
                 </div>
                </div> 
               </form>
            </div>
        </div>
     </div>
    </>
   )
 }
 
 export default ResetPassword