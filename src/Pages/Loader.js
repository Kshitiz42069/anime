import React from 'react'
import { Link } from 'react-router-dom'

function Loader({onvideoEnd}) {
  return (
    <div className='w-full'>
        <div className=' absolute h-[100vh] w-full'>
            <video src={require('../assets/video1.webm')} autoPlay muted loop className='w-full h-full object-cover fixed'></video>
        </div>
        <div className=' absolute top-[40%] left-[5%]'>
            <p className='text-white text-5xl font-semibold'>Welcome to my website</p>
            <Link to={'/home'}>
                <button onClick={()=>onvideoEnd(false)} 
                    className='text-white text-2xl mt-[5rem] hover:scale-[1.2]'>
                    Click Here!
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Loader