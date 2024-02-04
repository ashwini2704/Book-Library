import React, { useContext } from 'react'
import { authContext } from '../Context/AuthContext'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Bookcard = ({book,handleDelete}) => {
      const {role} = useContext(authContext)
  return (
    <BOOKCARD>
      <div className='img'>
            <img src={book.photo} alt="" />
      </div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <div>
      <h3>{book.price}</h3>
      <p>{book.genre}</p>
      </div>
      <div className='but'>
            <Link className='btn' to={`/books/${book._id}`}>
            View
            </Link>
      {
            role === "CREATOR" ? 
                  <button className='btn' onClick={handleDelete}>Delete</button> : ""
      }
      </div>
    </BOOKCARD>
  )
}

export default Bookcard;

const BOOKCARD = styled.div`
height: 420px;
padding-bottom: 20px;
box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
      .img img {
            height: 300px;
      }
      img {
            width: 100%;
      }
      .but {
            display: flex;
            justify-content: space-around;
      }
      .btn {
            background-color: var(--color-primary);
            padding: 5px;
            border-radius: 5px;
            color: white;
            font-size: 16px;
            font-weight: 600;
            border: 1px solid var(--color-primary);
      }
`