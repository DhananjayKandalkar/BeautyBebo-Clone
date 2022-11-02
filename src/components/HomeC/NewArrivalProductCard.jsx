import React from "react";
import { FaStar, FaHeart, FaShoppingBasket } from "react-icons/fa";
import { Box, Flex, Button, Stack, Image, Text } from "@chakra-ui/react";

const NewArrivalProductCard = (product) => {
  const { avatar, title, oldprice, newprice, discount } = product;

  return (
    <Box border={"1px solid rgb(211, 211, 211)"}>
      <Image src={avatar} margin={"auto"} height={"50%"} />
      <Stack
        color={"black"}
        display={"flex"}
        flexDirection={"column"}
        gap={"0.5rem"}
        justify={"center"}
        padding={"0 1.3rem"}
      >
        <Text textAlign={'center'} fontSize={"0.8rem"}>
          {title}
        </Text>
        <Flex
          gap={'0.6rem'}
          color={'rgb(180, 180, 180)'}
          justify={'center'}
          fontSize={'0.8rem'}
        >
          {Array(5)
            .fill(<FaStar />)
            .map((elem, i) => {
              return <span key={i + 1}>{elem}</span>
            })}
        </Flex>
        <Flex gap={'1rem'} justify={'center'} align={'center'}>
          <Text fontSize={'0.7rem'} textDecoration={'line-through'}>
            ₹{oldprice}
          </Text>
          <Text color={'var(--primary_pink)'}>₹{newprice}</Text>
          <Text color={'green'}>{`${discount}%`} off</Text>
        </Flex>
        <Flex gap={'1rem'} justify={'center'}>
          <Button
            variant={'solid'}
            bg={'var(--primary_pink)'}
            color={'white'}
            size={'sm'}
            _hover={{bg:'var(--primary_pink)'}}
          >
            <FaShoppingBasket /> Add to cart
          </Button>
          <Button
            bg={'grey'}
            size={'sm'}
            color={'white'}
            variant={'solid'}
            _hover={{bg:'grey'}}
          >
            <FaHeart />
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default NewArrivalProductCard;
