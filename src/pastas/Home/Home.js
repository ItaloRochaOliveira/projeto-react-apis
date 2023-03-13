import React, { useContext, useEffect, useState} from "react";
import { Card } from "../../Components/Card/Card";
import { PokemonContexto } from "../../contexto/PokemonContexto";
import { Box, Flex, Text } from "@chakra-ui/react";
import { usePokemon } from "../../hooks/usePokemon";

export const Home = () => {
    const [data, setData] = useState([])
    
    const {pokemon} = useContext(PokemonContexto)
    console.log("linha 11 do returno do hook usePokemon na home:", pokemon)

    const [dataPokemon, isLoading, erro] = pokemon
    console.log("linha 13 da home, data:", dataPokemon)
    console.log("linha 14 da home, isLoading:", isLoading)
    console.log("linha 15 da home, erro: ", erro)
    console.log(data)
   
    
    useEffect(()=> {
        setData(dataPokemon)
    }, [isLoading])

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
                            {Date.now()}
                            return <Card propriedade={pokemon.id } key={pokemon.id * Math.random()} data={pokemon}/> 
                        })}
                    </Flex>
            </Box>
        </>
    )
}