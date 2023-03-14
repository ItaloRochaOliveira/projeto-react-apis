import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { Card } from "../../Components/Card/Card";
import { PokemonContexto } from "../../contexto/PokemonContexto";

export const Pokedex = () => {
  const { pokemonNaPokedex } = useContext(PokemonContexto);

  return (
    <Box minH={"100vh"} bg={"#5E5E5E"} >
      <Text
        color={"white"}
        ml={"40px"}
        pt={"50px"}
        font={"padrao"}
        fontSize={"3rem"}
        lineHeight={"4.5rem"}
      >
        Todos Pokémons:
      </Text>
      <Flex justify={"center"} wrap={"wrap"} >
        {pokemonNaPokedex.map((pokemon) => {
          return <Card key={pokemon.id} name={pokemon.name} />;
        })}
      </Flex>
    </Box>
  );
};
