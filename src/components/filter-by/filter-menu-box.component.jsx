import React from "react";
import { FormSelectItem } from "../form-input/form-input.component";
import { FormInput } from "../form-input/form-input.styles";
import {
  FilterMenuBoxContainer,
  FilterMenuBoxHeading,
  FilterMenuBoxitem,
  FilterMenuBoxitems,
} from "./filter-menu-box.styles";

const FilterMenuBox = () => {
  return (
    <FilterMenuBoxContainer>
      <FilterMenuBoxHeading>Products Filter</FilterMenuBoxHeading>
      <FilterMenuBoxitems>
        <FilterMenuBoxitem>
          <FormSelectItem name={"Painted"} label={"Painted"}>
            Painted
          </FormSelectItem>
        </FilterMenuBoxitem>

        <FilterMenuBoxitem>
          <FormSelectItem name={"Basic"} label={"Basic"}>
            Basic
          </FormSelectItem>
        </FilterMenuBoxitem>
        <FilterMenuBoxitem>
          <FormSelectItem name={"Oversized"} label={"Oversized"}>
            Oversized
          </FormSelectItem>
        </FilterMenuBoxitem>

        <FilterMenuBoxitem>
          <FormSelectItem name={"Used"} label={"Used"}>
            Used
          </FormSelectItem>
        </FilterMenuBoxitem>
      </FilterMenuBoxitems>
    </FilterMenuBoxContainer>
  );
};

export default FilterMenuBox;
