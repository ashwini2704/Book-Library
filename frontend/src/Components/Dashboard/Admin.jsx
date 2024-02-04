import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { BASE_URL } from '../../config';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { authContext } from '../../Context/AuthContext';

const initialState = {
      title:"",
      price:0,
      author:"",
      edition : "",
      language:"",
      condition:"",
      photo:"",
      isbn:"",
      editor:"",
      description:"",
      genre: "",
      publicationYear:0
}

const Admin = () => {
      const [data, setData] = useState(initialState);
    const navigate = useNavigate();
    const {token} = useContext(authContext)

    const handleChange = (e) => {
        const{value, name,type} = e.target;
        let val = type == "number" ? +value : value;

        setData(prev => {
            return {...prev, [name] : val}
        })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
    
      axios.post(
        `${BASE_URL}/books`,
        data, 
        {
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((response) => {
          console.log(response);
          navigate('/books');
        })
        .catch((error) => {
          console.log(error);
        });
    };
    
     
      
  return (
    <ADMIN>
      <form onSubmit={handleSubmit}>  
      <div className='form'>
            <input type="text" name="title" value={data.title} onChange={handleChange} placeholder="Enter Title" required/>            
            <input type="number" name="price" value={data.price} onChange={handleChange} placeholder="Price" required/>            
            <input type="number" name="publicationYear" value={data.publicationYear} onChange={handleChange} placeholder="publicationYear" required/>            
            <input type="text" name="author" value={data.author} onChange={handleChange} placeholder="author" required/>            
            <input type="text" name="edition" value={data.edition} onChange={handleChange} placeholder="edition" required/>            
            <input type="text" name="language" value={data.language} onChange={handleChange} placeholder="language" required/>            
            <input type="text" name="condition" value={data.condition} onChange={handleChange} placeholder="condition" required/>            
            <input type="text" name="isbn" value={data.isbn} onChange={handleChange} placeholder="isbn" required/>            
            <input type="text" name="editor" value={data.editor} onChange={handleChange} placeholder="editor" required/>            
            <input type="text" name="description" value={data.description} onChange={handleChange} placeholder="description" required/>            
            <input type="text" name="genre" value={data.genre} onChange={handleChange} placeholder="genre" required/>            
            <input type="text" name="photo" value={data.image} onChange={handleChange} placeholder="Image" required/>            
            <button className="form-button" type="submit">Add Book</button>
      </div>             
            </form>
    </ADMIN>
  );
};

export default Admin;


const ADMIN = styled.div`
width: 500px;
margin: 100px auto;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
padding: 50px;
button{
    background-color: var(--color-primary);
    padding: 9px 15px;
    color: white;
    font-weight: 600;
    font-size: medium;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--color-primary);
    cursor:pointer;
}
input {
padding: 5px;
}
.form {

display: flex;
flex-direction: column;
gap: 10px;
}
`
