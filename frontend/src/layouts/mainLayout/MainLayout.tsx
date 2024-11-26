import NavBar from "@components/ecommerce/navbar/NavBar";
import TopHeader from "@components/ecommerce/topheader/TopHeader";
import { Container } from "react-bootstrap";
import styles from "./MainLayout.module.css";
import { Outlet } from "react-router-dom";
import { Footer } from "@components/ecommerce/footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const { borderTOmain, stylesToMainLayOut } = styles;
export default function MainLayout() {
  return (
    <div className={stylesToMainLayOut}>
      <TopHeader />
      <ToastContainer
        theme="colored"
        autoClose={1000}
        position="top-center"
        style={{
          zIndex: "10000",
        }}
      />
      <div>
        <Container>
          <NavBar />
        </Container>
        <div className={borderTOmain}></div>
        <div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
