import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import { BASE_URL } from '../config';
import { authContext } from '../Context/AuthContext';
import { useParams } from 'react-router-dom';

const SingleBook = () => {
  const {id} = useParams();
  const [book,setBook] = useState({});
  const {token} = useContext(authContext)

  useEffect(() => {
    fetch(`${BASE_URL}/books/${id}`, {
      headers : {
          "Content-type" : "application/json",
          "Authorization":`Bearer ${token}` 
      }
  })
  .then(res=> res.json())
  .then((data)=> {
      console.log(data);
      setBook(data.data)
  })
  .catch(err => {
      console.log(err)
  })
  },[token,id])

  return (
    <SINGLE>
      <div><img src={book.photo} alt="book-img" /></div>
      <div className='dsc'>
        <h1>Title : {book.title}</h1>
        <h4>Author : {book.author}</h4>
        <p>Condition : {book.condition} </p>
        <p>Language : {book.language} </p>
        <p>Genre : {book.genre} </p>
        <h4>Editor : {book.editor} </h4>
        <p>Publication Year : {book.publicationYear} </p>
        <h4>Description : </h4>
        <p className='sedc'>{book.description} </p>
      </div>
    </SINGLE>
  )
}

export default SingleBook;

const SINGLE = styled.div`
width: 80%;
  margin: 100px auto;
  display: flex;

  .dsc {
    text-align: left;
    padding-left: 50px;
  }
  .sedc {
    text-align: justify;
  }
`