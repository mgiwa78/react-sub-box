import styled, { css } from "styled-components/macro";

export const Input = styled.input`
  &[type="text"] {
    height: 40px;
    width: 250px;
    background-color: #edebff;
    padding: 0 10px;
    font-size: 15px;
    border-radius: 1px;
    border: none;
    color: #0e00a49e;
    font-weight: 500;
    font-family: "Open Sans", sans-serif;

    &::placeholder {
      color: #4138a383;
    }
  }

  &[type="checkbox"] {
    &:checked ~ .checkmark {
      border-color: red;
    }
    position: absolute;
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
`;

export const FormInputContainer = styled.div``;
export const FormSelectInputContainer = styled.div`
  padding: 5px 30px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;

  &:hover {
    label {
      color: #0d00a4;
    }
  }

  label {
    color: #000000bc;
  }
  .checkmark {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 18px;
    width: 18px;
    border: 1px black solid;

    border-radius: 2px;
  }
`;

export const FormLabel = styled.label`
  ${({ type }) =>
    type === "checkbox"
      ? css`
          font-size: 17px;
          font-weight: 500;
          font-family: "Open Sans", sans-serif;
          line-height: 10px;
        `
      : type === "text"
      ? css``
      : ""}
`;
