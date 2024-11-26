import { Link } from "react-router-dom";
import DropDwonToLang from "./DropDwonToLang";
import styles from "./TopHeder.module.css";
const { topHeader, linkTOShop, RightSection } = styles;
export default function TopHeader() {
  return (
    <div className={topHeader}>
      <div className={RightSection}>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <Link to={"/products"} className={linkTOShop}>
          ShopNow
        </Link>
      </div>
      <div>
        <DropDwonToLang />
      </div>
    </div>
  );
}
