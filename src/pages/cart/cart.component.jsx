import React from "react";
import CartItem from "../../components/cart-Item/cart-Item.component";
import { CartContainer, CartHeader } from "./cart.styles";

const Cart = () => {
  return (
    <CartContainer>
      <CartHeader>Cart</CartHeader>
      <CartItem />
    </CartContainer>
  );
};

export default Cart;
