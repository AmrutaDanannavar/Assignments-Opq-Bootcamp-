import React from 'react';
import img2 from '../Images/p1.jpg';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const PokemonCard = ({ searchQuery, }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://pokeapi.co/api/v2/pokemon?limit=40')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const fetches = data.results.map(pokemon =>
          fetch(pokemon.url)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
        );
        return Promise.all(fetches);
      })
      .then(pokemonDetails => {
        setPokemonData(pokemonDetails);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }
  const query = searchQuery || '';

  const filteredPokemon = pokemonData.filter(pokemon =>
    pokemon.name.toLowerCase().includes(query.toLowerCase()) ||
    pokemon.types.some(type => type.type.name.toLowerCase().includes(query.toLowerCase()))
  );

  const addToTeam = (pokemon) => {
    const storedTeam = JSON.parse(localStorage.getItem('name')) || [];
    if (storedTeam.length >= 6) {
      toast.error('Team is full');
      return;
    }
    if (!storedTeam.find(p => p.id === pokemon.id)) {
      const newTeam = [...storedTeam, pokemon];
      localStorage.setItem('name', JSON.stringify(newTeam));
      toast.success(`${pokemon.name} added to team`);
    } else {
      toast.info('Pokemon is already in the team');
    }
  };

  return (
    <div className='mt-28'>
      <div className=' flex flex-row flex-wrap gap-10 p-4 ml-7 '>

        {filteredPokemon.map(pokemon => (
          <div key={pokemon.id} className='w-48 h-56 border hover:-translate-y-1 hover:scale-105  hover:shadow-lg mb-4'>
            <img src={pokemon.sprites.front_default} className='h-36 w-48 p-2' alt={pokemon.name} />
            <h1 className='text-black text-center pb-2 font-bold text-xl'>{pokemon.name}</h1>
            <h2 className='text-lg text-center text-purple'>
              {pokemon.types[0]?.type.name}
            </h2>
            <button onClick={() => { addToTeam(pokemon) }}
              className='w-full bg-purple-800 text-white p-2 mt-2 hover:bg-purple-600' >
              Add to Team
            </button>
          </div>
        ))}


      </div>
    </div>
  )
}

export default PokemonCard
