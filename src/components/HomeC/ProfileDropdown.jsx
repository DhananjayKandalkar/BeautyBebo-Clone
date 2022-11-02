import React from "react";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

import { FaUserAlt, FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfileDropdown = () => {

  return (
    <div>
      <Menu width={"10px"}>
        {({ isOpen }) => (
          <>
            <MenuButton isActive={isOpen} as={Button}>
              {/* {isOpen ? 'Close' : 'Open'} */}
              <FaUserAlt></FaUserAlt>
            </MenuButton>
            <MenuList zIndex={50} ml={"-3rem"} width="1rem">
              <MenuItem>
                <Link to=".">Log in</Link>
              </MenuItem>
              <MenuItem>
                <Link to=".">Sign up</Link>
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </div>
  );
};

export default ProfileDropdown;
