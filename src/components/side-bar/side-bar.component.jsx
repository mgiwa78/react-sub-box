import React from "react";
import CategoryMenuBox from "../category-menu-box/category-menu-box.component";
import FilterMenuBox from "../filter-by/filter-menu-box.component";
import { ApplyBtn, SideBarContainer } from "./side-bar.styles";

const SideBar = () => {
  return (
    <SideBarContainer>
      <CategoryMenuBox />
      <FilterMenuBox />
      <ApplyBtn>Apply Filters</ApplyBtn>
    </SideBarContainer>
  );
};

export default SideBar;
