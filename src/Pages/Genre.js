import React,{useState} from 'react'


const genre=[
    {name:'Action',img:'https://i.animepahe.ru/posters/ffa6706f820e38d48b3b65ecc869070d6d18dc54019dc43ff4cc07682fd51885.jpg'},
    {name:'Drama',img:'https://i.animepahe.ru/posters/73628653206ae86b182e612707ca5869273776ee4eb268173da5decbcaec0f45.jpg'},
    {name:'Isekai',img:'https://i.animepahe.ru/posters/47ed2740fbef2e45f396ce502fed1197adecc5a4aa3145c7d415b81d27b8843a.jpg'},
    {name:'School',img:'https://i.animepahe.ru/posters/5bd8fd820668b5f91bf835e790e9f3036af3af11bc71d6e4b3d95e51d68b194c.jpg'},
    {name:'Slice of life',img:'https://i.animepahe.ru/posters/2014db02c28529882100f08938e10e0e1af2c2e9b3a71cd64a8f633d488394e8.jpg'},
    {name:'Love',img:'https://i.animepahe.ru/posters/f3cf51aa0b1f4eee0f93a78806b91a22ae71881c93efd2a47c246bb7a6f355d6.jpg'},
    {name:'Romance',img:'https://i.animepahe.ru/posters/9375dd652ec0bafcb6f7b6fa9a738217e12a0545476483fede0bde9c9485b8ab.jpg'},
    {name:'Ecchi',img:'https://i.animepahe.ru/posters/8793c2ac7b48f32570370cb95f196674912508038dab0452ded37b5fb40809f5.jpg'},
    {name:'Shoujo',img:'https://i.animepahe.ru/posters/4c4f7340e2a1f66c9d339800b11eaa872548c251f5dce7b70a641d6a66aa3ca9.jpg'},
    {name:'Shonen',img:'https://i.animepahe.ru/posters/355e6e3127aa31f0d806114169b52c4fb6da4b87df7f9c1809b9e3de97b8aac5.jpg'},
    {name:'Comedy',img:'https://i.animepahe.ru/posters/267674da1f8fc6610af9d6ff11d21f3e3986aa07756e94a83418dba02713f156.jpg'},
    {name:'Adventure',img:'https://i.animepahe.ru/posters/8ccdcd757a1307eb7ea1885728001c621585546cdee8e90ada8b262834d11430.jpg'},
    // {name:'Mecha',img:'https://i.animepahe.ru/posters/196bde050c94ac98412df67c6e6bd0e90d588559f078dd41bbbbc2f44d23a1d6.jpg'},
    // {name:'Harem',img:'https://i.animepahe.ru/posters/2b2e1c82ec64e1cfc48ade0442e7b83f465f6a3e1eb8930cc7ada9f10f1cbfd0.jpg'},
]

function Genre() {
    const [hoveredGenre, setHoveredGenre] = useState(null);
  
    return (
      <div className='h-[100vh] bg-black relative mb-8'>
        <div className='ml-8 pt-[6rem]'>
          <h1 className='text-3xl md:text-5xl text-[#D5005B] font-bold underline underline-offset-8'>Genres</h1>
        </div>
        <div className='absolute bg-white w-full'>
          <img className='w-full h-[100vh]' src="https://4kwallpapers.com/images/walls/thumbs_2t/15227.png" alt="" />
        </div>
        <div className='absolute md:ml-[5rem] mt-[3rem] md:mt-[6rem] flex flex-wrap justify-between'>
          {genre.map((genreItem, index) => (
            <div key={index} className='w-[50%] md:w-1/4 md:h-[15rem] p-8 md:p-4 relative'>
              <div
                className='mt-4 cursor-pointer'
                onMouseEnter={() => setHoveredGenre(genreItem)}
                onMouseLeave={() => setHoveredGenre(null)}
              >
                <p className='text-[#D5005B] w-[8rem] hover:text-white hover:underline hover:underline-offset-8 text-md text-center md:text-xl hover:scale-105'>{genreItem.name}</p>
              </div>
              {hoveredGenre === genreItem && (
                <div className='absolute top-[-30%] left-[40%] ml-2 mt-2'>
                  <img src={genreItem.img} alt={genreItem.name} className='w-[15rem] h-[20rem] object-cover rounded-md' />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Genre