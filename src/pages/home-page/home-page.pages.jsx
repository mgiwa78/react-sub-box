import CategoryMenuBox from "../../components/category-menu-box/category-menu-box.component";
import ProductCard from "../../components/product-card/product-card.component";
import SideBar from "../../components/side-bar/side-bar.component";
import {
  HompageContainer,
  HompageRow,
  ProductsDisplay,
} from "./home-page.styles";
import SHOP_DATA from "../../assets/shop-data";
import { PRODUCTS } from "../../assets/all-products";
const HomePage = () => {
  let a = [];
  const newData = SHOP_DATA.map((item) => item.items);
  console.log(newData);

  newData.map((item) => item.forEach((one) => a.push(one)));
  console.log(a);

  return (
    <HompageContainer>
      <SideBar />
      <ProductsDisplay>
        {PRODUCTS.map((product) => (
          <ProductCard productData={product} key={product.id}></ProductCard>
        ))}
      </ProductsDisplay>
    </HompageContainer>
  );
};

export default HomePage;
