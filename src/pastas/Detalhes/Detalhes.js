import React from "react";
import { useParams } from "react-router-dom";
import { usePokemon } from "../../hooks/usePokemon";
import { Box, Center, Flex, Heading, Image, Progress, Text } from "@chakra-ui/react";

export const Detalhes = () => {
    const {namePokemon} = useParams()
   
    const [data, carregando, erro] = usePokemon(`https://pokeapi.co/api/v2/pokemon/`, namePokemon, {})
    
    const encutarStatus = (status) => {
        if(status === "special-attack"){
            return "Sp-Atk"
        } else if(status === "special-defense"){
            return "Sp-Def"
        } else {
            return status[0].toUpperCase() + status.substring(1)
        }
    }

    const soma = (status) => {
       return status.reduce((acumulador, stat) => acumulador + stat.base_stat, 0)
    }

    return(
        <Box 
        key={data.id}
        
        bg={"#5E5E5E"} minH={"100vh"} display={"flex"} justifyContent={"center"}>
            
            {data.name !== undefined &&
                <Flex
                position={"relative"}

                w={"95vw"}
                >
                    <Text 
                    position={"absolute"}

                    color={"white"}

                    ml={"40px"}
                    pt={"50px"}

                    font={"padrao"}
                    fontSize={"3rem"}
                    lineHeight={"4.5rem"}
                    >
                        Detalhes:
                    </Text>
                    <Box 
                    display={"flex"}
                    
                    m={"10px"}
                    bg={`typeColorCard.${data.types[0]?.type.name}`}
                    h={"663px"}
                    minW={"95vw"}
                    mt={"150px"}
                    borderRadius={"12px"}
                    >
                    <Flex direction={"column"} >
                        <Center
                        bg={"white"}

                        w={"282px"}
                        h={"282px"}
                        m={"26px"}
                        borderRadius={"8px"}
                        >
                            <Image 
                            src={data.sprites.versions["generation-v"]["black-white"].animated.front_default}
                            
                            w={"111px"}
                            h={"111px"}
                            />
                        </Center>
                        <Center
                        bg={"white"}

                        w={"282px"}
                        h={"282px"}
                        m={"26px"}
                        borderRadius={"8px"}
                        >
                            <Image 
                            src={data.sprites.versions["generation-v"]["black-white"].animated.back_default}
                            
                            w={"111px"}
                            h={"111px"}
                            />
                        </Center>
                        
                    </Flex>
                    <Box
                    bg={"white"}

                    minW={"360px"}
                    w={"27%"}
                    p={"18px"}
                    m={"26px"}
                    
                    borderRadius={"12px"}
                    >
                        <Heading
                        mb={"20px"}
                        >Status básicos</Heading>
                        
                        {data.stats.map((state) => {
                            return <Flex
                            gap={"5px"}
                            my={"5px"}
                            >
                                <Text 
                                display={"flex"}
                                justifyContent={"end"}
                                w={"20%"}>{encutarStatus(state.stat.name)}</Text>
                                <Text
                                display={"flex"}
                                justifyContent={"center"}
                                
                                w={"20%"}>{state.base_stat}</Text>
                                <Progress 
                                display={"flex"}
                                alignSelf={"center"}

                                value={state.base_stat} 
                                colorScheme={state.base_stat < 50 ? "orange" : "yellow"} 
                                
                                h={"10px"}
                                w={"66%"}
                                borderRadius={"4px"}
                                />
                                </Flex>
                        })}
                        <Flex
                        gap={"5px"}
                        my={"5px"}
                        >
                            <Text 
                            display={"flex"}
                            justifyContent={"end"}
                            w={"20%"}>Total</Text>
                            <Text
                            display={"flex"}
                            justifyContent={"center"}
                            
                            w={"20%"}>{soma(data.stats)}</Text>
                            <Box 
                            display={"flex"}
                            alignSelf={"center"}                                
                            w={"66%"}
                            borderRadius={"4px"}
                            />
                        </Flex>
                        
                    </Box>
                    
                    <Box m={"26px"}>
                        <Box color={"white"} mb={"50px"}>
                            <Text
                            font={"padrao"}
                            fontSize={"1.2rem"}
                            lineHeight={"1rem"}
                            mb={"10px"}
                            >#{data.id}</Text>
                            <Text
                            font={"padrao"}
                            fontSize={"3rem"}
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

                        <Box 
                        bg={"white"} 
                        borderRadius={"8px"}
                        minW={"292px"}
                        h={"453px"}
                        p={"18px"}
                        >
                            <Heading mb={"18px"}>Moves</Heading>
                            {data.moves.slice(0,5).map((move) => {
                                return <Flex
                                align={"center"}

                                w={"fit-content"}
                                h={"37px"}
                                p={"10px"}
                                mb={"18px"}

                                bg={"#ECECEC"}
                                border= {"1px dashed rgba(0, 0, 0, 0.14)"}
                                borderRadius= {"12px"}
                                >
                                    <Text align="center">{move.move.name}</Text>
                                </Flex>
                            })}
                        </Box>
                        </Box>
                    </Box>
                    <Image
                    src={data["sprites"]["other"]["official-artwork"]["front_default"]}
                    
                    position={"absolute"}
                    top={"0"}
                    right={"0"}

                    w={["50px", "50px","50px", "270px"]}
                    h={["50px", "50px","50px", "270px"]}
                    />
               </Flex>
            }
        </Box>
    ) 
}