import React from 'react'
import styled from 'styled-components';
import lib from '../assets/lib.jpg';
import online from '../assets/online.jpg';

const Middle = () => {
  return (
    <MID>
      <h1>What are your reading ?</h1>
      <div className='inner'>
            <div className='text'>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque repudiandae omnis corporis natus magnam! Dolor suscipit perferendis ullam odit distinctio saepe aspernatur, iste hic animi id rerum amet repellat et?
                  Consectetur laborum voluptatem eos enim dolor fugiat totam officia quia deserunt? Obcaecati dolore fugit mollitia dolores, est quod in quasi deleniti consequuntur similique pariatur minima nulla quia saepe doloribus veritatis?
                  Doloremque aspernatur iure fuga ex ipsum exercitationem sint, at qui et modi atque quibusdam excepturi, id alias distinctio necessitatibus repudiandae? Commodi, ut incidunt? Quae nostrum facere maiores nulla saepe quidem!
                  </p>
            </div>
            <div className='img'>
                  <img src={lib} alt="" />
            </div>
      </div>
      <div className='inner'>
            <div className='img'>
                  <img src={online} alt="" />
            </div>
            <div className='text'>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque repudiandae omnis corporis natus magnam! Dolor suscipit perferendis ullam odit distinctio saepe aspernatur, iste hic animi id rerum amet repellat et?
                  Consectetur laborum voluptatem eos enim dolor fugiat totam officia quia deserunt? Obcaecati dolore fugit mollitia dolores, est quod in quasi deleniti consequuntur similique pariatur minima nulla quia saepe doloribus veritatis?
                  Doloremque aspernatur iure fuga ex ipsum exercitationem sint, at qui et modi atque quibusdam excepturi, id alias distinctio necessitatibus repudiandae? Commodi, ut incidunt? Quae nostrum facere maiores nulla saepe quidem!
                  </p>
            </div>
      </div>
    </MID>
  )
}

export default Middle;
const MID = styled.div`
width: 70%;
margin:50px auto;
display: flex;
flex-direction: column;
gap:50px;
h1{
      text-align:left;
      color: #4c4646;
}
.inner {
      display: flex;
      gap: 50px;
      justify-content: center;
      align-items: center;
}
.text p {
      width: 70%;
      padding-left: 40px;
      text-align: justify;
}
`