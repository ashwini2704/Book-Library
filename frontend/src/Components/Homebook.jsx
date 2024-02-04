import React from 'react'
import styled from 'styled-components';

const books = [
{
  id:1,    
  title:"The Great Gatsby",
  author: "F. Scott Fitzgerald",
  genre : "Fiction",
  photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/The_Shining_%281977%29_front_cover%2C_first_edition.jpg/330px-The_Shining_%281977%29_front_cover%2C_first_edition.jpg",
  price: 245
},

{
  id:3,    
  title:"Pride and Prejudice",
  author: "Jane Austen",
  genre : "Romance",
  price: 245,
  photo: "https://m.media-amazon.com/images/I/21164+rhPSL._SY445_SX342_.jpg"
},
{
      id:2,    
      title:"The Shining",
      author: "Stephen King",
      genre : "Horror",
      price: 245,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/The_Shining_%281977%29_front_cover%2C_first_edition.jpg/330px-The_Shining_%281977%29_front_cover%2C_first_edition.jpg"
    },
{
  id:4,    
  title:"One Hundred Years of Solitude",
  author: "Gabriel García Márquez",
  genre : "Mystery",
  price: 245,
  photo: "https://m.media-amazon.com/images/I/51fbxh0TD-L._SY445_SX342_.jpg"
},
{
      id:5,    
      title:"Pride and Prejudice",
      author: "Jane Austen",
      genre : "Romance",
      price: 245,
      photo: "https://m.media-amazon.com/images/I/21164+rhPSL._SY445_SX342_.jpg"
    },
    {
      id:8,    
      title:"The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre : "Fiction",
      price: 245,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/The_Shining_%281977%29_front_cover%2C_first_edition.jpg/330px-The_Shining_%281977%29_front_cover%2C_first_edition.jpg"
    },
    {
      id:6,    
      title:"One Hundred Years of Solitude",
      author: "Gabriel García Márquez",
      genre : "Mystery",
      price: 245,
      photo: "https://m.media-amazon.com/images/I/51fbxh0TD-L._SY445_SX342_.jpg"
    },
    
{
      id:7,    
      title:"The Shining",
      author: "Stephen King",
      genre : "Horror",
      price: 245,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/The_Shining_%281977%29_front_cover%2C_first_edition.jpg/330px-The_Shining_%281977%29_front_cover%2C_first_edition.jpg"
},



]
const Homebook = () => {

  return (
      <HOMEB>
            <h1>Recommended Books</h1>
            <div className='box'>
                  {
                        books && books.map(el => (
                              <div key={el.id} className='bookc'>
                                    <div className='img'><img src={el.photo} alt="" /></div>
                                    <h4>{el.title}</h4>
                                    <p>{el.author}</p>
                                    <div style={{width:"80%",margin:"auto",display:"flex", justifyContent:"space-between"}}>
                                          <h4 style={{color:"#ed5858"}}>Rs.{el.price}</h4>
                                          <p style={{color:"#6c6969"}}>{el.genre}</p>
                                    </div>
                              </div>
                        ))
                  }
            </div>
      </HOMEB>
  )
}

export default Homebook;

const HOMEB = styled.div`
  width: 80%;
  margin: 50px auto;
  
  
  h1 {
      text-align: left;
      color: #5b5353;
      margin-bottom: 30px;
  }
  .box {
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap: 20px;
  }
  .bookc {
      width: 250px;
      height: 350px;
      display: flex;
      flex-direction: column;
      gap: 1px;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  }
.img img {
        width: 200px;
        height: 250px;
        margin-bottom: 5px;
  }
`