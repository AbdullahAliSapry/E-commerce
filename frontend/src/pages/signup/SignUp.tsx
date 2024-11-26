import { FcGoogle } from "react-icons/fc";
import styles from "./SignUp.module.css";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import RegisterSchema from "src/schemas/RegisterSchema";
import { objAuth } from "src/utils/interfaces";
import { RegisterApi } from "@store/Api/AuthApi";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import Swal from "sweetalert2";
import login from "@images/login.jpeg";

const { parentCon, imgSign, parentToText, title, styleForm } = styles;

export default function SignUp() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { messageRegister } = useSelector((state: RootState) => state.Auth);
  const initialValues: objAuth = {
    Name: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  };
  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: RegisterSchema,
    onSubmit: (values: objAuth): void => {
      dispatch(RegisterApi(values));
      console.log(messageRegister);   
      if (messageRegister) {
        Swal.fire({
          title: messageRegister,
          text: "Please login !",
          icon: "success",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "log in",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login");
          }
        });
      }
    },
  });

  // auth with google
  const google = () => {
    const popupWindow = window.open(
      "http://localhost:5000/api/v1/auth/google/signup",
      "_self"
    );
    popupWindow?.focus();
  };
  return (
    <Container className={parentCon}>
      <div>
        <img className={imgSign} src={login} alt="" />
      </div>
      <div className={parentToText}>
        <div className={title}>
          <h1>Create an account</h1>
          <span>Enter your details below</span>
        </div>
        <form className={styleForm} onSubmit={formik.handleSubmit} noValidate>
          <input
            type="text"
            placeholder="Name"
            name="Name"
            onChange={formik.handleChange}
            value={formik.values.Name}
            onBlur={formik.handleBlur}
          />
          {formik.errors.Name ? (
            <div className="text-danger">{formik.errors.Name}</div>
          ) : null}
          <input
            type="email"
            placeholder="Email"
            name="Email"
            onChange={formik.handleChange}
            value={formik.values.Email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.Email && formik.errors.Email ? (
            <div className="text-danger">{formik.errors.Email}</div>
          ) : null}
          <input
            type="password"
            placeholder="Password"
            name="Password"
            onChange={formik.handleChange}
            value={formik.values.Password}
            onBlur={formik.handleBlur}
          />
          {formik.touched.Password && formik.errors.Password ? (
            <div className="text-danger">{formik.errors.Password}</div>
          ) : null}
          <input
            type="password"
            placeholder="Confirm Password"
            name="ConfirmPassword"
            onChange={formik.handleChange}
            value={formik.values.ConfirmPassword}
            onBlur={formik.handleBlur}
          />
          {formik.touched.ConfirmPassword && formik.errors.ConfirmPassword ? (
            <div className="text-danger">{formik.errors.ConfirmPassword}</div>
          ) : null}
          <button type="submit">Create Account</button>
        </form>
        <button onClick={google}>
          <FcGoogle /> Sign up with Google
        </button>
        <div className="d-flex gap-2 align-items-center ">
          <span>Already have an account?</span>
          <Link
            className="text-black text-decoration-none border-bottom border-2 border-dark"
            to="/login">
            Login
          </Link>
        </div>
      </div>
    </Container>
  );
}
