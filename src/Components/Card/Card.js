import React, { useContext, useEffect, useState } from "react";
import axios from "axios"
import { BotaoCapturar, BotaoDetalhes, CaracteristicasDosPokemons, EspacoEntreItens, EstiloGeralDoCard, IdDoPokemon, ImagemDoPokemon, InfoDosPokemon, NomeDoPokemon, TipoDoPokemon } from "./styled";
import { PokemonContexto } from "../../contexto/PokemonContexto";
import { detalhesDoPokemon } from "../../routes/coordinato";
import { useNavigate } from "react-router-dom";
import { usePokemon } from "../../customHooks/usePokemon";

export const Card = ({
    namePokemon,
}) => {
    const navigate = useNavigate()

    const {pokemonNaPokedex, setPokemonNaPokedex} = useContext(PokemonContexto)

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [types, setTypes] = useState([])
    const [pokemonImage, setPokemonImage] = useState("")

    const [data, isLoading, erro] = usePokemon(`https://pokeapi.co/api/v2/pokemon/`, namePokemon, {})
    console.log(data)
            setId(data.id)
            console.log(id)
            // setName(data.response.data.name)
            // setTypes(data.response.data.types)
            // setPokemonImage(data.response.data.sprites.other.dream_world.front_default)
            // console.log("normal: ",response.data.sprites.other.dream_world.front_default)
            // console.log("Gif: ", response.data.sprites.versions["generation-v"]["black-white"].animated.front_default)
      

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
    
    return(   <></>
    //     types.length > 0 && 
    //     <EstiloGeralDoCard key={name}>
    //     <InfoDosPokemon type={types[0].type.name}>
    //         <CaracteristicasDosPokemons>
    //             <IdDoPokemon>#{id}</IdDoPokemon>
    //             <NomeDoPokemon>{name} </NomeDoPokemon>
    //             {types.map((uniqueType) => {
    //                 return <TipoDoPokemon type={uniqueType.type.name}>{uniqueType.type.name}</TipoDoPokemon>
    //             })}
    //         </CaracteristicasDosPokemons>
    //         <EspacoEntreItens>
    //             <BotaoDetalhes onClick={() => detalhesDoPokemon(navigate, name)}>detalhes</BotaoDetalhes >
    //             <BotaoCapturar onClick={() => capturarPokemon(name)}>capturar!</BotaoCapturar>
    //         </EspacoEntreItens>
             
    //     </InfoDosPokemon>
    //     <ImagemDoPokemon src={pokemonImage}/>
        
    // </EstiloGeralDoCard>
    )
}