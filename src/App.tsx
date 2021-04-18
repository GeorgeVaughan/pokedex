import { useState } from 'react';
import { PokemonList } from './components/PokemonList';
import { PokemonOverview } from './models/PokemonOverview';
import { fetchPokemonOverviews } from './api/fetchPokemonOverviews';

import './App.css';

function App() {
  const [pokemonOverviews, setPokemonOverviews] = useState([] as PokemonOverview[]);

  if(pokemonOverviews.length === 0) {
    fetchPokemonOverviews().then(setPokemonOverviews);
  }
  return (
    <div className="App">
      <PokemonList pokemon={pokemonOverviews}/>
    </div>
  );
}

export default App;
