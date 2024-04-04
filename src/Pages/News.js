import React from 'react'

function News() {
  return (
    <div className='py-[3rem] bg-black'>
        <h1 className='ml-[2rem] text-3xl md:text-5xl underline underline-offset-8 text-white leading-[4rem] md:leading-[3rem]'>News of the Upcomings!</h1>
        <div className='temp hover:scale-110'>
            <div className='news'>
                <img className='w-[12rem] rounded-lg' src="https://i.animepahe.ru/posters/8ccdcd757a1307eb7ea1885728001c621585546cdee8e90ada8b262834d11430.jpg" alt="" />
                <div className='hover:scale-[1.15]'>
                    <p className=' text-sm lg:text-xl text-center font-semibold'>The Banished Former Hero Lives as He Pleases</p>
                    <p className=' md:ml-[2rem] text-center text-sm lg:text-lg'>"A boy named Allen was unable to receive the gift of God's bounty, and called a failure. But his true identity was a former hero with memories and powers of his previous life!?"</p>
                </div>
            </div>
        </div>
        <div className='temp hover:scale-110'>
            <div className='news'>
                <img className='w-[12rem] rounded-lg' src="https://i.animepahe.ru/posters/47ed2740fbef2e45f396ce502fed1197adecc5a4aa3145c7d415b81d27b8843a.jpg" alt="" />
                <div className='hover:scale-[1.15]'>
                    <p className='text-sm lg:text-xl text-center font-semibold'>I Was Reincarnated as the 7th Prince so I Can Take My Time Perfecting My Magical Ability</p>
                    <p className='lg:ml-[2rem] text-center text-sm lg:text-lg'>"Prince Lloyd wasn't always a prince...in fact, his previous life is one he remembers perfectly: he was a sorcerer, of sorts."</p>
                </div>
            </div>
        </div>
        <div className='temp hover:scale-110'>
            <div className='news'>
                <img className='w-[12rem] rounded-lg' src="https://i.animepahe.ru/posters/4740222bbd119f0f2025ca5bbb6ab0354d68e63f34f540784897dc8c3313cec6.jpg" alt="" />
                <div className='hover:scale-[1.15]'>
                    <p className='text-sm lg:text-xl text-center font-semibold'>Gods' Game We Play</p>
                    <p className='lg:ml-[2rem] text-center text-sm lg:text-lg'>"The supreme Gods who had too much free time created the ultimate brain games "Play of the Gods.""</p>
                </div>
            </div>
        </div>
        <div className='temp hover:scale-110'>
            <div className='news'>
                <img className='w-[12rem] rounded-lg' src="https://i.animepahe.ru/posters/bb65149aeb05ad265c1c04236e7b73f8d30e372eeeaf0d5ea1c3fd745a6ce040.jpg" alt="" />
                <div className='hover:scale-[1.15]'>
                    <p className='text-sm lg:text-xl text-center font-semibold'>Re:Monster</p>
                    <p className='lg:ml-[2rem] text-center text-sm lg:text-lg'>"Tomokui Kanata has been re-incarnated in the weakest goblin, named Goburou, after having undergone an unfortunate death."</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News