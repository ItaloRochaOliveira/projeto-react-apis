import { Flex, Link } from "@chakra-ui/react";
import React from "react";
import {AiFillGithub} from "react-icons/ai"

export const Footer = () => {
    return(
        <Flex direction={"column"} align={"center"}>
            <Link><AiFillGithub/> github:</Link>
            <Link>linkedin:</Link>
            <Link> gmail:</Link>
            @italoRochaOliveira
        </Flex>
    ) 
}