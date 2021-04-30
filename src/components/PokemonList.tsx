import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  loadPokemonOverviews,
  selectPokemonOverviews,
} from "../reducers/pokemonOverviewsSlice";

type PokemonListProps = {};

export const PokemonList = ({}: PokemonListProps) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  dispatch(loadPokemonOverviews());

  const pokemon = useSelector(selectPokemonOverviews);

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
