import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import register from '../assets/register.png'
import { BASE_URL } from '../config';

const Signup = () => {
      // const [selectedFile, setSelectedFile] = useState(null);
      // const [url, setUrl] = useState("");
    
      const [formData, setData] = useState({
        name:"",
        email:"",
        password:"",
        photo:"https://img.freepik.com/premium-vector/avatar-profile-icon-vector-illustration_276184-165.jpg",
        role:""
      });
    
      const navigate = useNavigate();

      const handlleChange = (e) => {
        setData({...formData, [e.target.name] : e.target.value})
      }
    
//       const handleFileInput = async (e) => {
//         const file = e.target.files[0];
//         const data = await uploadImagetoCloudinary(file);
        
//     // console.log(data.url)
//         setUrl(data.url);
//         setSelectedFile(data.url);
//         setData({...formData, photo : data.url})
//       }


      const submitHandler = async (e) => {
        try {
          const res = await fetch(`${BASE_URL}/user/register`,{
            method:'post',
            headers : {
              'Content-type' : 'application/json'
            },
            body: JSON.stringify(formData)
          })
    console.log(res)
          const {message} = await res.json();
    console.log(formData)
          if(!res.ok) {
            throw new Error(message)
          }
          navigate('/login')
        } catch (error) {
            console.log(error.message)
        }
      }
  return (
      <SIGNUP>
      <div className='img'><img src={register} alt="" /></div>
      <div className='box'>
            <h2>Register</h2>
            <input type="text" name='name' placeholder='Enter Name'  value={formData.name} onChange={handlleChange}/>
            <input type="email" name='email' placeholder='Enter Email'  value={formData.email}  onChange={handlleChange}/>
            <input type="password" name='password' placeholder="Enter Password" value={formData.password} onChange={handlleChange}/>
            <div className='select'>
            <label htmlFor="">Role : </label>
            <select name="role" value={formData.role} onChange={handlleChange}>
            <option value="">Select Role</option>
            <option value="CREATOR">CREATOR</option>
            <option value="VIEW_ALL">USER</option>
            </select>
            </div>
            <input type="text" name='photo' value={formData.photo} onChange={(e) => setData({...formData,[e.target.name] : "https://img.freepik.com/premium-vector/avatar-profile-icon-vector-illustration_276184-165.jpg"})}/>
            <button onClick={submitHandler}>Register</button>
            <p>Already have an account? <Link className='link' to='/login'>Login</Link> </p>
      </div>
    </SIGNUP>
  )
}

export default Signup;

const SIGNUP = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  margin: 100px auto;
  /* border: 1px solid black; */
  padding: 30px;
  height: 500px;
  text-align: left;
  .select {
      margin: 5px auto;
  }
  select {
      padding: 3px;
      font-size: 14px;
      color: #545252;
  }
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
      cursor:pointer;
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