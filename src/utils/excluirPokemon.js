
export const excluirPokemon = (name, pokemonNaPokedex, setPokemonNaPokedex) => {  
    const pokemon = pokemonNaPokedex.filter((pokemon) => pokemon.name !== name)
    setPokemonNaPokedex(pokemon)
}