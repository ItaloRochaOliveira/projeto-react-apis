export const irParaHome = (navigate) => {
    navigate("/")
}

export const irParaPokedex = (navigate) => {
    navigate("/pokedex")
}

export const adicionarPokemonPokedex = (navigate, name) => {
    navigate(`/pokedex/${name}`)
}