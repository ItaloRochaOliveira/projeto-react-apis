import React from "react";
import { useParams } from "react-router-dom";
import { usePokemon } from "../../hooks/usePokemon";
import { Box, Center, Flex, Heading, Image, Progress, Text } from "@chakra-ui/react";
import { typePokemonImage } from "../../img/img";

export const Detalhes = () => {
    const {namePokemon} = useParams()
   
    const [data, carregando, erro] = usePokemon(`https://pokeapi.co/api/v2/pokemon/`, namePokemon, [], "detalhes")

    const encurtarStatus = (status) => {
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
                direction={["column"]}
                position={"relative"}

                w={"95vw"}
                >
                    <Text 
                    position={"absolute"}

                    color={"white"}

                    pt={"50px"}

                    font={"padrao"}
                    fontSize={"3rem"}
                    lineHeight={"4.5rem"}
                    >
                        Detalhes:
                    </Text>
                    <Flex
                    direction={["column", "column","column","column", "row"]}
                    
                    bg={`typeColorCard.${data.types[0]?.type.name}`}
                    minH={"663px"}
                    w={"95vw"}
                    mt={"150px"}
                    borderRadius={"12px"}
                    >
                    <Flex 
                    direction={["row", "row", "column"]} 
                    order={["3", "3", "3", "3", "0"]} 
                    justify={"center"}
                    >
                        <Center

                        bg={"white"}

                        w={["100px", "100px", "282px"]}
                        h={["100px", "100px","282px"]}
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

                        w={["100px", "100px", "282px"]}
                        h={["100px", "100px","282px"]}
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
                    <Flex
                    justify={"center"}
                    order={["1", "1", "1", "2"]}
                    >
                        <Box
                        bg={"white"}

                        minW={"360px"}
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
                                    w={"20%"}>{encurtarStatus(state.stat.name)}</Text>
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
                    </Flex>
                    
                    <Box m={"26px"} order={["0", "0", "0", "0", "3"]}>
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
                            <Flex gap={"15px"}>
                            {data.types?.length && data.types.map((uniqueType) => {
                                return <Center
                                justifyContent={"space-around"} 
                                textAlign={"center"}
                                bg={`typeColorType.${uniqueType.type.name}`} 
                                w={"30%"}
                                maxW={"100px"}
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

                        <Box 
                        bg={"white"} 
                        borderRadius={"8px"}
                        minW={"292px"}
                        minH={"200px"}
                        p={"18px"}
                        >
                            <Heading mb={"18px"}>Moves</Heading>
                            <Flex 
                            direction={["row", "row", "row", "row", "column"]}
                            wrap={"wrap"}
                            gap={"20px"}
                            justify={["center", "center", "center", "center", "end"]}
                            >
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
                                    <Text>{move.move.name}</Text>
                                </Flex>
                            })}
                            </Flex>
                        </Box>
                        </Box>
                    </Flex>
                    <Image
                    src={data["sprites"]["other"]["official-artwork"]["front_default"]}
                    
                    position={ "absolute"}
                    top={["20","20", "0"]}
                    right={["0","0", "0"]}

                    w={["150px", "220px", "270px", "270px"]}
                    h={["150px", "220px", "270px", "270px"]}
                    />
               </Flex>
            }
        </Box>
    ) 
}