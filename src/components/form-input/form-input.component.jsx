import React from "react";
import {
  FormInputContainer,
  FormLabel,
  FormSelectInputContainer,
  Input,
} from "./form-input.styles";

export const FormInput = ({ placeholder, label }) => {
  return (
    <FormInputContainer>
      <FormLabel>{label}</FormLabel>
      <Input type="text" placeholder={placeholder}></Input>
    </FormInputContainer>
  );
};

export const FormSelectItem = ({ label, name }) => {
  return (
    <FormSelectInputContainer>
      <Input type="checkbox" name={name} />
      <span className="checkmark"></span>
      <FormLabel type="checkbox" htmlFor={name}>
        {label}
      </FormLabel>
    </FormSelectInputContainer>
  );
};
