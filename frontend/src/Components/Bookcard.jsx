import React, { useContext } from 'react'
import { authContext } from '../Context/AuthContext'
import { Link } from 'react-router-dom'

const Bookcard = ({book,handleDelete,handleView}) => {
      const {role} = useContext(authContext)
  return (
    <div>
      <div>
            <img src={book.photo} alt="" />
      </div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <div>
      <h3>{book.price}</h3>
      <p>{book.genre}</p>
      </div>
      <div style={{display:"flex", justifyContent:"space-between"}}>
            <Link to={`/books/:${book.id}`}>
            View
            </Link>
      {
            role === "CREATOR" ? 
                  <button onClick={handleDelete}>Delete</button> : ""
      }
      </div>
    </div>
  )
}

export default Bookcard