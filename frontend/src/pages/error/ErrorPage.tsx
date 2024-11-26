import { Footer } from "@components/ecommerce/footer/Footer";
import NavBar from "@components/ecommerce/navbar/NavBar";
import TopHeader from "@components/ecommerce/topheader/TopHeader";
import { Button, Container } from "react-bootstrap";
import styles from "./ErrorPage.module.css";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
const { borderTOmain, stylesToMainLayOut, styleToPage } = styles;

export default function ErrorPage() {
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Page Not Found";
  }

  return (
    <div className={stylesToMainLayOut}>
      <TopHeader />
      <div>
        <Container>
          <NavBar />
        </Container>
        <div className={borderTOmain}></div>

        <div
          className={`d-flex justify-content-center align-items-center flex-column my-5 ${styleToPage}`}>
          <h1>{errorStatus}</h1>
          <h3>{errorStatusText}</h3>
          <Button variant="danger">
            <Link to={"/"} replace={true} className="text-decoration-none text-white">
              Back to home page
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
