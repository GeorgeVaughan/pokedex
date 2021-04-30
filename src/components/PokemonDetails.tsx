import { useDispatch, useSelector } from "react-redux";
import {
  loadPokemonDetails,
  selectPokemonDetails,
} from "../reducers/pokemonDetailsSlice";
import { PokemonDetailsEntry } from "./PokemonDetailsEntry";

type PokemonDetailsProps = {
  name: string;
};

export const PokemonDetails = ({ name }: PokemonDetailsProps) => {
  const dispatch = useDispatch();

  dispatch(loadPokemonDetails(name));
  const details = useSelector(selectPokemonDetails(name));

  return (
    <div>
      <h1>Pokemon Details for: {name}</h1>
      {details == null ? (
        <div>Loading...</div>
      ) : (
        <>
          <img src={details.imageUrl} alt={name} />
          <div>
            <PokemonDetailsEntry name="Types">
              {details.types.join(", ")}
            </PokemonDetailsEntry>
            <PokemonDetailsEntry name="Abilities">
              {details.abilities.join(", ")}
            </PokemonDetailsEntry>
            <PokemonDetailsEntry name="Weight">
              {details.weight}
            </PokemonDetailsEntry>
            <PokemonDetailsEntry name="Height">
              {details.height}
            </PokemonDetailsEntry>
          </div>
          <div>
            <h2>Stats:</h2>
            {details.stats.map((stat) => (
              <div key={stat.name}>
                <PokemonDetailsEntry name={stat.name}>
                  {stat.baseStat}
                </PokemonDetailsEntry>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
