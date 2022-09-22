import styled, { css } from "styled-components";

export const ProductCartContainer = styled.div`
  display: flex;
  width: calc(25% - 20px);
  border-radius: 2px;
  flex-direction: column;
  height: 400px;
  align-items: center;
  position: relative;
  border: 1px solid #3838387d;
  margin-bottom: 40px;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  padding: 15px;
`;
export const Header = styled.div`
  ${({ src }) => {
    return css`
      background-image: url("${src}");
    `;
  }}
  width: 100%;
  height: 70%;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;

  background-position: center;
  background-size: cover;
`;
export const ProductButton = styled.div`
  height: max-content;
  padding: 8px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
  img {
    fill: #0d00a4;
  }
  &:hover {
    background-color: #0d00a4;
  }
`;
export const ProductRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PriceDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  font-weight: 600;
  font-size: 15px;
  color: #00000041;
`;

export const Name = styled.span`
  font-weight: 600;
  font-size: 19px;
`;

export const Price = styled.span`
  color: #000000;
  font-size: 17px;
  font-weight: 700;
`;
export const Btn = styled.div`
  width: 80px;
  height: 50px;
  background-color: #dad6ff;
  color: #0d00a4;
`;
export const Cart = styled.img`
  width: 30px;
`;
