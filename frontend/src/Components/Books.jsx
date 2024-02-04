import React, { useContext, useEffect, useState } from 'react'
import { BASE_URL } from '../config';
import axios from 'axios';
import Bookcard from './Bookcard';
import styled from 'styled-components';
import { authContext } from '../Context/AuthContext';

const Books = () => {
      const [books,setBooks] = useState([]);
      const {token} = useContext(authContext);
      const [genre,setGenres] = useState("");
      const [time,setTime] = useState("");
      const [sort,setSort] = useState("");


      useEffect(() => {
        const queryParams = [];
        if (genre) queryParams.push(`genre=${genre}`);
        if (sort) queryParams.push(`sort=${sort}`);
        if (time === 'old') queryParams.push('old=1');
        if (time === 'new') queryParams.push('new=1');
    
        const url = `${BASE_URL}/books${queryParams.length > 0 ? '?' + queryParams.join('&') : ''}`;
    
        axios.get(url, {
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            setBooks(response.data.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [token, genre, time, sort]);
          
  
          const handleDelete = (id) => {
            axios.delete(`${BASE_URL}/books/${id}`,{
                  headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token}`,
                  },
                })
                .then(res => {
                  console.log(res)
                    let newBooks = books.filter(book => book._id !== id);
                    setBooks(newBooks);
                })
                .catch(error => {
                    console.error('Error deleting book:', error);
                });
        };
        


  return (
    <BOOK>
      <h1>All Books</h1>
      <div>
        <div>
          <label>Filter according to Genre</label>
          <select name="genre" value={genre} onChange={(e)=>setGenres(e.target.value)}>
            <option value="">Select Genre</option>
            <option value="Fiction">Fiction</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Mystery">Mystery</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Poetry">Poetry</option>
            <option value="Adventure">Adventure</option>
            <option value="Non-Fiction">Non-Fiction</option>
          </select>
        </div>
        <div>
          <label>Get Books according to time</label>
          <select name="time" value={time} onChange={(e)=>setTime(e.target.value)}>
            <option value="">Select old/new</option>
            <option value="old">Books added before 10mins</option>
            <option value="new">Books added within 10mins</option>
          </select>
        </div>
        <div>
          <label>Sort according to publication year</label>
          <select name="sort" value={sort} onChange={(e)=>setSort(e.target.value)}>
            <option value="">Select order</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      <div className='grid_book'>
        {books && books.length > 0 ? (
          books.map(el => (
            <Bookcard key={el._id} book={el} handleDelete={() => handleDelete(el._id)} />
          ))
        ) : (
          <h1 key="no-books">No books found</h1>
        )}
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