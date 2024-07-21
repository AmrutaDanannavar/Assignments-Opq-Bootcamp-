import React, { useState } from 'react'

const Watchlist = () => {

  const[favouritelist,setfavourite]= useState(JSON.parse(localStorage.getItem('imdb')))
  console.log(favouritelist)

  let removehandler=(movie)=>{
    let newfavlist = favouritelist.filter((ele)=>{
      return ele.imdbID!= movie.imdbID
    })
    localStorage.setItem('imdb',JSON.stringify(newfavlist))
    setfavourite(newfavlist)
  }

  return (
    <div>
      {
        <table className='   w-full mt-4 text-left table-auto '>
          <thead className='mb-4'>
            <tr  className='text-purple-900 text-2xl border-b-4 border-gray-300'>
              <th>Name</th>
              <th>Year</th>
              <th>Type</th>
            </tr>
            

          </thead>
          <tbody className='mt-3'>
          {favouritelist.map((movie) => {
            console.log(movie);
            return (
              <tr key={movie.imdbID} className='border-b border-gray-300'>
                <td >
                  {movie.Title}
                  <img className=" h-auto w-[3rem] rounded-full" src={movie.Poster} alt={`${movie.Title} poster`} />
                </td>
                <td>{movie.Year}</td>
                <td>{movie.Type}</td>
                <td><button className='w-20 text-white bg-red-700' onClick={()=>{removehandler(movie)}}>Remove</button></td>
              </tr>
            );
          })}
          </tbody>
        </table>
      }

    </div>
  )
}

export default Watchlist
