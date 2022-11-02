import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { BsFillHeartFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import {
  Box, Flex, Input, IconButton, Stack, Image, Text, Select,
} from "@chakra-ui/react";

import ProfileDropdown from "../HomeC/ProfileDropdown";
import { faceOptions, eyeOptions, categories } from "./navbarData";

import beutyBeboLogo from "../../assets/beautybebo.png";



const Navbar = () => {
  const [scrollChange, setScrollChange] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollChange);
  }, []);

  const handleScrollChange = () => {
    window.scrollY >= 80 ? setScrollChange(true) : setScrollChange(false);
  };


  return (
    <nav>
      <Box>
        <Image src={'https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg'} alt={"bg1"} />
      </Box>

      {/*---------------main layer -----------------*/}

      <Box height={"15vh"}>
        <Flex height={"inherit"} justify={"space-evenly"} align={"center"}>
          <Image src={beutyBeboLogo} alt={"Beuty Bebo Logo"} />
          <Stack direction={"row"} spacing={0} align={"center"}>
            <Select
              placeholder={"All Categories"}
              maxWidth={"10rem"}
              fontSize={"14px"}
              borderRadius={"none"}
              outline={"0.1px light var(--lighterGrey_txt4)"}
            >
              <option value="option1">--Make up</option>
              <option value="option2">----Face</option>
              {faceOptions.map((faceElements, i) => {
                return (
                  <option key={i + 1} value={`option${i + 3}`}>------{faceElements}</option>
                );
              })}
              <option value={`option${faceOptions.length + 3}`}>----Eye</option>
              {eyeOptions.map((eyeElements, i) => {
                return (
                  <option key={i + 1} value={`option${faceOptions.length + i + 1 + 3}`}>
                    ------{eyeElements}
                  </option>
                );
              })}
            </Select>
            <Input
              type={"text"}
              width={"30rem"}
              borderRadius={"none"}
              outline={"0.1px light var(--lightGrey_Txt3)"}
              placeholder={"Enter your search..."}
              // onChange={(e)=>setSearchValue(e.target.value)}
            />
            <IconButton
              variant={"solid"}
              bg={"var(--primary_pink)"}
              color={"var(--white)"}
              fontWeight={"bold"}
              borderRadius={0}
              fontSize={"1.5rem"}
              aria-label={"Search database"}
              // onClick={()=>Search()}
              icon={<FiSearch />}
            />
          </Stack>
          <Stack direction={"row"} spacing={4} align={"center"} >
            <BsFillHeartFill />
            <ProfileDropdown />
            <Text>My Account</Text>
          </Stack>
        </Flex>
      </Box>

      {/*-------------- category pink layer -----------------*/}

      <Box
        bg={"var(--primary_pink)"}
        color={"white"}
        fontWeight={"bold"}
        height={"8vh"}
        display={"flex"}
        align={"center"}
      >
        <Flex margin={"auto"} align={"center"} gap={"3rem"}>
          {categories.map((categ, i) => {
            return (
              <Stack key={i + 1} direction={"row"}>
                <Text>{categ}</Text>
                <FaAngleDown />
              </Stack>
            );
          })}
        </Flex>
      </Box>
    </nav>
  );
};

export default Navbar;