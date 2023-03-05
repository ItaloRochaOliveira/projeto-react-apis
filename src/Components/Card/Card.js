import React, { useContext, useEffect, useState } from "react";
import { BotaoCapturar, BotaoDetalhes, CaracteristicasDosPokemons, EspacoEntreItens, EstiloGeralDoCard, IdDoPokemon, ImagemDoPokemon, InfoDosPokemon, NomeDoPokemon, TipoDoPokemon } from "./styled";
import { PokemonContexto } from "../../contexto/PokemonContexto";
import { detalhesDoPokemon } from "../../routes/coordinato";
import { useNavigate } from "react-router-dom";
import { usePokemon } from "../../hooks/usePokemon";
import { Box, Text } from "@chakra-ui/react";

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
        <Box
        key={data.id}

        position={"relative"}
        w={"400px"}
        p={"20px"}
        m={"10px"}
        >
            <Box
            bg={`type.${data.types[0]?.type.name}`}
            maxH={"33.6vh"}
            minW={"400px"}
            w={"25vw"}
            mt={"30px"}
            p={"20px"}
            borderRadius={"12px"}
            >
                <Box color={"white"} mb={"50px"}>
                    <Text 
                    font={"padrao"}
                    fontSize={"1.2rem"}
                    lineHeight={"1rem"}
                    >#{data.id}
                    </Text>
                    <Text
                    font={"padrao"}
                    fontSize={"2rem"}
                    lineHeight={"2rem"}
                    mb={"20px"}
                    >
                    {data.name}
                    </Text>
                    {data.types.map((uniqueType) => {
                        return <TipoDoPokemon type={uniqueType.type.name}>{uniqueType.type.name}</TipoDoPokemon>
                    })}
                </Box>
                <EspacoEntreItens>
                    <BotaoDetalhes onClick={() => detalhesDoPokemon(navigate, data.name)}>detalhes</BotaoDetalhes >
                    <BotaoCapturar onClick={() => capturarPokemon(data.name)}>capturar!</BotaoCapturar>
                </EspacoEntreItens>
                
            </Box>
            <ImagemDoPokemon src={data.sprites.other.dream_world.front_default}/>
        
    </Box>
    )
}