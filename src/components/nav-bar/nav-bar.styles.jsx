import styled from "styled-components/macro";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export const NavContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const NavLink = styled.li`
  font-size: 17px;
  font-weight: 500;
  margin: 0 15px;
  height: 40px;
  border-radius: 1px;
  padding: 8px 15px;
  color: #0d00a4;
  background-color: #dad6ff;
  cursor: pointer;

  &:hover {
    color: #dad6ff;
    background-color: #0d00a4;
  }
`;
export const NavItems = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100px;
`;
export const LogoSvg = styled.img`
  width: 60px;
`;
export const NavBox = styled.div`
  width: 80%;
  display: flex;
  border-bottom: 1px #7c7c7c67 solid;

  align-items: center;
  justify-content: flex-end;
`;
