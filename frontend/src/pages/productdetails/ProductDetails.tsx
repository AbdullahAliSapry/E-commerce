import Rating from "@components/Rating/Rating";
import styles from "./ProductDetails.module.css";
import { Container } from "react-bootstrap";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "@store/Store";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "@store/Api/ProductsApi";

const {
  conParent,
  detailsProduct,
  imagesStyle,
  data,
  relatedProducts,
  sideImages,
  mainImg,
  rating,
  mainDetails,
  price,
  decription,
  colors,
  color,
  sizing,
  sizeStyle,
  quantityStyle,
  qunStyle,
} = styles;
export default function ProductDetails() {
  // get product id
  const { id } = useParams();
  //fetch product details from database
  const { product } = useSelector((state: RootState) => state.Products);
  const dispatch = useDispatch<AppDispatch>();
  const refMainImg = useRef(null);
  //handling image 
  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const sidImg: HTMLImageElement = e.target as HTMLImageElement;
    const parent: HTMLElement = refMainImg.current!;
    const mainImg = parent.getElementsByTagName("img")[0];
    const temp = mainImg.cloneNode(true) as HTMLImageElement;
    mainImg.src = sidImg.src;
    sidImg.src = temp.src;
  };
  useEffect(() => {
    if (id) {
      dispatch(getSingleProduct(id));
    }
  }, [id]);

  // handling order

  return (
    <Container className={conParent}>
      <div className={detailsProduct}>
        <div className={imagesStyle}>
          <div className={sideImages}>
            {product?.images.slice(0, 4).map((img, index) => {
              return (
                <img
                  key={index}
                  src={img}
                  onClick={(e) => {
                    handleClick(e);
                  }}
                  alt=""
                />
              );
            })}
          </div>
          <div className={mainImg} ref={refMainImg}>
            <img src={product?.thumbnail} alt="" />
          </div>
        </div>
        <div className={data}>
          <div className={mainDetails}>
            <h2>{product?.title}</h2>
            <div className={rating}>
              <Rating ratingNum={(product ? +(product?.rating) : 0)} />
              (150 Reviews)
            </div>
            <span className={price}>${product?.price}</span>
            <p className={decription}>{product?.description}</p>
          </div>
          <div>
            <div className={colors}>
              <span>Colors:</span>
              <div>
                <span
                  className={color}
                  style={{ backgroundColor: "#e07575" }}></span>
                <span
                  className={color}
                  style={{ backgroundColor: "#a0bce0" }}></span>
              </div>
            </div>
            <div className={sizing}>
              <span>Size:</span>
              <div>
                <span className={sizeStyle}>xs</span>
                <span className={sizeStyle}>s</span>
                <span className={sizeStyle}>l</span>
                <span className={sizeStyle}>md</span>
              </div>
            </div>
            <div className={quantityStyle}>
              <div>
                <div className={qunStyle}>
                  <span>Quantity:</span>
                  <span>{product?.stock}</span>
                </div>
                <i className="bi bi-heart"></i>
              </div>
              <div>
                <button className="buttonMain">Add To Cart</button>

                <button className="buttonMain">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={relatedProducts}></div>
    </Container>
  );
}
