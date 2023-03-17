export const excluirPokemon = (
  name,
  pokemonNaPokedex,
  setPokemonNaPokedex,
  onOpen,
  onClose
) => {
  onOpen();
  setTimeout(() => {
    const pokemon = pokemonNaPokedex.filter((pokemon) => pokemon.name !== name);
    setPokemonNaPokedex(pokemon);
    onClose();
  }, 1000);
};
