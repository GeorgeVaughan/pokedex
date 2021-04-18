import { PokemonDetailsModel } from "../models/PokemonDetailsModel";
import { pokemonEndpoint } from "./pokemonEndpoint";

type Response = {
  weight: number;
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
  const pokemonDetails: PokemonDetailsModel = {
    weight: response.weight,
  };
  return pokemonDetails;
};
