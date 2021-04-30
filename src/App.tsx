import { PokemonList } from "./components/PokemonList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PokemonDetails } from "./components/PokemonDetails";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            path="/pokemon/:name"
            render={({ match }) => <PokemonDetails name={match.params.name} />}
          />
          <Route path="/">
            <PokemonList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
