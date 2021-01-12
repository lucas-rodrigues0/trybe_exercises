import React from 'react';
import './App.css';

import Pokedex from './Pokedex';
import pokemons from './data';


function App() {
  return (
    <main className="App">
      <Pokedex input={pokemons}/>
      
    </main>
  );
}

export default App;
