import { useState } from "react";
import { fetchPokemonDetails } from "../api/fetchPokemonDetails";
import { PokemonDetailsModel } from "../models/PokemonDetailsModel";

type PokemonDetailsProps = {
  name: string;
};

export const PokemonDetails = ({ name }: PokemonDetailsProps) => {
  const [details, setDetails] = useState(null as PokemonDetailsModel | null);

  if (details === null) {
    fetchPokemonDetails({ name }).then(setDetails);
  }

  return (
    <div>
      <div>Pokemon Details for: {name}</div>
      {details === null ? (
        <div>Loading...</div>
      ) : (
        <>
          <img src={details.imageUrl} alt={name} />
          <div>Types: {details.types.join(", ")}</div>
          <div>Abilities: {details.abilities.join(", ")}</div>
          <div>Weight: {details.weight}</div>
          <div>Height: {details.height}</div>
          <div>
            Stats:{" "}
            <div>
              {details.stats.map((stat) => (
                <div key={stat.name}>
                  {stat.name}: {stat.baseStat}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
