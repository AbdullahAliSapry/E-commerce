import { Container } from "react-bootstrap";
import styles from "./About.module.css";

const { conToDesc, editCon, moreDetailsStyle } = styles;

type obj2 = {
  num: number;
  decscription: string;
  classNameIcon: string;
};
const moreDetails: obj2[] = [
  {
    num: 10.5,
    decscription: "Sallers active our site",
    classNameIcon: "bi bi-shop",
  },
  {
    num: 33,
    decscription: "Mopnthly Produduct Sale",
    classNameIcon: "bi bi-coin",
  },
  {
    num: 22.5,
    decscription: "Customer active in our site",
    classNameIcon: "bi bi-bag-heart",
  },
  {
    num: 45,
    decscription: "Anual gross sale in our site",
    classNameIcon: "bi bi-cash-coin",
  },
];

export default function About() {
  return (
    <div className={editCon}>
      <Container className={conToDesc}>
        <div>
          <h3>Our Story</h3>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>

          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div>
          <img src="https://shorturl.at/fmDWY" alt="" />
        </div>
      </Container>

      <Container>
        <div className={moreDetailsStyle}>{moreDetails.map((obj,index)=>{
          return (
            <div key={index} >
              <div>
                <i className={`${obj.classNameIcon}`}></i>
              </div>
              <h3>{obj.num}K</h3>
              <p>{obj.decscription}</p>
            </div>
          );
        })}</div>
      </Container>
    </div>
  );
}
