import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

function Nav({countcart}) {
  const [menu, setMenu] = useState(false);
  const toggle =()=>{
    setMenu(!menu);
  }

  return (
    <div className={`flex justify-between md:justify-evenly bg-black`}>
        <div className='pr-[3rem] md:block'>
          <Link to={'/home'}>
            <img src={require("../assets/logo.png")} alt="logo" className='h-[6rem] md:block w-[6rem]'/>
          </Link>
        </div>
        <div className={`${menu ? 'block':'hidden'} flex flex-col tag md:text-md`}>
            <Link to={'/home'} onClick={toggle}><button className='nav'>Home</button></Link>
            <Link to={'/news'} onClick={toggle}><button className='nav'>News</button></Link>
            <Link to={'/discover'} onClick={toggle}><button className='nav'>Discover</button></Link>
            <Link to={'/products'} onClick={toggle}><button className='nav'>Products</button></Link>
        </div>
        <div className='flex'>
        <div className='mt-[2rem] text-white w-[2rem] flex'>
          <Link to='/cart'>
            <AddShoppingCartIcon className='cursor-pointer mt-2 ' fontSize='medium'/>
          </Link>
            <p className='text-sm lg:text-md' >{countcart}</p>
        </div>
        <div className='md:hidden text-white mt-[2rem] ml-[1rem]'>
            <MenuIcon onClick={toggle}/>
        </div>
        </div>
    </div>
  )
}

export default Nav