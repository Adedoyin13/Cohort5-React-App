import React from 'react'
import './Home.css'
import FIDO from '/fido-dido.jpg'

const Home = () => {
  return (
    <div className='heroCon'>
        <div className="heroText">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit esse aperiam voluptatum.</p>
        </div>

        <div className="imgCon">
            <img src={FIDO} alt="" srcSet=''/>
        </div>
    </div>
  )
}

export default Home