import axios from "axios"
import { useEffect, useState } from "react"

export const useCarregarPokemons = (name) => {
    const [data, setData] = useState([])
    const [carregando, setCarregando] = useState(false)
    const [erro, setErro] = useState(false)

    useEffect(() => {
        name && name.map((pokemon) => {
            setCarregando(true)
            // return
             axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            .then((res) => {
                setCarregando(false)
                
                const salvarPokemon = [...data]
                salvarPokemon.push(res.data)
                setData(salvarPokemon)
    
                // return res.data
            })
            .catch((err) => {
                console.log(err.response)
                setCarregando(false)
                setErro(true)
            })  
        })
    },
    [name])
    return data
}