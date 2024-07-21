import React from 'react';

import Logo from '../m1.jpg';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
        <nav className='flex flex-row space-x-8 justify-start bg-slate-200 h-20  border items-center pl-6 '>
            <img src={Logo} className='w-14  '/>
            <Link to="/">Movies</Link>
            <Link to="/watchlist" >Watchlist</Link>
        </nav>
      
    </div>
  )
}

export default Navbar
