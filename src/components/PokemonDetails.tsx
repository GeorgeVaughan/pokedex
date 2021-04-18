type PokemonDetailsProps = {
  name: string;
};

export const PokemonDetails = ({ name }: PokemonDetailsProps) => {
  return <div>Pokemon Details for: {name}</div>;
};
