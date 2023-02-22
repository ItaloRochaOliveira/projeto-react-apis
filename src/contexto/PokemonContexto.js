import React, {useState, useEffect, createContext} from "react"
import axios from "axios"

export const PokemonContexto = createContext()

export const PokemonProvider = ({ children }) => {
    const [pokedex, setPokedex] = useState([])
    const [pokemonNaPokedex, setPokemonNaPokedex] = useState([])
   
    const carregarPokedex = async() => {
        try{
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0")
            setPokedex(response.data.results)
        } catch(erro){
            console.log(erro.response)
        }
    }

    useEffect(() => {
        carregarPokedex()
    },
    [])

    return (
        <PokemonContexto.Provider value={{pokedex, pokemonNaPokedex, setPokemonNaPokedex}}>
            {children}
        </PokemonContexto.Provider>
    )
}