import { Spinner } from "react-bootstrap";
import styles from "./Loading.module.css";
const { mainStyle, parentDev } = styles;
export default function Loading() {
  return (
    <div className={parentDev}>
      <div className={mainStyle}>
        <Spinner animation="grow" />
      </div>
    </div>
  );
}
