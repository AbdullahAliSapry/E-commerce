import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <Navbar rounded className="flex self-start justify-between w-[100%] m-2 ">
      <div className="flex items-center justify-between w-[100%]">
        <Navbar.Brand as={"span"}>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-mainColor">
            Admin Dashboard
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link as={NavLink} to={`/`}>
            Home
          </Navbar.Link>
          <Navbar.Link as={NavLink} to={`/admin-register`}>
            register
          </Navbar.Link>
          <Navbar.Link as={NavLink} to={`/products`}>
            products
          </Navbar.Link>
          <Navbar.Link as={NavLink} to={`/categories`}>
            Categories
          </Navbar.Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
