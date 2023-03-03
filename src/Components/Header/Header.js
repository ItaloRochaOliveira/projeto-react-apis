import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { pokemon } from "../../img/img"

export const Header = () => {
    const location = useLocation()
    const {namePokemon} = useParams()
    console.log(location.pathname)
    console.log(namePokemon)

    if(location.pathname === "/"){
        return(
            <Flex justify={"center"} wrap="wrap" mt={"21px"} mb={"21px"}>  
               <Image ml={"30%"} src={pokemon} /> 
               <Box display={"flex"} align={"center"} ml={"30%"}>
                    <Button  align="center">pokedex</Button>
               </Box>
            </Flex>
        ) 
    }
   
}