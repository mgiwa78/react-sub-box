import styled from "styled-components/macro";

export const FilterMenuBoxContainer = styled.div`
  border-top: 1px #7c7c7c67 solid;
  padding-top: 10px;
`;
export const FilterMenuBoxHeading = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
export const FilterMenuBoxitems = styled.ul`
  list-style: none;
  margin-top: 5px;
  font-weight: 400;

  width: 200px;
  background-color: #fff;
`;
export const FilterMenuBoxitem = styled.div`
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
