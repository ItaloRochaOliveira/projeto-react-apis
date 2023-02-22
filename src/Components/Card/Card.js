import React, { useContext, useEffect, useState } from "react";
import axios from "axios"
import { BotaoCapturar, BotaoDetalhes, CaracteristicasDosPokemons, EspacoEntreItens, EstiloGeralDoCard, IdDoPokemon, ImagemDoPokemon, InfoDosPokemon, NomeDoPokemon, TipoDoPokemon } from "./styled";
import { PokemonContexto } from "../../contexto/PokemonContexto";

export const Card = ({
    namePokemon,
}) => {
    const {pokemonNaPokedex, setPokemonNaPokedex} = useContext(PokemonContexto)

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
            // console.log("normal: ",response.data.sprites.other.dream_world.front_default)
            // console.log("Gif: ", response.data.sprites.versions["generation-v"]["black-white"].animated.front_default)
        } catch(erro){
            console.log(erro.response)
        }
    }

    const capturarPokemon = (name) => {
        const temPokemon = pokemonNaPokedex.find((pokemon) => pokemon.name === name)
        if (temPokemon) {
            alert("Pokemon já está na pokedex")
        } else {
            setPokemonNaPokedex([...pokemonNaPokedex, {
                id: id,
                name: name,
                types: types,
                pokemonImage: pokemonImage,
            }])
        }
    }

    useEffect(() => {
        carregarPokemons()
    },
    [])
    return(   
        types.length > 0 && 
        <EstiloGeralDoCard key={name}>
        <InfoDosPokemon type={types[0].type.name}>
            <CaracteristicasDosPokemons>
                <IdDoPokemon>#{id}</IdDoPokemon>
                <NomeDoPokemon>{name} </NomeDoPokemon>
                {types.map((uniqueType) => {
                    return <TipoDoPokemon type={uniqueType.type.name}>{uniqueType.type.name}</TipoDoPokemon>
                })}
            </CaracteristicasDosPokemons>
            <EspacoEntreItens>
                <BotaoDetalhes onClick={() => console.log("entrou")}>detalhes</BotaoDetalhes >
                <BotaoCapturar onClick={() => capturarPokemon(name)}>capturar!</BotaoCapturar>
            </EspacoEntreItens>
             
        </InfoDosPokemon>
        <ImagemDoPokemon src={pokemonImage}/>
        
    </EstiloGeralDoCard>
    )
}