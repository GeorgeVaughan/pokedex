import { Link } from "react-router-dom";
import { PokemonOverviewModel } from "../models/PokemonOverviewModel";

type PokemonListProps = {
  pokemon: PokemonOverviewModel[];
};

export const PokemonList = ({ pokemon }: PokemonListProps) => {
  return (
    <div>
      {pokemon.map(({ name }) => (
        <div>
          <Link to={`/pokemon/${name}`}>{name}</Link>
        </div>
      ))}
    </div>
  );
};
