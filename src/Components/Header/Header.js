import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PokemonContexto } from "../../contexto/PokemonContexto";
import { pokemon } from "../../img/img"
import { irParaHome, irParaPokedex } from "../../routes/coordinato";

export const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const namePokemon = location.pathname.slice(10,20)

    console.log(location.pathname.slice(9,20))

    // outra forma de confirmar a página
    // const detalhes = /^\/detalhes\/.+/.test(location.pathname)

    const {pokemonNaPokedex, setPokemonNaPokedex} = useContext(PokemonContexto)
    
    const excluirPokemon = (name) => {
        const pokemon = pokemonNaPokedex.filter((pokemon) => pokemon.name !== name)
        setPokemonNaPokedex(pokemon)
    }


    if(location.pathname === "/"){
        return(
            <Flex
            justify={"space-between"} 
            wrap="wrap" 
            mt={"21px"} 
            mb={"21px"}
            >  
                <Box w={["0%", "0%", "25%"]}></Box>
                <Box 
                w={["100%", "100%", "50%"]}
                display={"flex"}
                justifyContent={"center"}
                >
                    <Image src={pokemon} /> 
                </Box>
                <Box
                w={["100%", "100%", "25%"]}
                mt={["21px", "21px", "0px"]}
                display={"flex"} 
                justifyContent={"center"}
                alignItems={"center"}>
                    <Button
                    onClick={() => irParaPokedex(navigate)}

                    bg={"#33A4F5"}
                    color={"white"} 
                    w={"287px"}
                    h={"74px"}
                    mr={"20px"} 

                    fontFamily={"Poppins"}
                    fontStyle={"normal"}
                    fontWeight={700}
                    fontSize={"24px"}
                    lineHeight={"34px"}>pokédex</Button>
                </Box>
            </Flex>
        ) 
    } else  if(location.pathname === "/pokedex"){
        return(
            <Flex
            justify={"space-between"} 
            wrap="wrap" 
            mt={"21px"} 
            mb={"21px"}
            >  
            <Box
                w={["100%", "100%", "25%"]}
                mt={["21px", "21px", "0px"]}
                display={"flex"} 
                justifyContent={"center"}
                alignItems={"center"}>
                    <ChevronLeftIcon 
                    onClick={() => irParaHome(navigate)}

                    font={"padrao"}
                    fontSize={"24px"}
                    lineHeight={"36px"}

                    _hover={{cursor: "pointer"}}
                    />
                    <Button
                    onClick={() => irParaHome(navigate)}

                    font={"padrao"}
                    fontSize={"24px"}
                    lineHeight={"36px"}

                    pl={"0"}
                    textDecor={"underline"}
                    border={"none"}
                    bg={`white`}
                    _hover={{bg: "none"}}
                    >Todos Pokemons</Button>
                </Box>
                <Box 
                w={["100%", "100%", "50%"]}
                display={"flex"}
                justifyContent={"center"}
                >
                    <Image src={pokemon} /> 
                </Box>    
                <Box w={["0%", "0%", "25%"]}></Box>
                
            </Flex>
        ) 
    } else if(location.pathname === `/detalhes/${namePokemon}`){
        return(
            <Flex
            justify={"space-between"} 
            wrap="wrap" 
            mt={"21px"} 
            mb={"21px"}
            >  
            <Box
                w={["100%", "100%", "25%"]}
                mt={["21px", "21px", "0px"]}
                display={"flex"} 
                justifyContent={"center"}
                alignItems={"center"}>
                    <ChevronLeftIcon 
                    onClick={() => irParaHome(navigate)}

                    font={"padrao"}
                    fontSize={"24px"}
                    lineHeight={"36px"}

                    _hover={{cursor: "pointer"}}
                    />
                    <Button
                    onClick={() => irParaHome(navigate)}

                    font={"padrao"}
                    fontSize={"24px"}
                    lineHeight={"36px"}

                    pl={"0"}
                    textDecor={"underline"}
                    border={"none"}
                    bg={`white`}
                    _hover={{bg: "none"}}
                    >Todos Pokemons</Button>
                </Box>
                <Box 
                w={["100%", "100%", "50%"]}
                display={"flex"}
                justifyContent={"center"}
                >
                    <Image src={pokemon} /> 
                </Box>    
                <Box 
                w={["0%", "0%", "25%"]}
                
                display={"flex"} 
                justifyContent={"center"}
                alignItems={"center"}
                >
                    <Button 
                    onClick={() => excluirPokemon(pokemon.name)}
                        
                    w={"287px"}
                    h={"74px"}

                    font={"padrao"}
                    fontSize={"24px"}
                    lineHeight={"34px"}
                    borderRadius={"8px"}

                    bg={"#FF6262"}
                    color={"white"}
                    _hover={{bg:"#FFA07A"}}
                    >Exluir</Button>
                </Box>
                
            </Flex>
        )
    }
   
}