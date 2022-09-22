import React from "react";
import {
  Arrow,
  CartDetails,
  CartImg,
  CartItemContainer,
  CartName,
  CartPrice,
  CartRow,
  Quantity,
  Value,
} from "./cart-Item.styles";

const CartItem = () => {
  const { id, name, imageUrl, price, quantity, priceNum } = {
    id: 1,
    name: "Brown Brim",
    imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    price: "$30",
    priceNum: 30,
    quantity: 4,
  };
  return (
    <CartItemContainer>
      <CartImg src={imageUrl}></CartImg>
      <CartDetails>
        <CartRow>
          <CartName>
            {name} x {quantity}
          </CartName>
          <CartPrice>{price}</CartPrice>
        </CartRow>
        <CartRow>
          <CartPrice>${quantity * priceNum}</CartPrice>
        </CartRow>
        <CartRow>
          <Quantity>
            <Arrow>&#10094;</Arrow>
            <Value>{quantity}</Value>
            <Arrow>&#10095;</Arrow>
          </Quantity>
        </CartRow>
      </CartDetails>
    </CartItemContainer>
  );
};

export default CartItem;
