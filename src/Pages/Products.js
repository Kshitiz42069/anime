import React from 'react'


const animes = [
    {img:'https://i.animepahe.ru/posters/ef832b4f00f29f90a50821c3b7743225b2a34b5dd3d4290f31b1bf1c4a5e74de.jpg',name:'Dragon Ball Super',price:'$29.99',rating:'5'},
    {img:'https://i.animepahe.ru/posters/355e6e3127aa31f0d806114169b52c4fb6da4b87df7f9c1809b9e3de97b8aac5.jpg',name:'One Piece',price:'$25.99',rating:'4'},
    {img:'https://i.animepahe.ru/posters/32d253927050e566c83aecb88e0391a12cf1ad1ef4aecca7f55cee201f4e4cb5.jpg',name:'Naruto',price:'$19.99',rating:'4'},
    {img:'https://i.animepahe.ru/posters/e7f7262505c87c37c2e17946ccea1edc1202289ccb99bf816fc8a109af1003a8.jpg',name:'Demon Slayer',price:'$49.99',rating:'3.7'},
    {img:'https://i.animepahe.ru/posters/5bd8fd820668b5f91bf835e790e9f3036af3af11bc71d6e4b3d95e51d68b194c.jpg',name:'Horimiya',price:'$19.99',rating:'3.5'},
    {img:'https://i.animepahe.ru/posters/4c4f7340e2a1f66c9d339800b11eaa872548c251f5dce7b70a641d6a66aa3ca9.jpg',name:'Vinland Saga',price:'$20.99',rating:'5'},
    {img:'https://i.animepahe.ru/posters/2a11f04a1a37c9e6dc2fd998564edfcb460324c9eed526df57d244e20a9f3ae8.jpg',name:'Redo of Healer',price:'$19.99',rating:'3'},
    {img:'https://i.animepahe.ru/posters/19a68cbfed82c21304983b220f7d2ca5d870dd14f50229a63c390f4376711250.jpg',name:'Jujutsu Kaisen',price:'$21.99',rating:'4'},
]

function Products({addToCart}) {
    const handleAddToCart = (anime) => {
        addToCart(anime);
      };
  return (
    <div className='p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4 bg-black'>
        {animes.map((anime, index) => (
            <div key={index} className='border-2 border-[#D5005B] p-4 rounded-lg shadow-md hover:scale-105'>
                <img src={anime.img} alt={anime.name} className='w-full h-[30rem] object-cover rounded-md mb-4' />
                <div className='text-center'>
                    <div className='flex justify-evenly'>
                        <p className='text-lg font-semibold text-white'>{anime.name}</p>
                        <div>
                            {Array.from({length: parseInt(anime.rating,6)}).map((_,i)=>(
                                <span key={i} >⭐</span>
                            ))}
                        </div>
                    </div>
                    <div className='flex justify-evenly mt-3'>
                        <p className='text-white mt-3 text-lg'>{anime.price}</p>
                        <button onClick={() => handleAddToCart(anime)} className='mt-2 px-4 py-2 bg-[#D5005B] text-white rounded-lg hover:bg-[#d5005c73]'>Add to Cart</button>
                    </div>
                    
                </div>
            </div>
        ))}
    </div>
  )
}

export default Products