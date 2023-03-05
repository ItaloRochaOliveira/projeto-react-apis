import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { pokemon } from "../../img/img"
import { irParaPokedex } from "../../routes/coordinato";

export const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location.pathname)

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
    }
   
}