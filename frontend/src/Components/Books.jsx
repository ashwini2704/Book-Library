import React, { useContext, useEffect, useState } from 'react'
import { BASE_URL } from '../config';
import axios from 'axios';
import Bookcard from './Bookcard';
import styled from 'styled-components';
import { authContext } from '../Context/AuthContext';

const Books = () => {
      const [books,setBooks] = useState([]);
      const {token} = useContext(authContext)
      useEffect(() => {
             
            fetch(`${BASE_URL}/books`, {
            headers : {
                "Content-type" : "application/json",
                "Authorization":`Bearer ${token}` 
            }
        })
        .then(res=> res.json())
        .then((data)=> {
            // console.log(data);
            setBooks(data.data)
        })
        .catch(err => {
            console.log(err)
        })
      },[books]);
  
      const handleDelete = (id) => {
            axios.delete(`${BASE_URL}/books/${id}`)
            .then(res => {
                  let newBooks = books.filter(book => book.id != id);
                  setBooks(newBooks);
            })
      }


  return (
    <BOOK>
      <h1>All Books</h1>
      <div className='grid_book'>
            {
                  books.length>0 && books.map(el => (
                        <Bookcard key={el.id} book={el} handleDelete={()=>handleDelete(el.id)} />
                  ))
            }
      </div>
    </BOOK>
  )
}

export default Books;

const BOOK = styled.div`
width: 80%;
margin: 100px auto;

.grid_book {
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap: 30px;
}
`