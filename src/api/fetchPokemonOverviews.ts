import { PokemonOverview } from "../models/PokemonOverview";

type Response = {
  count: number;
  next: string;
  previous?: string;
  results: PokemonOverview[];
};

export const fetchPokemonOverviews = async () => {
  const response: Response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  ).then((res) => res.json());
  return response.results;
};
