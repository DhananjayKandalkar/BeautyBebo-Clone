import React from "react";

import {
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";



const SingleIconCard = ({ logo, title }) => {

  const bgStyle= {bg: 'var(--primary_pink)', color:'white'}
  return (
    <Flex
      flexDirection={'column'}
      align={'center'}
      gap={'1rem'}
      padding={'0.5rem 1.2rem'}
      border={'1px solid rgb(211, 211, 211)'}
      _hover={bgStyle}
      _focus={bgStyle}
      cursor={'pointer'}
    >
      <Image boxSize={6} src={logo} bg={'white'} />
      <Text>{title}</Text>
    </Flex>
  );
};

export default SingleIconCard;