import React from 'react';
import img1 from '../Images/logo.jpg';
import { Link, useLocation } from 'react-router-dom';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const location = useLocation();
    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };
    const showSearchInput = location.pathname !== '/team-display';
    return (
        <div>
            <div className='bg-purple-800 h-20  flex items-center fixed top-0 w-full '>
                <img src={img1} className='w-15 h-14  rounded-full ml-7' />
                <Link to="/" className='text-white text-2xl  pl-4'>Pokemons</Link>
                <div className='flex-grow text-center'>
                    {showSearchInput && (
                        <div className='inline-flex'>
                            <input
                                type="text"
                                placeholder="Search For Pokemon"
                                className="text-black rounded-full p-2 w-96 "
                                value={searchQuery}
                                onChange={handleInputChange}
                            />
                        </div>
                    )}
                </div>
                <Link to="/team-display" className='text-white text-2xl pr-14   '>TeamDisplay</Link>

            </div>
        </div>


    )
}

export default SearchBar
