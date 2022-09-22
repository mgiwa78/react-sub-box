import React from "react";
import {
  LogoSvg,
  NavBox,
  NavContainer,
  NavItems,
  NavLink,
} from "./nav-bar.styles";
import logo from "../../assets/logo.svg";
import LogoComponent from "../logo/logo.component";
import { FormInput } from "../form-input/form-input.component";

const NavBar = () => {
  return (
    <NavContainer>
      <LogoComponent />
      <NavBox>
        <FormInput type="checkbox" placeholder="Search Our Products" />
        <NavItems>
          <NavLink>Products</NavLink>
          <NavLink>Profile</NavLink>
          <NavLink>Cart</NavLink>
        </NavItems>
      </NavBox>
    </NavContainer>
  );
};

export default NavBar;
