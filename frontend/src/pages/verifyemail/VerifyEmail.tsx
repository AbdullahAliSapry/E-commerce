import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import styles from "./VerifyEmail.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { verifyEmail } from "@store/Api/AuthApi";

const {
  parentDivToSuccess,
  checkIcon,
  titleSuccess,
  parentNotFound,
  titleError,
  linkStyle,
} = styles;

export default function VerifyEmail() {
  const dispatch = useDispatch<AppDispatch>();
  const { EmailVerified } = useSelector((state: RootState) => state.Auth);
  const { userId, verifyToken } = useParams();
  useEffect(() => {
    dispatch(verifyEmail(userId, verifyToken));
  }, [userId, verifyToken]);
  return (
    <Container>
      {EmailVerified ? (
        <>
          <div className={parentDivToSuccess}>
            <i className={`bi bi-patch-check ${checkIcon}`}></i>
            <h2 className={titleSuccess}>
              Your Email Address has been successfully verified
            </h2>
            <Link to={"/"} className={linkStyle}>
              Go To Home Page
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className={parentNotFound}>
            <h1 className={titleError}>Not Found</h1>
          </div>
        </>
      )}
    </Container>
  );
}
