import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {


  return (
    <div className='hero relative'>
        <div className='relative'>
          <img 
              src={require("../assets/banner2.png")} alt="banner" 
              className='w-[90rem] h-[80vh] md:h-[80h] lg:h-[90vh]'
          />
        </div>
        <div className='absolute top-[30%] left-[10%] cursor-default'>
            <h1 className='text-4xl md:text-6xl lg:text-8xl font-ab w-[20rem] md:w-[40rem] font-bold'>
              <span className='word-animation'>The Only </span>
              <span className='text-white word-animation'>Anime </span> 
              <span className='word-animation'>Platform</span> 
            </h1>
            <p className='text-4xl md:text-6xl font-ab font-semibold w-[20rem] md:w-[40rem]'>
              <span className='word-animation'>You'll </span>
              <span className='word-animation'>Ever </span>
              <span className='word-animation'>Need. </span>
            </p>
            <Link to={'/summary'}>
            <button className='hover:text-3xl hover:underline underline-offset-8 mt-[4rem] font-bold text-md md:text-2xl text-white'>→Click Here!!</button>
            </Link>
        </div>
    </div>
  )
}

export default Hero