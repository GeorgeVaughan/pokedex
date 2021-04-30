import { PokemonList } from "./components/PokemonList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PokemonDetails } from "./components/PokemonDetails";
import { Header, HeaderName } from "carbon-components-react";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header aria-label="Pokedex">
          <HeaderName href="#" prefix="Pokemon">
            Pokedex
          </HeaderName>
        </Header>
        <div style={{ marginTop: "30px" }}>
          <Switch>
            <Route
              path="/pokemon/:name"
              render={({ match }) => (
                <PokemonDetails name={match.params.name} />
              )}
            />
            <Route path="/">
              <PokemonList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
