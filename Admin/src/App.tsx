import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";
import Category from "./pages/categories/Category";
import Products from "./pages/products/Products";
import Order from "./pages/orders/Order";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import Register from "./pages/Register/Register";
import { RootState } from "./store/Store";
import { useSelector } from "react-redux";
import Login from "./pages/login/Login";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
function App() {
  const location = useLocation();
  const links: string[] = location.pathname.split("/").filter(Boolean);
  
  const { userConfirmationAdmin } = useSelector((state: RootState) => state.Auth);

  return (
    <div className="flex w-[100%]">
      <ToastContainer
        theme="colored"
        autoClose={1000}
        position="top-center"
        style={{
          zIndex: "10000",
        }}
      />{" "}
      <div>
        <SideBar />
      </div>
      <div className="w-[100%]">
        <NavBar />
        <div>
          <Breadcrumb
            aria-label="Default breadcrumb example"
            className="px-[10px]">
            <Breadcrumb.Item icon={HiHome}>
              <span className="text-[18px] text-black">Home</span>
            </Breadcrumb.Item>
            {links.map((e, index) => {
              return (
                <Breadcrumb.Item key={index}>
                  <span className="text-[18px]">{e}</span>
                </Breadcrumb.Item>
              );
            })}
          </Breadcrumb>
        </div>
        <div className=" bg-[#e7e7e3] h-[100%] rounded-lg">
          <Routes>
            <Route path="/all-category" element={<Category />} />
            <Route path="/products" element={<Products />} />
            <Route path="/all-order" element={<Order />} />
            <Route
              path="/admin-register"
              element={userConfirmationAdmin ? <Category /> : <Register />}
            />
            <Route
              path="/admin-login"
              element={userConfirmationAdmin ? <Category /> : <Login />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
