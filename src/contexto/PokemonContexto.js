import React, {useState, createContext} from "react"
import { usePokemon } from "../hooks/usePokemon"

export const PokemonContexto = createContext()

export const PokemonProvider = ({ children }) => {
    const [pokemonNaPokedex, setPokemonNaPokedex] = useState([])
   
    const pokemon = usePokemon("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0")

    // [{name: "bulbasaur"}, {name: "raticate"}, {name: "rattata"}]
    // const pokemon = usePokemon(`https://pokeapi.co/api/v2/pokemon/`, dataPokedex, [], "pokemon")
    // console.log("linha 13 do returno do hook usePokemon na contexto:", pokemon)

    return (
        <PokemonContexto.Provider value={{pokemon, pokemonNaPokedex, setPokemonNaPokedex}}>
            {children}
        </PokemonContexto.Provider>
    )
}