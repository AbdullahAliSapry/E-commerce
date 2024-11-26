import SideBar from "@components/sidebar/SideBar";
import SwiperCom from "@components/swiper/SwiperCom";
import styles from "./Home.module.css";
import ToadiesProducts from "@components/toadiesProducts/ToadiesProducts";
import { Container } from "react-bootstrap";
import Categories from "@components/ecommerce/categories/Categories";
import BestSellingProducts from "@components/sellingproducts/BestSellingProducts";
import DiscountComp from "@components/ecommerce/discounts/DiscountComp";
import SwiperProductsWithNew from "@components/swiperProductsWithNew/SwiperProductsWithNew";
import NewArrival from "@components/ecommerce/newarrival/NewArrival";
const { styleToHomePage } = styles;


export default function Home() {
  return (
    <Container>
      <div className={styleToHomePage}>
        <SideBar />
        <SwiperCom />
      </div>
      <ToadiesProducts />
      <Categories />
      <BestSellingProducts />
      <DiscountComp />
      <SwiperProductsWithNew />
      <NewArrival />
    </Container>
  );
}
