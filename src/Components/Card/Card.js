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

    const [data, isLoading, erro] = usePokemon(`https://pokeapi.co/api/v2/pokemon/`, namePokemon, {})
           
            // console.log("normal: ",response.data.sprites.other.dream_world.front_default)
            // console.log("Gif: ", response.data.sprites.versions["generation-v"]["black-white"].animated.front_default)
      

    const capturarPokemon = (name) => {
        const temPokemon = pokemonNaPokedex.find((pokemon) => pokemon.name === name)
        if (temPokemon) {
            alert("Pokemon já está na pokedex")
        } else {
            setPokemonNaPokedex([...pokemonNaPokedex, {
                id: data.id,
                name: data.name,
                types: data.types,
                pokemonImage: data.sprites.other.dream_world.front_default,
            }])
        }
    }
    return( 
        data.name !== undefined &&
        <EstiloGeralDoCard key={data.id}>
            <InfoDosPokemon type={data.types[0]?.type.name}>
                <CaracteristicasDosPokemons>
                    <IdDoPokemon>#{data.id}</IdDoPokemon>
                    <NomeDoPokemon>{data.name} </NomeDoPokemon>
                    {data.types.map((uniqueType) => {
                        return <TipoDoPokemon type={uniqueType.type.name}>{uniqueType.type.name}</TipoDoPokemon>
                    })}
                </CaracteristicasDosPokemons>
                <EspacoEntreItens>
                    <BotaoDetalhes onClick={() => detalhesDoPokemon(navigate, data.name)}>detalhes</BotaoDetalhes >
                    <BotaoCapturar onClick={() => capturarPokemon(data.name)}>capturar!</BotaoCapturar>
                </EspacoEntreItens>
                
            </InfoDosPokemon>
            <ImagemDoPokemon src={data.sprites.other.dream_world.front_default}/>
        
    </EstiloGeralDoCard>
    )
}