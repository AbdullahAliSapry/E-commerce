import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import AccountDrowp from "./accountdrowp/AccountDrowp";
import { useSelector } from "react-redux";
import { RootState } from "@store/Store";
const { navBar, navs, navbarBrand, inputSearch, Cart } = styles;
function NavBar() {
  const { userConfirmation } = useSelector((state: RootState) => state.Auth);

  return (
    <Navbar expand="lg" className={`bg-body-tertiary ${navBar}`}>
      <Navbar.Brand href="" className={navbarBrand}>
        Exclusive
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className="justify-content-around ">
        <Nav
          className={`my-2 my-lg-0 ${navs}`}
          style={{ maxHeight: "100px" }}
          navbarScroll>
          <Nav.Link as={NavLink} to={"/"} className={`text-black  pb-1`}>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to={"/contact"} className="text-black pb-1">
            Contact
          </Nav.Link>
          <Nav.Link as={NavLink} to={"/about"} className="text-black pb-1">
            About
          </Nav.Link>
          {userConfirmation ? (
            <Nav.Link as={NavLink} to={"/wishList"} className="text-black pb-1">
              WishList
            </Nav.Link>
          ) : (
            <Nav.Link as={NavLink} to={"/sign-up"} className="text-black pb-1">
              Sign Up
            </Nav.Link>
          )}
          <Nav.Link as={NavLink} to={"/products"} className="text-black pb-1">
            Shop Now
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Whats are you looking for?"
            className={inputSearch}
            aria-label="Search"
          />
        </Form>
        <div className={Cart}>
          <i className="bi bi-heart"></i>
          <i className="bi bi-cart3"></i>
          <AccountDrowp />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
