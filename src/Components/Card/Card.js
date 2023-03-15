import React, { useContext } from "react";
import { PokemonContexto } from "../../contexto/PokemonContexto";
import { usePokemon } from "../../hooks/usePokemon";
import { detalhesDoPokemon } from "../../routes/coordinato";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import { typePokemonImage, pokebolaBackground } from "../../img/img";
import { excluirPokemon } from "../../utils/excluirPokemon";

export const Card = ({ name }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [data, isLoading, erro] = usePokemon(
    `https://pokeapi.co/api/v2/pokemon/`,
    name,
    []
  );

  const { pokemonNaPokedex, setPokemonNaPokedex } = useContext(PokemonContexto);

  const capturarPokemon = (name) => {
    const temPokemon = pokemonNaPokedex.find(
      (pokemon) => pokemon.name === name
    );
    if (temPokemon) {
      alert("Pokemon já está na pokedex");
    } else {
      setPokemonNaPokedex([
        ...pokemonNaPokedex,
        {
          id: data.id,
          name: data.name,
        },
      ]);
    }
  };
  return (
    data.name !== undefined && (
      <Box
        key={data.id}
        position={"relative"}
        minW={"20%"}
        w={"420px"}
        m={"10px"}
      >
        <Box
          bg={`typeColorCard.${data.types[0]?.type.name}`}
          minH={"220px"}
          maxH={"210px"}
          minW={"20%"}
          mt={"60px"}
          p={"20px"}
          borderRadius={"12px"}
          position={"relative"}
          bgImage={pokebolaBackground}
          bgPosition={["center top", "right top"]}
          bgRepeat={"no-repeat"}
          bgSize={"fit"}
        >
          <Box color={"white"} mb={"50px"}>
            <Text textStyle="padrao" fontSize={"1.2rem"} lineHeight={"1rem"}>
              #{data.id}
            </Text>
            <Text
              font={"padrao"}
              fontSize={"2rem"}
              lineHeight={"2rem"}
              mb={"20px"}
            >
              {data.name[0].toUpperCase() + data.name.substring(1).toLowerCase()}
            </Text>
            <Flex gap={"17px"}>
              {data.types.map((uniqueType) => {
                return (
                  <Center
                    justifyContent={"space-around"}
                    textAlign={"center"}
                    bg={`typeColorType.${uniqueType.type.name}`}
                    w={"31%"}
                    maxW={"90px"}
                    h={"31px"}
                    border={"1px dashed rgba(255, 255, 255, 0.47)"}
                    borderRadius={"8px"}
                  >
                    <Image src={typePokemonImage[uniqueType.type.name]} />
                    {uniqueType.type.name}
                  </Center>
                );
              })}
            </Flex>
          </Box>
          <Flex justify={"space-between"} w={"100%"}>
            <Button
              onClick={() => detalhesDoPokemon(navigate, data.name)}
              textDecor={"underline"}
              border={"none"}
              bg={`transparent`}
              color={"white"}
              _hover={{ bg: "none" }}
            >
              detalhes
            </Button>
            <Button
              onClick={
                pathname === "/"
                  ? () => capturarPokemon(data.name)
                  : () =>
                      excluirPokemon(
                        data.name,
                        pokemonNaPokedex,
                        setPokemonNaPokedex
                      )
              }
              bg={pathname === "/" ? "white" : "#FF6262"}
              w={"146px"}
              h={"38px"}
              mb={"60px"}
              py={"4px"}
              px={"10px"}
              borderRadius={"8px"}
              zIndex={"1"}
            >
              {pathname === "/" ? "capturar!" : "Excluir"}
            </Button>
          </Flex>
        </Box>
        
        
        <Image
            src={data["sprites"]["other"]["official-artwork"]["front_default"]}
            justifyContent={"center"}
            w={["110px", "40%", "180px", "193px"]}
            position={"absolute"}
            top={["4", "0"]}
            right={"0"}
          />
      </Box>
    )
  );
};
