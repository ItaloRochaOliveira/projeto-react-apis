import React, { useEffect, useState } from "react";
import axios from "axios"
import { CorDoCard } from "./styled";

export const Card = ({
    namePokemon,
}) => {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [types, setTypes] = useState([])
    const [pokemonImage, setPokemonImage] = useState("")
    const carregarPokemons = async() => {
        try{
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
            setId(response.data.id)
            setName(response.data.name)
            setTypes(response.data.types)
            setPokemonImage(response.data.sprites.front_default)
            console.log(response.data.sprites)
            
        } catch(erro){
            console.log(erro.response)
        }
    }
    useEffect(() => {
        carregarPokemons()
    },
    [])
    return(
        
        <CorDoCard type={types[0].type.name}>
            {console.log(types[0].type.name)}
            <div>
                <div>
                    <p>{name} </p>
                    <p>{id}</p>
                    {types.map((uniqueType) => {
                        return <p>{uniqueType.type.name}</p>
                    })}
                </div>
                <img src={pokemonImage}/> 
            </div>
            <div>
                <button>detalhes</button>
                <button>capturar!</button>
            </div>
        </CorDoCard>
    )
}