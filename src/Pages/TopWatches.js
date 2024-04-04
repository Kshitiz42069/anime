import React,{useState,useEffect} from 'react'

const images = [
    {url:'https://comicvine.gamespot.com/a/uploads/scale_medium/11136/111369808/6786544-one%20piece%201.jpg',title:'One Piece'},
    {url:'https://i.pinimg.com/736x/0b/68/2b/0b682bd40bd9c9d59f30a48fbdf09d92.jpg',title:'Dragon Ball Super'},
    {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPCNbipYSycERcRVasBVSfRcAkDoGxitjzs4bysgaw7A&s',title:'One Punch Man'},
    {url:'https://cdn.kobo.com/book-images/7569c154-0089-427e-b3a7-eb9594f85c22/1200/1200/False/high-school-dxd-vol-10-light-novel.jpg',title:'High School DXD'},
    {url:'https://i.animepahe.ru/posters/e7f7262505c87c37c2e17946ccea1edc1202289ccb99bf816fc8a109af1003a8.jpg',title:'Demon Slayer'},
    {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxiP36CHXWIIz3Xq2VUMqWozfx1hUxbUTAcAD4p5RFEw&s',title:'Naruto'},
    {url:'https://i.pinimg.com/originals/7d/f5/b0/7df5b0481d7d4c0dee7b7027161f9c1f.png',title:'Jujutsu Kaisen'},
    {url:'https://i.animepahe.ru/posters/47ed2740fbef2e45f396ce502fed1197adecc5a4aa3145c7d415b81d27b8843a.jpg',title:'I Was Reincarnated as the 7th Prince so I Can Take My Time Perfecting My Magical Ability'},
    {url:'https://i.animepahe.ru/posters/8ccdcd757a1307eb7ea1885728001c621585546cdee8e90ada8b262834d11430.jpg',title:'The Banished Former Hero Lives as He Pleases'}
  ];
  
  const TopWatches = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(()=>{
      const interval = setInterval(()=>{
        setCurrentSlide(prevSlide => (prevSlide === images.length-1 ? 0 :prevSlide+1));
      },2000);
      return () => clearInterval(interval);
    },[]);
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };
  
    return (
      <div className="relative w-full bg-black">
        <div className='title py-[4rem] ml-[2rem] '>
            <h1 className='text-white text-3xl md:text-5xl leading-[4rem] font-bold underline underline-offset-[16px]'>Top Rated anime</h1>
        </div>
        <div className="overflow-hidden">
          <div className=" w-[20rem] h-[90vh] flex md:gap-[2rem] mx-[2rem] transition-transform duration-300 ease-in-out transform" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {images.map((image, index) => (
              <div key={index} className="w-full h-[40rem] ml-[0.1rem] flex-shrink-0">
                <img src={image.url} alt={`Slide ${index + 1}`} className="w-[18rem] md:w-full h-[30rem] rounded-[20px]" />
                <p className='text-white font-semibold mt-[2rem] mx-6'>{image.title}</p>
              </div>
            ))}
          </div>
        </div>
        <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 text-white px-2 py-1 rounded-full z-10">←</button>
        <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 text-white px-2 py-1 rounded-full z-10">→</button>
      </div>
    );
  };
  

export default TopWatches