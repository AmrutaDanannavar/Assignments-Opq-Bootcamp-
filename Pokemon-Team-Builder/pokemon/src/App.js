import React, { useState } from 'react';
import './App.css';
import PokemonCard from './Components/PokemonCard';
import SearchBar from './Components/SearchBar';
import TeamDisplay from './Components/TeamDisplay';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function App() {
  const [searchQuery, setSearchQuery] = useState('');


  // Function to handle adding Pokémon to the team

  return (

    <BrowserRouter>
    <div>
        
      
     <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />  
      <Routes>
        <Route path="/" element={
          <>
          
            <PokemonCard searchQuery={searchQuery}  />
          </>
        } />
        
        <Route path="/team-display" element={<TeamDisplay  />} />
      </Routes>
      <ToastContainer position="top-center"/>
    </div>
  </BrowserRouter>




      

   

  );
}

export default App;
