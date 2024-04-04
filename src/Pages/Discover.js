import React, {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Discover() {
    const prods = [
        {img:'https://i.animepahe.ru/posters/ef832b4f00f29f90a50821c3b7743225b2a34b5dd3d4290f31b1bf1c4a5e74de.jpg',name:'Dragon Ball Super'},
        {img:'https://i.animepahe.ru/posters/355e6e3127aa31f0d806114169b52c4fb6da4b87df7f9c1809b9e3de97b8aac5.jpg',name:'One Piece'},
        {img:'https://i.animepahe.ru/posters/32d253927050e566c83aecb88e0391a12cf1ad1ef4aecca7f55cee201f4e4cb5.jpg',name:'Naruto'},
        {img:'https://i.animepahe.ru/posters/e7f7262505c87c37c2e17946ccea1edc1202289ccb99bf816fc8a109af1003a8.jpg',name:'Demon Slayer'},
        {img:'https://i.animepahe.ru/posters/5bd8fd820668b5f91bf835e790e9f3036af3af11bc71d6e4b3d95e51d68b194c.jpg',name:'Horimiya'},
        {img:'https://i.animepahe.ru/posters/4c4f7340e2a1f66c9d339800b11eaa872548c251f5dce7b70a641d6a66aa3ca9.jpg',name:'Vinland Saga'},
        {img:'https://i.animepahe.ru/posters/2a11f04a1a37c9e6dc2fd998564edfcb460324c9eed526df57d244e20a9f3ae8.jpg',name:'Redo of Healer'},
        {img:'https://i.animepahe.ru/posters/19a68cbfed82c21304983b220f7d2ca5d870dd14f50229a63c390f4376711250.jpg',name:'Jujutsu Kaisen'},
        {img:'https://i.animepahe.ru/posters/4740222bbd119f0f2025ca5bbb6ab0354d68e63f34f540784897dc8c3313cec6.jpg',name:'Gods: Game We Play'},
        {img:'https://i.animepahe.ru/posters/ffa6706f820e38d48b3b65ecc869070d6d18dc54019dc43ff4cc07682fd51885.jpg',name:'Ragna Crimson'},
    ]

    const [search, setSearch] = useState('');

    const handlechange = (e) => {
        setSearch(e.target.value);
    }

    const filtered = prods.filter(anime =>
        anime.name.toLowerCase().includes(search.toLowerCase())
        );
  return (
    <div className='discover'>
        <div className='bg-black pt-[2rem]'>
            <div className='bg-white mx-6 w-[20rem] md:w-[45rem] lg:ml-[20rem] rounded-md lg:h-[2rem] p-[0.5px]'>
                <input 
                    type="text" 
                    className=' pr-[5rem] md:pr-[30rem] lg:pr-[25rem] ml-[1rem] outline-none text-sm lg:text-xl'
                    placeholder='Search for anime...'
                    onChange={handlechange}
                    value={search}
                />
                <SearchIcon/>
            </div>
        </div>
        <div className='p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4 bg-black py-[5rem]'>
            {filtered.map((anime,index)=>(
                <div key={index} className='border-2 border-[#D5005B] p-4 rounded-lg shadow-md'>
                <img src={anime.img} alt={anime.name} className='w-full h-[30rem] object-cover rounded-md mb-4' />
                <div className='text-center'>
                    <p className='text-lg font-semibold text-white'>{anime.name}</p>
                </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Discover