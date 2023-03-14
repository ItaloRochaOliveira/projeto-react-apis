import React, { useContext, useEffect, useState} from "react";
import { Card } from "../../Components/Card/Card";
import { PokemonContexto } from "../../contexto/PokemonContexto";
import { Box, Flex, Text } from "@chakra-ui/react";
import { usePokemon } from "../../hooks/usePokemon";
import { useCarregarPokemons } from "../../hooks/useCarregarPokemons";

export const Home = () => {
    const {pokemon} = useContext(PokemonContexto)
    const [data, isLoading, erro] = pokemon
    
    const dataa = useCarregarPokemons(data)
    console.log(dataa)

    return(
        <>
            <Box bg={"#5E5E5E"} minH={"100vh"}>
                <Text 
                color={"white"}

                ml={"40px"}
                pt={"50px"}

                font={"padrao"}
                fontSize={"3rem"}
                lineHeight={"4.5rem"}
                >Todos Pokémons:</Text>
                    <Flex wrap={"wrap"} justify={"center"}>
                        {data !== undefined && data.map((pokemon) => {
                            return <Card key={pokemon.id} name={pokemon.name}/> 
                        })}
                    </Flex>
            </Box>
        </>
    )
}