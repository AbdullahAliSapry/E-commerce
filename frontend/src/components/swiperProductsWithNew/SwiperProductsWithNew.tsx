import Card from "@components/card/Card";
import HeaderToProducts from "@components/ecommerce/hedaerToProducts/HeaderToProducts";
import SliderToCart from "@components/slidertocart/SliderToCart";
import { Link } from "react-router-dom";

export default function SwiperProductsWithNew() {
  return (
    <div className="borderMain py-3">
      <div>
        <HeaderToProducts title="Our Products" />
      </div>
      <h2 className="ms-0">Explore Our Products</h2>
      <div>
        <SliderToCart
          SwiperThing={<Card showDiscount={false} showNew={false} />}
        />
        <SliderToCart
          SwiperThing={<Card showDiscount={false} showNew={true} />}
        />
      </div>
      <div className="d-flex justify-content-center">
        <button className="buttonMain p-2">
          <Link to={`/products`}>View All Products</Link>
        </button>
      </div>
    </div>
  );
}
