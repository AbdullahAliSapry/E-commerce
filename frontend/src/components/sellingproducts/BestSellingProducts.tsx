import Card from "@components/card/Card";
import HeaderToProducts from "@components/ecommerce/hedaerToProducts/HeaderToProducts";
import SliderToCart from "@components/slidertocart/SliderToCart";
import { Link } from "react-router-dom";

export default function BestSellingProducts() {
  return (
    <div className="borderMain">
      <HeaderToProducts title="This Month" />
      <div className="d-flex justify-content-between align-items-center py-2">
        <h2>Best Selling Products</h2>
        <button className="buttonMain">
          <Link to={"/products"}>View All</Link>
        </button>
      </div>
      <SliderToCart SwiperThing={<Card showDiscount={false} />} />
    </div>
  );
}
