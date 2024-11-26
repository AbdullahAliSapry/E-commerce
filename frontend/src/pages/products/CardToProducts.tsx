import { Link } from "react-router-dom";
import styles from "./CardToProducts.module.css";
import Rating from "@components/Rating/Rating";
import { IProduct } from "src/utils/interfaces";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/Store";
import { addToWishlist } from "@store/Api/ProductsApi";
const {
  imgCard,
  containerToImg,
  headers,
  discount,
  iconsStyle,
  conToImg,
  details,
  nameProduct,
  priceProduct,
  rate,
  discontPrice,
  priceCon,
  newItem,
  buttonsStyle,
} = styles;

export default function CardToProducts({
  showDiscount,
  showNew,
  product,
  ratingN,
}: {
  showDiscount: boolean;
  showNew: boolean;
  product: IProduct;
  ratingN: number;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const handleClicked = (productId: string) => {
    dispatch(addToWishlist(productId));
  };
  return (
    <div>
      <div className={containerToImg}>
        <div className={headers}>
          {showDiscount ? (
            <span className={discount}>-40%</span>
          ) : showNew ? (
            <span className={newItem}>new</span>
          ) : (
            <span></span>
          )}

          <div className={iconsStyle}>
            <i className="bi bi-heart"></i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-eye"
              viewBox="0 0 16 16">
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
            </svg>
          </div>
        </div>
        <div className={conToImg}>
          <img className={imgCard} src={product?.thumbnail} alt="" />
        </div>
        <div className={buttonsStyle}>
          <button
            className="buttonMain"
            onClick={() => {
              handleClicked(product?._id);
            }}>
            Add To Wishlist
          </button>
          <button className="buttonMain">
            <Link to={`/products/products-details/${product?._id}`}>
              More Details
            </Link>
          </button>
        </div>
      </div>
      <div className={details}>
        <h4 className={nameProduct}>{product?.title}</h4>
        <div className={priceCon}>
          <span className={priceProduct}>
            ${product?.price - product?.discountPercentage}
          </span>
          <span className={discontPrice}>${product?.price}</span>
        </div>
        <div className={rate}>
          <Rating ratingNum={ratingN} />
        </div>
      </div>
    </div>
  );
}
