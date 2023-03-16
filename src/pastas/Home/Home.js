import React, { useContext } from "react";
import { Card } from "../../Components/Card/Card";
import { PokemonContexto } from "../../contexto/PokemonContexto";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { ErroPage } from "../ErroPage";
import { loadingScreen } from "../../img/img";

export const Home = () => {
  const { pokemon } = useContext(PokemonContexto);
  const [data, isLoading, erro] = pokemon;

  if (erro && !isLoading) {
    return <ErroPage />;
  } else {
    return (
      <>
        <Box bg={"#5E5E5E"} minH={"100vh"} pb={"10%"}>
          <Text
            color={"white"}
            ml={"40px"}
            pt={"50px"}
            fontStyle={"padrao"}
            fontSize={"3rem"}
            lineHeight={"4.5rem"}
          >
            Todos Pokémons:
          </Text>
          <Flex wrap={"wrap"} justify={"center"}>
            {isLoading && (
              <Image
                src={loadingScreen}
                alt="Animação da Pokébola carregando"
                mixBlendMode={"lighten"}
                minW={"10vw"}
                h={["40vh", "60vh"]}
              />
            )}
            {!isLoading &&
              data !== undefined &&
              data.map((pokemon) => {
                return <Card key={pokemon.name} name={pokemon.name} />;
              })}
          </Flex>
        </Box>
      </>
    );
  }
};
