import { PokemonOverviewModel } from "../models/PokemonOverviewModel";
import { pokemonEndpoint } from "./pokemonEndpoint";

type Response = {
  count: number;
  next: string;
  previous?: string;
  results: PokemonOverviewModel[];
};

export const fetchPokemonOverviews = async () => {
  const response: Response = await fetch(
    `${pokemonEndpoint}/pokemon?limit=151`
  ).then((res) => res.json());
  return response.results;
};
