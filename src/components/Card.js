import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack background="white" borderRadius="5" textColor="black" align="left">
      <Image borderRadius="5" src={imageSrc}/>
      <Heading py="2" px="4">{title}</Heading>
      <Text py="2" px="4">{description}</Text>
      <Text py="2" px="4" fontWeight="bold">See more<span style={{paddingLeft: ".5rem"}}><FontAwesomeIcon icon={faArrowRight} size="1x"/></span></Text>
    </VStack>
  );
};

export default Card;
