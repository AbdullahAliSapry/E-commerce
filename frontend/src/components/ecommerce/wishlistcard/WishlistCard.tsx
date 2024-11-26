import Swal from "sweetalert2";
import styles from "./WishlistCard.module.css";
import { IProduct } from "src/utils/interfaces";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/Store";
import { RemoveFromWishlist } from "@store/Api/ProductsApi";
const {
  imgCard,
  containerToImg,
  headers,
  discount,
  iconsStyle,
  buttonStyle,
  conToImg,
  details,
  nameProduct,
  priceProduct,
  discontPrice,
  priceCon,
  parentCon,
} = styles;
export default function WishlistCard({
  showDiscount,
  product,
}: {
  showDiscount: boolean;
  product: IProduct;

}) {

  const dispatch = useDispatch<AppDispatch>();


  const handleDeleted = (id:string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't delete this product from the Wishlist",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        dispatch(RemoveFromWishlist(id));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className={parentCon}>
      <div className={containerToImg}>
        <div className={headers}>
          {showDiscount ? (
            <span className={discount}>-40%</span>
          ) : (
            <span></span>
          )}

          <div className={iconsStyle}>
            <i className="bi bi-trash" onClick={()=>{
              handleDeleted(product._id

              )
            }}></i>
          </div>
        </div>
        <div className={conToImg}>
          <img className={imgCard} src={product?.thumbnail} alt="" />
        </div>
        <button className={buttonStyle}>
          <i className="bi bi-cart3"></i>
          Buy Now
        </button>
      </div>
      <div className={details}>
        <h4 className={nameProduct}>{product?.title}</h4>
        <div className={priceCon}>
          {product.discountPercentage ? (
            <>
              <span className={priceProduct}>
                $
                {(product?.price -
                  (product?.discountPercentage / 100) * product?.price).toFixed(2)}
              </span>
              <span className={discontPrice}>${product?.price}</span>
            </>
          ) : (
            <span className={priceProduct}>${product?.price}</span>
          )}
        </div>
      </div>
    </div>
  );
}
