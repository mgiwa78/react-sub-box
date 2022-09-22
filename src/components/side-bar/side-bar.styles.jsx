import styled from "styled-components/macro";

export const SideBarContainer = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  border-right: 1px #7c7c7c67 solid;
  height: max-content;
  padding-bottom: 40px;
  padding-left: 10px;

  border: 1px #7c7c7c67 solid;
  border-top: 0;
  position: sticky;
`;
export const ApplyBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0e00a475;
  color: #fff;
  font-size: 17px;
  font-weight: 600;
  width: 180px;
  border-radius: 2px;
  padding: 10px 10px;
  margin-top: 20px;
  margin-left: 10px;
  &:hover {
    background-color: #0d00a4;
  }
`;
