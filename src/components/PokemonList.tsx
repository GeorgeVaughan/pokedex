import { Link } from "react-router-dom";
import { PokemonOverview } from "../models/PokemonOverview";

type PokemonListProps = {
  pokemon: PokemonOverview[];
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
