import { Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillGithub, AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export const Footer = () => {
  return (
    <Flex direction={"column"} gap={"10px"} alignItems={"center"} mt={"2%"}>
      <Text display={"flex"} alignItems={["start", "start", "center"]} justifyContent={"right"} textAlign={"center"}>
        copyright &copy; Nintendo. Todos os direitos reservados.
      </Text>
      <Text textAlign={"center"}>
        Site desenvolvido com intuito educativo e foi proporcionado pelo curso
        da Labenu Full Stack JavaScript.
      </Text>
      <Flex direction={"row"} gap={"15px"}>
        <Link href={"https://github.com/ItaloRochaOliveira"}>
          <AiFillGithub />
        </Link>
        <Link href={"https://www.linkedin.com/in/italorochaoliveira/"}>
          <BsLinkedin />
        </Link>
        <Link>
          <SiGmail href={"mailto:italo.rocha.de.oliveira@gmail.com"}/> 
        </Link>
      </Flex>
      <Text display={"flex"} alignItems={"center"}><AiOutlineCopyrightCircle />italoRochaOliveira</Text>
    </Flex>
  );
};
