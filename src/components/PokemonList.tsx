import { useState } from "react";
import { Link } from "react-router-dom";
import { PokemonOverviewModel } from "../models/PokemonOverviewModel";

type PokemonListProps = {
  pokemon: PokemonOverviewModel[];
};

export const PokemonList = ({ pokemon }: PokemonListProps) => {
  const [search, setSearch] = useState("");

  const filteredPokemon = pokemon.filter((x) =>
    x.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div>
      Search:{" "}
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      {filteredPokemon.map(({ name }) => (
        <div key={name}>
          <Link to={`/pokemon/${name}`}>{name}</Link>
        </div>
      ))}
    </div>
  );
};
