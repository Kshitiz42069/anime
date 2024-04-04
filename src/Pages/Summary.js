import React from 'react'

function Summary() {
  return (
    <div className='py-[3rem]'>
        <div className='img'>
            <img className='rounded-xl w-[20rem] lg:w-1/2 mx-[2rem] md:mx-[13rem] lg:mx-[22rem] my-[4rem]' src="https://wallpapers.com/images/featured/all-anime-2e92kjl5ii5i7rwz.jpg" alt="" />
        </div>
        <div className='sum w-[20rem] md:w-3/4 mx-[2rem] md:ml-[6rem] lg:ml-[10rem]'>
            <h1 className='ml-[3rem] text-2xl md:text-5xl mb-[5rem]'>History of Anime</h1>
            <p className='text-md md:text-xl text-center'>Anime itself dates back over a hundred years. The first confirmed example was produced in 1917 titled Namakura Gatana with a run time of only four minutes. Over time, it has had its highs and lows facing various obstacles both within Japan and internationally. </p>
            <p className='text-md md:text-xl text-center'>Through its evolution, various artists have pushed the limitations and the stories told with it. The genres within this category are as seemingly limitless as art itself. Many Western audiences have an idea of how typical anime looks. 
            However, the artistry and styles fall onto an also seemingly limitless spectrum dependent on the artists themselves. Despite the varying styles, one thing is certain throughout all of these productions — the process is laborious. </p>
            <p className='text-md md:text-xl text-center'>Anime is no different technically to the animation productions of Western culture. Which, if you know anything about, takes an incredible amount of time and work. Stories must be written, storyboarded, workshopped, taken into an animatic, voiced, and animated.</p>
        </div>
    </div>
  )
}

export default Summary