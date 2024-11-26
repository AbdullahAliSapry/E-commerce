import { Container } from "react-bootstrap";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

const {
  headerStyle,
  ParentDev,
  quntityStyle,
  productStyle,
  nameAndImg,
  priceStyle,
  subTotalStyle,
  buttonsStyle,
  buttonMain,
  CouponDivStyle,
  allData,
  footerCart,
} = styles;
export default function Cart() {
  return (
    <Container className={ParentDev}>
      <div className={headerStyle}>
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>

      <div className={productStyle}>
        <div className={nameAndImg}>
          <img src="https://shorturl.at/hnpPU" alt="" />
          <span>LCD Monitor</span>
        </div>
        <div className={priceStyle}>
          <span>$650</span>
        </div>
        <div className={quntityStyle}>
          <input type="number" defaultValue={1} min={1} />
        </div>
        <div className={subTotalStyle}>$650</div>
      </div>
      <div className={productStyle}>
        <div className={nameAndImg}>
          <img src="https://shorturl.at/hnpPU" alt="" />
          <span>LCD Monitor</span>
        </div>
        <div className={priceStyle}>
          <span>$650</span>
        </div>
        <div className={quntityStyle}>
          <input type="number" defaultValue={1} min={1} />
        </div>
        <div className={subTotalStyle}>$650</div>
      </div>
      <div className={productStyle}>
        <div className={nameAndImg}>
          <img src="https://shorturl.at/hnpPU" alt="" />
          <span>LCD Monitor</span>
        </div>
        <div className={priceStyle}>
          <span>$650</span>
        </div>
        <div className={quntityStyle}>
          <input type="number" defaultValue={1} min={1} />
        </div>
        <div className={subTotalStyle}>$650</div>
      </div>
      <div className={buttonsStyle}>
        <button className="styleButton">
          <Link to={"/products"}>Return To Shop</Link>
        </button>
        <button className="styleButton">
          <Link to={"/"}>Update Cart</Link>
        </button>
      </div>

      <div className={footerCart}>
        <div>
          <form noValidate>
            <div className={CouponDivStyle}>
              <input type="text" placeholder="Coupon Code" />
              <button className={buttonMain} type="submit">
                Apply Coupon
              </button>
            </div>
          </form>
        </div>
        <div className={allData}>
          <h4>Cart Total</h4>
          <div>
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <div>
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div>
            <span>Total:</span>
            <span>$1750</span>
          </div>
          
            <button className={buttonMain}>
              <Link to={"/checkout"}>Procees to checkout</Link>
            </button>
         
        </div>
      </div>
    </Container>
  );
}
