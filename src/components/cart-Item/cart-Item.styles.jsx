import styled, { css } from "styled-components/macro";

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
  border-top: 1px solid #3838387d;
  border-bottom: 1px solid #3838387d;
  padding: 20px 0;
`;
export const CartDetails = styled.div`
  padding: 0 15px;
  width: 100%;
`;
export const CartRow = styled.div`
  padding: 0 15px;
  width: 100%;
  justify-content: space-between;
  display: flex;
  margin-bottom: 7px;
`;
export const CartName = styled.span`
  font-size: 22px;
  font-weight: 600;
`;
export const CartPrice = styled.span`
  font-weight: 600;
  font-size: 20px;
  color: #00000079;
`;
export const CartImg = styled.div`
  ${({ src }) => {
    return css`
      background-image: url("${src}");
    `;
  }}
  border-radius: 5px;
  background-position: center;
  background-size: cover;
  height: 140px;
  width: 120px;
`;

export const Quantity = styled.span`
  display: flex;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;
export const Value = styled.span`
  margin: 0 10px;
`;
