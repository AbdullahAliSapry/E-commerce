import { Link } from "react-router-dom";
import HeaderToProducts from "../hedaerToProducts/HeaderToProducts";
import styles from "./NewArrival.module.css";
import play from "@images/play.png"
import women from "@images/women.jpeg"
import sub from "@images/sub.png"
import par from "@images/par.png"
const {
  rightSec,
  parentContent,
  leftSection,
  imgCon,
  parentDiv,
  details,
  title,
  description,
  buttonStyle,
} = styles;

export default function NewArrival() {
  return (
    <div className={parentDiv}>
      <div>
        <HeaderToProducts title="Featured" />
      </div>
      <h2 className="ms-0"> New Arrival</h2>
      <div className={parentContent}>
        <div className={rightSec}>
          <div className={imgCon}>
            <img src={play} alt="" />
          </div>
          <div className={details}>
            <div className={title}>PlayStation 5</div>
            <div className={description}>
              Black and White version of the PS5 coming out on sale.
            </div>
            <button className={buttonStyle}>
              <Link to={"/"}>Shop Now</Link>
            </button>
          </div>
        </div>
        <div className={leftSection}>
          <div>
            <img src={women} alt="" />
            <div className={details}>
              <div className={title}>Women’s Collections</div>
              <div className={description}>
                Featured woman collections that give you another vibe.
              </div>
              <button className={buttonStyle}>
                <Link to={"/"}>Shop Now</Link>
              </button>
            </div>
          </div>
          <div>
            <div>
              <img src={sub} alt="" />
              <div className={details}>
                <div className={title}>Women’s Collections</div>
                <div className={description}>
                  Featured woman collections that give you another vibe.
                </div>
                <button className={buttonStyle}>
                  <Link to={"/"}>Shop Now</Link>
                </button>
              </div>
            </div>
            <div>
              <img src={par}alt="" />
              <div className={details}>
                <div className={title}>Women’s Collections</div>
                <div className={description}>
                  Featured woman collections that give you another vibe.
                </div>
                <button className={buttonStyle}>
                  <Link to={"/"}>Shop Now</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
