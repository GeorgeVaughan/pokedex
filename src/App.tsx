import { useState } from 'react';
import { PokemonList } from './components/PokemonList';
import { PokemonOverview } from './models/PokemonOverview';
import { fetchPokemonOverviews } from './api/fetchPokemonOverviews';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

function App() {
  const [pokemonOverviews, setPokemonOverviews] = useState([] as PokemonOverview[]);

  if(pokemonOverviews.length === 0) {
    fetchPokemonOverviews().then(setPokemonOverviews);
  }
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <PokemonList pokemon={pokemonOverviews}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
