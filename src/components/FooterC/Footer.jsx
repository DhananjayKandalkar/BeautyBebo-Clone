import { BsFacebook, BsInstagram } from "react-icons/bs";

import {
  Box, Link, SimpleGrid, Stack, Text, Flex, Image, Input, Button
} from "@chakra-ui/react";


const ListHeader = ({ children }) => {
  return (
    <Text
      fontWeight={600}
      fontSize={"lg"}
      mb={2}
      py={"1rem"}
      borderBottom={"1px dashed var(--primary_pink)"}
      color={"white"}
    >
      {children}
    </Text>
  );
};


const Footer = () => {
  return (
    <Box bg={"#232323"} color={"var(--white)"}>
      <Stack maxW={"6xl"} py={10} padding={"0 3rem"}>
        <SimpleGrid columns={4} spacing={10} color={"var(--lighterGrey_txt4)"}>
          <Stack spacing={5} align={"flex-start"}>
            <ListHeader>CONTACT INFO</ListHeader>
            <Text>(+91) 7877061041</Text>
            <Link href={"#"}>support@beautybebo.com</Link>
            <Link href={"#"}>support@beautybebo.com</Link>
            <Text>Open time: 10:00AM - 7:00PM</Text>
            <Stack
              direction={"row"}
              spacing={6}
              color={"var(--primary_pink)"}
              my={"1.5rem"}
              fontSize={"1.8rem"}
            >
              <BsFacebook /> <BsInstagram />
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>QUICK LINKS</ListHeader>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Terms & Conditions</Link>
            <Link href={"#"}>Return and Refund Policy</Link>
            <Link href={"#"}>Shipping Policy</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>CUSTOMER INFO</ListHeader>
            <Link href={"#"}>My Account</Link>
            <Link href={"#"}>Track Your Order</Link>
            <Link href={"#"}>Order Returns</Link>
            <Link href={"#"}>Wishlist</Link>
            <Link href={"#"}>News & Events</Link>
            <Link href={"#"}>FAQ</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>CATEGORIES</ListHeader>
            <Link href={"#"}>Makeup</Link>
            <Link href={"#"}>Skin</Link>
            <Link href={"#"}>Hair</Link>
            <Link href={"#"}>Personal Care</Link>
            <Link href={"#"}>Mom & Baby Care</Link>
            <Link href={"#"}>Fragrance</Link>
            <Link href={"#"}>Ayurveda</Link>
          </Stack>
        </SimpleGrid>
      </Stack>

      {/* visa...newsLetter */}
      <Flex
        justify={"space-between"}
        align={"center"}
        color={"white"}
        fontWeight={600}
        padding={"1rem 3rem 1rem 0"}
        borderTop={"1px solid white"}
        mt={"1rem"}
      >
        <Image src={'https://www.beautybebo.com/pub/media/wysiwyg/payment.png'} transform={"scale(0.8)"} />
        <Stack direction={"row"} spacing={4} align={"center"}>
          <Text>Signup For Newsletter</Text>
          <Stack direction={"row"} spacing={"0"}>
            <Input
              placeholder={"Your Email Address"}
              width={"16rem"}
              border={"1px solid white"}
              bg={"white"}
              borderRadius={"0"}
            />
            <Button
              variant={"solid"}
              bg={"var(--primary_pink)"}
              borderRadius={"0"}
              marginRight={"2rem"}
            >
              Subscribe
            </Button>
          </Stack>
        </Stack>
      </Flex>

      <Box
        textAlign={"center"}
        borderTop={"1px solid var(--lighterGrey_txt4)"}
        bg={"black"}
        padding={"0.6rem"}
      >
        <Text>© 2022 All Rights Reserved.</Text>
      </Box>
    </Box>
  );
};

export default Footer;
