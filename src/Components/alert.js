import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";



export function Alert({ isOpen, onOpen, onClose }) {
const {pathname} = useLocation()
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent as={"b"} minW={"250px"} maxW={"33vw"} minH={"222px"} textAlign={"center"} p={"2%"}>
        {pathname === "/" ? 
            <>
            <ModalHeader fontSize={"2.75em"}>Gotcha!</ModalHeader>
            <ModalBody fontSize={"1em"}>O Pokémon foi adicionado a sua Pokédex</ModalBody>
            </>
        : 
            <>
            <ModalHeader fontSize={"2.75em"}>Oh, no!</ModalHeader>
            <ModalBody fontSize={"1em"}>O Pokémon foi adicionado a sua Pokédex</ModalBody>
            </>
        }
      </ModalContent>
    </Modal>
  );
}
