import WishlistCard from "@components/ecommerce/wishlistcard/WishlistCard";
import styles from "./Wishlist.module.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import HeaderToProducts from "@components/ecommerce/hedaerToProducts/HeaderToProducts";
import Card from "@components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { useEffect } from "react";
import { getDataToUser } from "@store/Api/UserApi";

const { title, parentCon, conToCards, conTOHeader } = styles;
export default function Wishlist() {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.Users);
  const { userConfirmation } = useSelector((state: RootState) => state.Auth);
  useEffect(() => {
    if (userConfirmation) {
      dispatch(getDataToUser(userConfirmation?.id));
    }
  }, [user?.wishlist.length]);
  return (
    <Container className={parentCon}>
      <div className={title}>
        <h1>Wishlist({user?.wishlist.length})</h1>

        <button className="styleButton">
          <Link to={"/cart"}>Move All To Bag</Link>
        </button>
      </div>
      <div className={conToCards}>
        {user?.wishlist?.map((item) => {
          return (
            <WishlistCard
              key={item._id}
              showDiscount={false}
              product={item.product}
            />
          );
        })}
      </div>
      <div>
        <div>
          <div className={conTOHeader}>
            <HeaderToProducts title="just for you" />
            <button className={"styleButton"}>
              <Link to={"/products"}>see all</Link>
            </button>
          </div>
        </div>
        <div className={conToCards}>
          <Card showDiscount={true} showNew={false} />
          <Card showDiscount={true} showNew={false} />
          <Card showDiscount={true} showNew={false} />
          <Card showDiscount={true} showNew={false} />
        </div>
      </div>
    </Container>
  );
}
