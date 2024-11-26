import SliderToCart from "@components/slidertocart/SliderToCart";
import styles from "./ToadiesProducts.module.css";
import HeaderToProducts from "@components/ecommerce/hedaerToProducts/HeaderToProducts";
import Card from "@components/card/Card";
import { Link } from "react-router-dom";

const { parentContainer, columnStyle } = styles;
export default function ToadiesProducts() {
  return (
    <div className={parentContainer}>
      <div>
        <HeaderToProducts title="Today’s" />
        <div>
          <h2> Flash Sales</h2>
          <div>
            <div>
              <span>Days</span>
              <span>03</span>
            </div>
            <span className={columnStyle}>:</span>
            <div>
              <span>Hours</span>
              <span>20</span>
            </div>
            <span className={columnStyle}>:</span>
            <div>
              <span>Minutes</span>
              <span>10</span>
            </div>
            <span className={columnStyle}>:</span>
            <div>
              <span>Seconds</span>
              <span>20</span>
            </div>
          </div>
        </div>
      </div>
      <SliderToCart SwiperThing={<Card showDiscount={true} showNew={false}/>} />
      <div className="d-flex justify-content-center">
        <button className="buttonMain">
          <Link to={"/products"}>View All Products</Link>
        </button>
      </div>
    </div>
  );
}
