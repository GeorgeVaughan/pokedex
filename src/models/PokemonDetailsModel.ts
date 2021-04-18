export type PokemonDetailsModel = {
  imageUrl: string;
  types: string[];
  stats: {
    name: string;
    baseStat: number;
  }[];
  abilities: string[];
  weight: number;
  height: number;
};
