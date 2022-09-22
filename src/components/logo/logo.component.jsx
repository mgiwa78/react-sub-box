import React from "react";
import {
  LogoComponentContainer,
  LogoIcon,
  LogoText,
  LogoTextBold,
} from "./logo.styles";
import logoSvg from "../../assets/cube.svg";

const LogoComponent = () => {
  return (
    <LogoComponentContainer>
      <LogoIcon src={logoSvg}></LogoIcon>
      <LogoText>
        sub
        <LogoTextBold>box</LogoTextBold>
      </LogoText>
    </LogoComponentContainer>
  );
};

export default LogoComponent;
