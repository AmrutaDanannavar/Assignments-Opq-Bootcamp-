import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [watchlist,setwatchlist] = useState([])
  let pagenumber=1

  const getMovies = async () => {
    try {
      const response = await fetch('http://www.omdbapi.com/?s=marvel&apikey=1a5ab762');
      const data = await response.json();
      if (data && data.Search) {
        setMovies(data.Search);
      } else {
        console.log('No results found');
      }
    } catch (err) {
      console.log('Fetching failed:', err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);


  let addtowatchlist = function(movie){
    let newwatchlist = [...watchlist,movie]
    localStorage.setItem('imdb',JSON.stringify(newwatchlist))
    setwatchlist(newwatchlist)
  }
  const removeFromWatchlist = (movie) => {
    const newWatchlist = watchlist.filter(entry => entry.imdbID !== movie.imdbID);
    localStorage.setItem('imdb', JSON.stringify(newWatchlist));
    setwatchlist(newWatchlist);
  };

  return (
    <div>
      <div className='text-2xl mb-8 font-bold text-center'>Trending Movies</div>
      <div className='flex flex-wrap'>
        { (
          movies.map((movie) => (
            <div
              key={movie.imdbID}
              className='w-[200px] h-[40vh] bg-center bg-cover flex items-end m-4 rounded-xl relative hover:scale-110 duration-300'
              style={{
                backgroundImage: `url(${movie.Poster !== "N/A" ? movie.Poster : "default_image_url_here"})`,
              }}
            > 
            {
              watchlist.some((entry)=>{
                  return entry.imdbID === movie.imdbID
                })?
                ( <div className='absolute right-2 top-2 ' onClick={() => removeFromWatchlist(movie)}> &#10060; </div>)
                :
                (<div className='absolute right-2 top-2' onClick={ ()=>{ addtowatchlist(movie) }}> &#128525; </div>)
            }
 
              <div className='text-white font-bold text-center bg-gray-900 bg-opacity-60 w-full rounded-b-xl'>
                {movie.Title}
              </div>
            </div>
          ))
        ) }
      </div>
      <Pagination pagenumber={1}/>
    </div>
  );
};

export default Movies;
