import React from "react";

function Cart({ selectedItems,removeFromCart }) {
    const handleRemoveFromCart = (item) => {
        removeFromCart(item);
    };
  return (
    <div className='p-6 md:p-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full bg-black '>
        {selectedItems.length===0?(
            <>
                <div className="relative w-[90vw] h-[100vh]">
                    <img src={require('../assets/register.jpeg')} alt="" className="w-full rounded-xl"/>
                </div>
                <div className="absolute">
                    <h1 className=" text-md lg:text-7xl text-[#4F5C6C] text-center w-[13rem] md:w-[20rem] lg:w-[30rem] mt-[2rem] md:mt-[3rem] lg:mt-[6rem] ml-[7rem] md:text-2xl md:ml-[18rem] lg:ml-[35rem] font-semibold">There are no items in the cart  ?!!</h1>
                </div>
            </>
        ):(
            selectedItems.map((anime, index) => (
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
                        <p className='text-white mt-3 text-lg p-2 '>{anime.price}</p>
                        <button onClick={() => handleRemoveFromCart(anime)} className='mt-2 px-4 py-2 bg-[#D5005B] text-white rounded-lg hover:bg-[#d5005c73]'>Remove</button>
                    </div>
                </div>
            </div>
        ))
        )}
        
    </div>
  );
}

export default Cart;