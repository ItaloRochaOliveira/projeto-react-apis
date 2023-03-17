import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { Card } from "../../Components/Card/Card";
import { PokemonContexto } from "../../contexto/PokemonContexto";

export const Pokedex = () => {
  const { pokemonNaPokedex } = useContext(PokemonContexto);

  return (
    <Box minH={"100vh"} bg={"#5E5E5E"}>
      <Text
        color={"white"}
        ml={"40px"}
        pt={"50px"}
        textStyle="poppins"
        fontSize={"3rem"}
        lineHeight={"4.5rem"}
      >
        Meus Pokémons:
      </Text>
      <Flex minH={"100vh"} justify={"center"} wrap={"wrap"}>
        {pokemonNaPokedex && pokemonNaPokedex.length === 0 && (
          <Flex align={["start", "start", "center"]} mt={["10%", "10%", "0"]}>
            <Heading textAlign={"center"} color={"white"}>
              Aguardando pokemons serem capturados...
            </Heading>
          </Flex>
        )}
        {pokemonNaPokedex.length > 0 &&
          pokemonNaPokedex
            .sort((a, b) => {
              return a.id - b.id;
            })
            .map((pokemon) => {
              return <Card key={pokemon.id} name={pokemon.name} />;
            })}
      </Flex>
    </Box>
  );
};
