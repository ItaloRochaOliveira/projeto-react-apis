import React, { useContext, useEffect, useState} from "react";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { Card } from "../../Components/Card/Card";
import { BotaoPokedex, CorDaMain, HeaderLogin, Pokedex, TodosPokemons } from "./styled";
import {useNavigate} from "react-router-dom"
import { irParaPokedex } from "../../routes/coordinato";
import { PokemonContexto } from "../../contexto/PokemonContexto";
import { Box, Flex, Text } from "@chakra-ui/react";

export const Home = () => {
    const {pokedex} = useContext(PokemonContexto)
    return(
        <>
            <Box bg={"#5E5E5E"}>
                <Text 
                color={"white"}

                ml={"40px"}
                pt={"50px"}

                font={"padrao"}
                fontSize={"3rem"}
                lineHeight={"4.5rem"}
                >Todos Pokémons:</Text>
                    <Flex wrap={"wrap"} justify={"center"}>
                        {pokedex.map((pokemon) => {
                            return <Card key={pokemon.name} namePokemon={pokemon.name}/> 
                        })}
                    </Flex>
            </Box>
    
            <Footer />
        </>
    )
}