import { PokemonDetailsModel } from "../models/PokemonDetailsModel";
import { pokemonEndpoint } from "./pokemonEndpoint";

type Response = {
  weight: number;
  height: number;
  sprites: {
    front_default: string;
  };
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
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
    imageUrl: response.sprites.front_default,
    types: response.types.sort((x) => x.slot).map((x) => x.type.name),
    abilities: response.abilities
      .sort((x) => x.slot)
      .map((x) => x.ability.name),
    stats: response.stats.map((x) => ({
      name: x.stat.name,
      baseStat: x.base_stat,
    })),
    weight: response.weight,
    height: response.height,
  };
  return pokemonDetails;
};
