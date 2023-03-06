import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePokemon } from "../../hooks/usePokemon";
import { Box, Flex, Heading, Image, Progress, Square, Text } from "@chakra-ui/react";

export const Detalhes = () => {
    const {namePokemon} = useParams()
   
    const [data, carregando, erro] = usePokemon(`https://pokeapi.co/api/v2/pokemon/`, namePokemon, {})
    // data.moves.map((move) => {
    //     console.log(move.move)
    // })
    
    return(
        <Box bg={"#5E5E5E"} minH={"100vh"}>
            <Text 
            color={"white"}

            ml={"40px"}
            pt={"50px"}

            font={"padrao"}
            fontSize={"3rem"}
            lineHeight={"4.5rem"}
            >Detalhes:
            </Text>
            {data.name !== undefined &&
               <Flex 
               bg={"red"}
               position={"relative"}
                >
                    <Box 
                    display={"flex"}
                    key={data.name}
                    
                   
                    m={"10px"}
                    bg={`typeColorCard.${data.types[0]?.type.name}`}
                    minH={"33vh"}
                    maxH={"33vh"}
                    minW={"90vw"}
                    w={"25vw"}
                    mt={"60px"}
                    p={"20px"}
                    borderRadius={"12px"}
                    >
                    <Flex direction={"column"} w={"100px"} >
                        <Box
                        bg={"white"}
                        
                        >
                            <Image src={data.sprites.versions["generation-v"]["black-white"].animated.front_default}/>
                        </Box>
                        <Box  
                        bg={"white"}
                        >
                            <Image src={data.sprites.versions["generation-v"]["black-white"].animated.back_default}/>
                        </Box>
                        
                    </Flex>
                    <Box
                    bg={"white"}
                    >
                        <Heading>Estados básicos</Heading>
                        {data.stats.map((state) => {
                            return <>
                                {state.stat.name}
                                <Progress value={state.base_stat} colorScheme={state.base_stat < 50 ? "red" : "blue"} />
                                </>
                        })}
                    </Box>
                    
                        <Box>
                            <Box color={"white"} mb={"50px"}>
                                <Text
                                font={"padrao"}
                                fontSize={"1.2rem"}
                                lineHeight={"1rem"}
                                >#{data.id}</Text>
                                <Text
                                font={"padrao"}
                                fontSize={"2rem"}
                                lineHeight={"2rem"}
                                mb={"20px"}
                                >{data.name} </Text>
                                <Flex gap={"17px"}>
                                {data.types?.length && data.types.map((uniqueType) => {
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

                            <Box>
                                <Heading>Moves</Heading>
                            </Box>
                        </Box>
                    </Box>
                    <Image
                    src={data.sprites.other.dream_world.front_default}
                    
                    position={"absolute"}
                    top={"0"}
                    right={"0"}

                    w={"193px"}
                    h={"193px"}
                    />
               </Flex>
            }
        </Box>
    ) 
}