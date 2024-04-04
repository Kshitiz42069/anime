import React from 'react'

function Contact() {
  return (
    <div className='bg-black  mt-[6rem] pt-[7rem] px-[1rem] md:px-[3rem] w-full'>
        <div className='title'>
            <h1 className='text-3xl md:text-5xl text-white underline underline-offset-[16px]'>Contact</h1>
        </div>
        <div className='flex justify-between mt-[4rem] pb-[5rem]'>
            <div className=''>
                <img src={require('../assets/goku.png')} alt="" className='hidden h-[37rem] md:block'/>
            </div>
            <form className='form'>
                <label htmlFor="name" className='text-white text-xl'>Name</label>
                <input type="text"  className=' mx-4 focus:outline-none rounded-2xl text-xl w-[15rem] lg:w-[30rem]'/>
                <label htmlFor="Username" className='text-white text-xl'>UserName</label>
                <input type="text" className='mx-4 focus:outline-none rounded-2xl text-xl w-[15rem] lg:w-[30rem]'/>
                <label htmlFor="Email" className='text-white text-xl'>Email</label>
                <input type="text"  className='mx-4 focus:outline-none rounded-2xl text-xl w-[15rem] lg:w-[30rem]'/>
                <label htmlFor="passowrd" className='text-white text-xl'>Password</label>
                <input type="Password"  className='mx-4 focus:outline-none rounded-2xl text-xl w-[15rem] lg:w-[30rem]'/>
                <button className='hover:bg-[#D5005B] rounded-lg text-black bg-white w-[5rem] md:ml-[10rem] lg:ml-[25rem]'>Submit</button>
            </form>
            
        </div>
    </div>
  )
}

export default Contact