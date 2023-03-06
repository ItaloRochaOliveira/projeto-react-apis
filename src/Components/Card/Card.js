import React, { useContext} from "react";
import { PokemonContexto } from "../../contexto/PokemonContexto";
import { detalhesDoPokemon } from "../../routes/coordinato";
import { useNavigate } from "react-router-dom";
import { usePokemon } from "../../hooks/usePokemon";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

export const Card = ({
    namePokemon,
}) => {
    const navigate = useNavigate()

    const {pokemonNaPokedex, setPokemonNaPokedex} = useContext(PokemonContexto)

    const [data, isLoading, erro] = usePokemon(`https://pokeapi.co/api/v2/pokemon/`, namePokemon, {})
           
            // console.log("normal: ",response.data.sprites.other.dream_world.front_default)
            // console.log("Gif: ", response.data.sprites.versions["generation-v"]["black-white"].animated.front_default)
    const capturarPokemon = (name) => {
        const temPokemon = pokemonNaPokedex.find((pokemon) => pokemon.name === name)
        if (temPokemon) {
            alert("Pokemon já está na pokedex")
        } else {
            setPokemonNaPokedex([...pokemonNaPokedex, {
                id: data.id,
                name: data.name,
                types: data.types,
                pokemonImage: data.sprites.other.dream_world.front_default,
            }])
        }
    }
    return( 
        data.name !== undefined &&
        <Box
        key={data.id}

        position={"relative"}
        w={"420px"}
        m={"10px"}
        >
            <Box
            bg={`typeColorCard.${data.types[0]?.type.name}`}
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
                    >#{data.id}
                    </Text>
                    <Text
                    font={"padrao"}
                    fontSize={"2rem"}
                    lineHeight={"2rem"}
                    mb={"20px"}
                    >
                    {data.name}
                    </Text>
                    <Flex gap={"17px"}>
                    {data.types.map((uniqueType) => {
                        return <Box
                        textAlign={"center"}
                        bg={`typeColorType.${uniqueType.type.name}`} 
                        w={"74px"}
                        h={"31px"}
                        border={"1px dashed rgba(255, 255, 255, 0.47)"}
                        borderRadius={"8px"}
                        >{uniqueType.type.name}</Box>
                    })}
                    </Flex>
                </Box>
                <Flex justify={"space-between"}>
                    <Button 
                    onClick={() => detalhesDoPokemon(navigate, data.name)}
                    
                    textDecor={"underline"}
                    border={"none"}
                    bg={`typeColorCard.${data.types[0]?.type.name}`}
                    color={"white"}
                    _hover={{bg: "none"}}
                    >
                        detalhes
                    </Button>
                    <Button
                    onClick={() => capturarPokemon(data.name)}
                    
                    w={"146px"}
                    h={"38px"}
                    mb={"60px"}
                    py={"4px"}
                    px={"10px"}
                    borderRadius={"8px"}
                    >capturar!</Button>
                </Flex>
                
            </Box>
            <Image
            src={data.sprites.other.dream_world.front_default}
    
            position={"absolute"}
            top={"0"}
            right={"0"}

            w={"193px"}
            h={"193px"}
            />
        
    </Box>
    )
}