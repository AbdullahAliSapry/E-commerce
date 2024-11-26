import styles from "./DiscountComp.module.css";
const { styleImg, parentCon, DetailsSection, conToTimer, conImg } = styles;
import img from "@images/img.png"
export default function DiscountComp() {
  return (
    <div className="borderMain">
      <div className={parentCon}>
        <div className={DetailsSection}> 
          <h4>Categories</h4>
          <span>Enhance Your Music Experience</span>
          <div className={conToTimer}>
            <div>
              <span>Days</span>
              <span>03</span>
            </div>

            <div>
              <span>Hours</span>
              <span>20</span>
            </div>

            <div>
              <span>Minutes</span>
              <span>10</span>
            </div>

            <div>
              <span>Seconds</span>
              <span>20</span>
            </div>
          </div>
          <button>Buy Now!</button>
        </div>
        <div className={conImg}> 
          <img
          className={styleImg}
            alt=""
            src={img}
          />
        </div>
      </div>
    </div>
  );
}
