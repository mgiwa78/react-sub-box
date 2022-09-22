import React from "react";
import {
  CategoryMenuBoxContainer,
  CategoryMenuBoxHeading,
  CategoryMenuBoxitem,
  CategoryMenuBoxitems,
} from "./category-menu-box.styles";

const CategoryMenuBox = () => {
  return (
    <CategoryMenuBoxContainer>
      <CategoryMenuBoxHeading>Products Category</CategoryMenuBoxHeading>
      <CategoryMenuBoxitems>
        <CategoryMenuBoxitem>Food</CategoryMenuBoxitem>
        <CategoryMenuBoxitem>Wears</CategoryMenuBoxitem>
        <CategoryMenuBoxitem>Services</CategoryMenuBoxitem>
        <CategoryMenuBoxitem>Stationaries</CategoryMenuBoxitem>
        <CategoryMenuBoxitem>Electronics</CategoryMenuBoxitem>
        <CategoryMenuBoxitem>Wears</CategoryMenuBoxitem>
        <CategoryMenuBoxitem>Services</CategoryMenuBoxitem>
        <CategoryMenuBoxitem>Stationaries</CategoryMenuBoxitem>
        <CategoryMenuBoxitem>Electronics</CategoryMenuBoxitem>
        <CategoryMenuBoxitem>Furnitures</CategoryMenuBoxitem>
        <CategoryMenuBoxitem>Furnitures</CategoryMenuBoxitem>
      </CategoryMenuBoxitems>
    </CategoryMenuBoxContainer>
  );
};

export default CategoryMenuBox;
