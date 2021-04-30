import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  loadPokemonOverviews,
  selectPokemonOverviews,
  selectPokemonOverviewsLoadState,
} from "../reducers/pokemonOverviewsSlice";
import {
  Search,
  SearchSkeleton,
  SkeletonPlaceholder,
  UnorderedList,
  ListItem,
} from "carbon-components-react";

type PokemonListProps = {};

export const PokemonList = ({}: PokemonListProps) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const loadState = useSelector(selectPokemonOverviewsLoadState);
  const isLoading = loadState !== "complete";

  dispatch(loadPokemonOverviews());

  const pokemon = useSelector(selectPokemonOverviews);

  const filteredPokemon = pokemon.filter((x) =>
    x.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div>
      {isLoading ? (
        <SearchSkeleton />
      ) : (
        <Search
          labelText="Search Pokedex"
          placeholder="Search Pokedex"
          size="lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      )}
      {search.length > 0 && <h1>Results for "{search}"</h1>}
      {isLoading ? (
        new Array(3).fill(
          <SkeletonPlaceholder
            style={{ width: "100%", marginTop: "4px", height: "20px" }}
          />
        )
      ) : filteredPokemon.length === 0 ? (
        "No results found, try searching for a different pokemon"
      ) : (
        <UnorderedList>
          {filteredPokemon.map(({ name }) => (
            <ListItem key={name}>
              <Link to={`/pokemon/${name}`}>{name}</Link>
            </ListItem>
          ))}
        </UnorderedList>
      )}
    </div>
  );
};
