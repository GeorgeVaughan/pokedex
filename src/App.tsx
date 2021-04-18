import { useState } from "react";
import { PokemonList } from "./components/PokemonList";
import { PokemonOverviewModel } from "./models/PokemonOverviewModel";
import { fetchPokemonOverviews } from "./api/fetchPokemonOverviews";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PokemonDetails } from "./components/PokemonDetails";

import "./App.css";

function App() {
  const [pokemonOverviews, setPokemonOverviews] = useState(
    [] as PokemonOverviewModel[]
  );

  if (pokemonOverviews.length === 0) {
    fetchPokemonOverviews().then(setPokemonOverviews);
  }
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            path="/pokemon/:name"
            render={({ match }) => <PokemonDetails name={match.params.name} />}
          />
          <Route path="/">
            <PokemonList pokemon={pokemonOverviews} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
