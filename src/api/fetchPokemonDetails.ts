import { PokemonDetailsModel } from "../models/PokemonDetailsModel";
import { pokemonEndpoint } from "./pokemonEndpoint";

type Response = {
  weight: number;
  sprites: {
    front_default: string;
  };
};

type fetchPokemonDetailsParams = {
  name: string;
};

export const fetchPokemonDetails = async ({
  name,
}: fetchPokemonDetailsParams) => {
  const response: Response = await fetch(
    `${pokemonEndpoint}/pokemon/${name}`
  ).then((res) => res.json());
  console.log(response);
  const pokemonDetails: PokemonDetailsModel = {
    imageUrl: response.sprites.front_default,
    weight: response.weight,
  };
  return pokemonDetails;
};
