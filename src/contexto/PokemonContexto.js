import React, {useState, createContext, useEffect} from "react"
import { usePokemon } from "../hooks/usePokemon"

export const PokemonContexto = createContext()

export const PokemonProvider = ({ children }) => {
    const [pokemonNaPokedex, setPokemonNaPokedex] = useState([])
   
    useEffect(() => {
        if(pokemonNaPokedex.length){
            localStorage.setItem("pokemons", JSON.stringify(pokemonNaPokedex))
        }
    }, [pokemonNaPokedex])

    useEffect(() => {
        const pokemons = JSON.parse(localStorage.getItem("pokemons"))
        if(pokemons){
            setPokemonNaPokedex(pokemons)
        }
    }, [])

    const pokemon = usePokemon("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0")
    return (
        <PokemonContexto.Provider value={{pokemon, pokemonNaPokedex, setPokemonNaPokedex}}>
            {children}
        </PokemonContexto.Provider>
    )
}