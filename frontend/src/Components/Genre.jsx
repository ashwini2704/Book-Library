import React from 'react'
import styled from 'styled-components';

const Genre = () => {
  return (
    <GENRE>
      <h2>GENRES</h2>
      <div className='div'>

            <div style={{backgroundImage:`url("https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-1.png?itok=JPijQ3xG")`}}>
                  <h1>ROMANCE</h1>
            </div>
            <div style={{backgroundImage:`url("https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-3.png?itok=hyUUCWf2")`}}>
                  <h1>MYSTERY</h1>
            </div>
            <div style={{backgroundImage:`url("https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-2.png?itok=1k5Az45m")`}}>
                  <h1>ADVENTURE</h1>
            </div>
            <div style={{backgroundImage:`url("https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-8.png?itok=BjsPtIN2")`}}>
                  <h1>FICTION</h1>
            </div>
            <div style={{backgroundImage:`url("https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-2.png?itok=1k5Az45m")`}}>
                  <h1>FANTASY</h1>
            </div>
            <div style={{backgroundImage:`url("https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-1.png?itok=JPijQ3xG")`}}>
                  <h1>NON_FICTION</h1>
            </div>
            <div style={{backgroundImage:`url("https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-8.png?itok=BjsPtIN2")`}}>
                  <h1>HORROR</h1>
            </div>
            <div style={{backgroundImage:`url("https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-3.png?itok=hyUUCWf2")`}}>
                  <h1>CHILDREN</h1>
            </div>
      </div>
    </GENRE>
  )
}

export default Genre;

const GENRE = styled.div`
width: 80%;
margin: 50px auto;
.div {
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap: 30px;
}
h2{
      color: #585050;
      text-align: left;
      font-size: 25px;
      margin-bottom: 20px;
}
 h1 {
      color: white;
  background: rgba(82, 80, 80, 0.4); 
  width: 250px;
  padding: 5px;
}
.div div {
      height:250px;
      width:250px;
      display: flex;
      justify-content: center;
      align-items: center;
}

`