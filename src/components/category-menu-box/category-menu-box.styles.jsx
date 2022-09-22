import styled from "styled-components/macro";

export const CategoryMenuBoxContainer = styled.div`
  padding-top: 30px;
`;
export const CategoryMenuBoxHeading = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
export const CategoryMenuBoxitems = styled.ul`
  list-style: none;
  margin-top: 5px;
  font-weight: 400;

  width: 200px;
  background-color: #fff;
`;
export const CategoryMenuBoxitem = styled.div`
  font-size: 17px;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  width: 100%;
  padding: 5px 30px;
  font-weight: 500;
  cursor: pointer;
  color: #000000bc;

  &:hover {
    color: #0d00a4;
  }
`;
