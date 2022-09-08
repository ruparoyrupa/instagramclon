import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { creatTost } from '../../utility/Toste';





const Verify = () => {

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.post('http://localhost:5050/api/user/verify' , params)
    .then(res => {
      creatTost('Account activation successful');
      navigate('/login');
    })
    .catch(error => {
      creatTost('Account activation faild');
    })
  })

  return (
    <h1>Verify</h1>
  )
}

export default Verify