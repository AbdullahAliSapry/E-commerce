import MainLayout from "@layouts/mainLayout/MainLayout";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "@pages/home/Home";
import Products from "@pages/products/Products";
import Contact from "@pages/contact/Contact";
import About from "@pages/about/About";
import SignUp from "@pages/signup/SignUp";
import ErrorPage from "@pages/error/ErrorPage";
import ProductDetails from "@pages/productdetails/ProductDetails";
import Login from "@pages/login/Login";
import Wishlist from "@pages/wishlist/Wishlist";
import Cart from "@pages/cart/Cart";
import AccountPage from "@pages/accountpage/AccountPage";
import AuthPageWithProvider from "@pages/authPageWithGoogle/AuthPageWithProvider";
import VerifyEmail from "@pages/verifyemail/VerifyEmail";
import { useSelector } from "react-redux";
import { RootState } from "@store/Store";
export default function AppRouter() {
  const { userConfirmation,} = useSelector((state: RootState) => state.Auth);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "products/:page?",
          element: <Products />,
          loader: ({ params }) => {
            if (
              params.page !== undefined &&
              (typeof params.page !== "string" ||
                !/^-?\d+(\.\d+)?$/i.test(params.page))
            ) {
              throw new Response("Bad Request", {
                statusText: "Invalid page passed",
                status: 400,
              });
            }
            return true;
          },
        },
        {
          path: "products/category/:categoryName",
          element: <Products />,
          loader: ({ params }) => {
            if (params.category) {
              if (
                typeof params.category === "string" ||
                /^-?\d+(\.\d+)?$/i.test(params.category)
              ) {
                throw new Response("Bad Request", {
                  statusText: "Invalid category passed",
                  status: 400,
                });
              }
            }
            return true;
          },
        },
        {
          path: "products/products-details/:id",
          element: <ProductDetails />,
          loader: ({ params }) => {
            if (
              typeof params.id !== "string" ||
              /^-?\d+(\.\d+)?$/i.test(params.id)
            ) {
              throw new Response("Bad Request", {
                statusText: "Invalid id passed",
                status: 400,
              });
            }

            return true;
          },
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "sign-up",
          element: userConfirmation ? <Navigate to={"/"} /> : <SignUp />,
        },
        {
          path: "login",
          element: userConfirmation ? <Navigate to={"/"} /> : <Login />,
        },
        {
          path: "/wishlist",
          element: <Wishlist />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "personal-page/:id",
          element: <AccountPage />,
        },
        {
          path: "auth/signup/success",
          element: <AuthPageWithProvider status={true} />,
        },
        {
          path: "auth/signup/failure",
          element: <AuthPageWithProvider status={false} />,
        },
        ///users/${user._id}/verify/${verifyToken.token}
        {
          path: "/users/:userId/verify/:verifyToken",
          element: <VerifyEmail />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
