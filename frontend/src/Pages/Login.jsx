import React, { useContext, useState } from 'react'
import login from '../assets/login.png';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { authContext } from '../Context/AuthContext';
import axios from 'axios';
import { BASE_URL } from '../config';

const Login = () => {
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("");

      const {dispatch} = useContext(authContext);
      const navigate = useNavigate()

      const handleLogin = () => {
            const payload = {
                  email,password
            }

            axios
            .post(`${BASE_URL}/user/login`,payload)
            .then(res => {
                  console.log(res)
                  if(res.status === 200) {
                        dispatch({type : 'LOGIN_SUCCESS',payload : {token : res.data.token, role : res.data.role}});
                        navigate('/books')
                  }
            })

      }
  return (
    <LOGIN>
      <div className='img'><img src={login} alt="" /></div>
      <div className='box'>
            <h2>Login</h2>
            <input type="email" placeholder='Enter Email'  value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password"  placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
            <p>Don't have account? <Link className='link' to='/register'>Register</Link> </p>
      </div>
    </LOGIN>
  )
}

export default Login;
const LOGIN = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  margin: 100px auto;
  /* border: 1px solid black; */
  padding: 30px;
  height: 500px;
  text-align: left;
  .link {
      color: var(--color-primary);
      text-decoration: underline;
  }
  button {
      width: 100%;
      margin: 10px auto 15px auto;
      padding: 5px;
      background-color: black;
      color: white;
      font-size: 17px;
      font-weight: 500;
}
h2{
      margin-bottom: 20px;
      font-family: sans-serif;
}
img {
      width: 100%;
}

input {
        margin: 5px auto;
        padding: 5px;
        width: 100%;
  }
  .box {
      width: 100%;
      padding: 30px;
  }
`