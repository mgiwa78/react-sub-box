import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
  ProductButton,
  Header,
  Cart,
  ProductRow,
  PriceDiv,
} from "./product-card.styles";
import CartSvg from "../../assets/cart20_2.svg";
import NumberFormatter from "react-numerical-formatter";

const ProductCard = ({ productData }) => {
  const { name, price, imageUrl } = productData;

  return (
    <ProductCartContainer>
      <Header src={imageUrl}></Header>
      <Footer>
        <Name>{name}</Name>
        <ProductRow>
          <PriceDiv>
            Price:
            <Price>
              ₦
              <NumberFormatter number={Math.floor(price * 69.21)} />
            </Price>
          </PriceDiv>
          <ProductButton>
            <Cart src={CartSvg} />
          </ProductButton>
        </ProductRow>
      </Footer>
    </ProductCartContainer>
  );
};

export default ProductCard;
