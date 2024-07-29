import React from 'react';

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';


const TeamDisplay = () => {
  
  const [team, setteam] = useState(JSON.parse(localStorage.getItem('name')))
  console.log(team)

  useEffect(() => {
    const storedTeam = JSON.parse(localStorage.getItem('name')) || [];
    setteam(storedTeam);
  }, []);
  const removeFromTeam = (pokemonId) => {
    const updatedTeam = team.filter(pokemon => pokemon.id !== pokemonId);
    localStorage.setItem('name', JSON.stringify(updatedTeam));
    toast.success(`pokemon is  removed from team`);
    setteam(updatedTeam);
  };

  return (
    
    <div className='mt-28'>
      <div className=' flex flex-row flex-wrap gap-10 p-4 ml-7 '>

        {team.map(pokemon => (
          <div key={pokemon.id} className='w-48 h-56 border hover:-translate-y-1 hover:scale-105  hover:shadow-lg mb-4'>
            <img src={pokemon.sprites.front_default} className='h-36 w-48 p-2' alt={pokemon.name} />
            <h1 className='text-black text-center pb-2 font-bold text-xl'>{pokemon.name}</h1>
            <h2 className='text-lg text-center text-purple'>
              {pokemon.types[0]?.type.name}
            </h2>
            <button onClick={() => removeFromTeam(pokemon.id)}
              className='w-full bg-purple-800 text-white p-2 mt-2 hover:bg-purple-600' >
              Remove
            </button>
          </div>
        ))}


      </div>
    </div>
  )
}

export default TeamDisplay
