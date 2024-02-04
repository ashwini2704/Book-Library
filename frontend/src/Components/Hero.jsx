import React from 'react'
import styled from 'styled-components';

const Hero = () => {
  return (
    <HERO>
      <h1>The only thing that you absolutely have to know, is the location of the library.</h1>
    </HERO>
  )
}

export default Hero;

const HERO = styled.div`
      margin-top: 70px;
      background-image: url("https://manybooks.net/sites/default/files/2018-07/bookcoverssmall2.jpg");
      height: 450px;
      display: flex;
      justify-content: center;
      align-items: center;
      h1{
            color: #dddada;
            width: 50%;
            margin: auto;
      }
`