import { Flex, Heading, Link } from "@chakra-ui/react";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export const Footer = () => {
  return (
    <Flex direction={"column"} gap={"10px"} alignItems={"center"} mt={"2%"}>
      <Heading as={"h2"} size={"sm"} textAlign={"center"} >
        copyright &copy; Nintendo. Todos os direitos reservados.
      </Heading>
      <Heading as={"h2"} size={"sm"} textAlign={"center"}>
        Site desenvolvido com intuito educativo e foi proporcionado pelo curso
        da Labenu Full Stack JavaScript.
      </Heading>
      <Flex direction={"row"} gap={"15px"}>
        <Link href={"https://github.com/ItaloRochaOliveira"}>
          <AiFillGithub size={"25px"}/>
        </Link>
        <Link href={"https://www.linkedin.com/in/italorochaoliveira/"}>
          <BsLinkedin size={"25px"}/>
        </Link>
        <Link href={"mailto:italo.rocha.de.oliveira@gmail.com"}>
          <SiGmail size={"25px"} /> 
        </Link>
      </Flex>
      <Heading as={"h2"} size={"sm"} display={"flex"} alignItems={"center"}>&copy;ItaloRochaOliveira</Heading>
    </Flex>
  );
};
