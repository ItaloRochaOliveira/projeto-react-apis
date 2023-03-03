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
    const navigate = useNavigate()
    const {pokedex} = useContext(PokemonContexto)
    return(
        <>
            <Header />

            <Box bg={"#5E5E5E"}>
                <Text 
                color={"white"} 
                ml={"20px"} 
                fontFamily={"Poppins"}
                fontStyle={"normal"}
                fontWeight={700}
                fontSize={"3rem"}
                lineHeight={"4rem"}
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