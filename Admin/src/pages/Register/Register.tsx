import styles from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import RegisterSchema from "../../Schema/RegisterSchema";
import { objAuth } from "../../utilities/Interfaces";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/Store";
import { RegisterApi } from "../../store/api/AuthApi";
const { parentToText, title, styleForm } = styles;

export default function Register() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigate = useNavigate();
  const { messageRegister } = useSelector((state: RootState) => state.Auth);
  const dispatch = useDispatch<AppDispatch>();
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
  return (
    <div
      className={`container mx-auto w-fit h-[100vh] flex justify-center items-center`}>
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
            className="outline-none border-none"
            onChange={formik.handleChange}
            value={formik.values.Name}
            onBlur={formik.handleBlur}
          />
          {formik.errors.Name ? (
            <div className="text-red-500">{formik.errors.Name}</div>
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
            <div className="text-red-500">{formik.errors.Email}</div>
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
            <div className="text-red-500">{formik.errors.Password}</div>
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
            <div className="text-red-500">{formik.errors.ConfirmPassword}</div>
          ) : null}
          <button type="submit">Create Account</button>
        </form>

        <div className="d-flex gap-2 align-items-center ">
          <span>Already have an account?</span>
          <Link className="text-black font-[500] text-[20px]" to="/admin-login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
