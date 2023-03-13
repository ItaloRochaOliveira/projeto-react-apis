import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonContexto } from "../../contexto/PokemonContexto";
import { typePokemonImage } from "../../img/img";
import { detalhesDoPokemon, irParaHome, irParaPokedex } from "../../routes/coordinato";

export const Pokedex = () => {
    const navigate = useNavigate()

    const {pokemonNaPokedex, setPokemonNaPokedex} = useContext(PokemonContexto)
    
    const excluirPokemon = (name) => {
        const pokemon = pokemonNaPokedex.filter((pokemon) => pokemon.name !== name)
        setPokemonNaPokedex(pokemon)
    }

    return(
        <>
            <Flex
            wrap={"wrap"}

            minH={"100vh"}
            bg={"#5E5E5E"}
            >
            {pokemonNaPokedex.map((pokemon) => {
                return pokemon.types.length > 0 && 
                    <Box
                    position={"relative"}
                    w={"420px"}
                    m={"10px"}
                    
                    key={pokemon.name}>
                    <Box 
                    bg={`typeColorCard.${pokemon.types[0]?.type.name}`}
                    minH={"220px"}
                    maxH={"28vh"}
                    minW={"420px"}
                    w={"25vw"}
                    mt={"60px"}
                    p={"20px"}
                    borderRadius={"12px"}
                    >
                     <Box color={"white"} mb={"50px"}>
                         <Text
                         font={"padrao"}
                         fontSize={"1.2rem"}
                         lineHeight={"1rem"}
                         >#{pokemon.id}</Text>
                         <Text
                         font={"padrao"}
                         fontSize={"2rem"}
                         lineHeight={"2rem"}
                         mb={"20px"}
                         >{pokemon.name} </Text>
                         <Flex gap={"17px"}>
                            {pokemon.types.map((uniqueType) => {
                                return <Center 
                                justifyContent={"space-around"}
                                textAlign={"center"}
                                bg={`typeColorType.${uniqueType.type.name}`} 
                                w={"23%"}
                                h={"31px"}
                                border={"1px dashed rgba(255, 255, 255, 0.47)"}
                                borderRadius={"8px"}
                                >
                                    <Image src={typePokemonImage[uniqueType.type.name]}/>
                                    {uniqueType.type.name}
                                </Center>
                            })}
                         </Flex>
                     </Box>
                     <Flex justify={"space-between"}>
                        <Button
                        onClick={() => detalhesDoPokemon(navigate, pokemon.name)}
                         
                        textDecor={"underline"}
                        border={"none"}
                        bg={`typeColorCard.${pokemon.types[0]?.type.name}`}
                        color={"white"}
                        _hover={{bg: "none"}}
                            >detalhes</Button >
                        <Button 
                        onClick={() => excluirPokemon(pokemon.name)}
                         
                        w={"146px"}
                        h={"38px"}
                        mb={"60px"}
                        py={"4px"}
                        px={"10px"}
                        borderRadius={"8px"}

                        bg={"#FF6262"}
                        _hover={{bg:"#FFA07A"}}
                         >Exluir</Button>
                     </Flex>
                      
                </Box>
                <Image
                src={pokemon.pokemonImage}
                
                position={"absolute"}
                top={"0"}
                right={"0"}

                w={"193px"}
                h={"193px"}
                />
                 
             </Box>
            })}
            </Flex>
        </>
            
        
    ) 
}