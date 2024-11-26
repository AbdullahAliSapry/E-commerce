import { Button } from "react-bootstrap";
import styles from "./AuthPageWithProvider.module.css";
import { Link } from "react-router-dom";
const { borderTOmain, stylesToMainLayOut, styleToPage, success, failed } =
  styles;

export default function AuthPageWithProvider({ status }: { status: boolean }) {
  const Title: string = status
    ? "Sign Up  Successfully"
    : "Sign Up  failed";
  return (
    <div className={stylesToMainLayOut}>
      <div>
        <div className={borderTOmain}></div>

        <div
          className={`d-flex justify-content-center align-items-center flex-column my-5 ${styleToPage}`}>
          <h1 className={status ? success : failed}>{Title}</h1>
          <Button variant="danger">
            <Link
              to={"/"}
              replace={true}
              className="text-decoration-none text-white">
              go to home page
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
