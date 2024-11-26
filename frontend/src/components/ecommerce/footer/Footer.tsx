import { CDBContainer, CDBLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
const { styleToFooter, Box } = styles;

export const Footer = () => {


  return (
    <div className={styleToFooter}>
      <CDBContainer>
        <CDBBox
          display="flex"
          flex="column"
          className="mx-auto py-5"
          style={{ width: "90%" }}>
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox className={Box}>
              <Link to={"/"} className="text-decoration-none text-white ">
                <span className="h5 font-weight-bold fs-1">Exclusive</span>
              </Link>
              <Link to={"/sign-up"} className="text-decoration-none text-white">
                Subscribe
              </Link>
              <span>Get 10% off your first order</span>
              <CDBBox display="flex" className="mt-4">
                <CDBBtn flat color="dark">
                  <CDBIcon fab icon="facebook-f" />
                </CDBBtn>
                <CDBBtn flat color="dark" className="mx-3">
                  <CDBIcon fab icon="twitter" />
                </CDBBtn>
                <CDBBtn flat color="dark" className="p-2">
                  <CDBIcon fab icon="instagram" />
                </CDBBtn>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                Exclusive
              </p>
              <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
                <CDBLink to="/">Resources</CDBLink>
                <CDBLink to="/">About Us</CDBLink>
                <CDBLink to="/">Contact</CDBLink>
                <CDBLink to="/">Blog</CDBLink>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                Help
              </p>
              <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
                <CDBLink to="/">Support</CDBLink>
                <CDBLink to="/">Sign Up</CDBLink>
                <CDBLink to="/">Sign In</CDBLink>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                Products
              </p>
              <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
                <CDBLink to="/">className</CDBLink>
                <CDBLink to="/">Loop</CDBLink>
                <CDBLink to="/">Contrast</CDBLink>
              </CDBBox>
            </CDBBox>
          </CDBBox>
          <small className="text-center mt-5 fs-5">
            &copy;Exclusive , {new Date().toDateString()}. All rights reserved{" "}
            <span className="text-primary">
              {" "}
              developed by Eng/Abdullah Ali Sapry
            </span>
          </small>
        </CDBBox>
      </CDBContainer>
    </div>
  );
};
