import React from 'react'
import Genre from '../Components/Genre'
import Hero from '../Components/Hero'
import Middle from '../Components/Middle'
import Homebook from '../Components/Homebook'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Homebook/>
      <Middle/>
      <Genre/>
    </div>
  )
}

export default Home