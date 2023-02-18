import React, { useEffect, useState } from "react";
import axios from "axios"
import { BotaoCapturar, BotaoDetalhes, CaracteristicasDosPokemons, EspacoEntreItens, EstiloGeralDoCard, IdDoPokemon, ImagemDoPokemon, InfoDosPokemon, NomeDoPokemon, TipoDoPokemon } from "./styled";

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
            setPokemonImage(response.data.sprites.other.dream_world.front_default)
            console.log(response.data)
            
            
        } catch(erro){
            console.log(erro.response)
        }
    }
    useEffect(() => {
        carregarPokemons()
    },
    [])
    return(   
        types.length > 0 && 
        <EstiloGeralDoCard>
        <InfoDosPokemon type={types[0].type.name}>
            <CaracteristicasDosPokemons>
                <NomeDoPokemon>#{id}</NomeDoPokemon>
                <IdDoPokemon>{name} </IdDoPokemon>
                {types.map((uniqueType) => {
                    console.log(uniqueType)
                    return <TipoDoPokemon type={uniqueType.type.name}>{uniqueType.type.name}</TipoDoPokemon>
                })}
            </CaracteristicasDosPokemons>
            <EspacoEntreItens>
                <BotaoDetalhes onClick={() => console.log("entrou")}>detalhes</BotaoDetalhes >
                <BotaoCapturar>capturar!</BotaoCapturar>
            </EspacoEntreItens>
             
        </InfoDosPokemon>
        <ImagemDoPokemon src={pokemonImage}/>
        
    </EstiloGeralDoCard>
    )
}