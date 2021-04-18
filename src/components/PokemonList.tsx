import { PokemonOverview } from "../models/PokemonOverview"

type PokemonListProps = {
    pokemon: PokemonOverview[];
}

export const PokemonList = ({pokemon}: PokemonListProps) => {
    return <div>{pokemon.map(({name}) => <div>{name}</div>)}</div>
}