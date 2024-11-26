import { Container } from "react-bootstrap";
import styles from "./Login.module.css";
import { useFormik } from "formik";
import LoginSchema from "src/schemas/LoginSchema";
import { objAuth } from "src/utils/interfaces";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/Store";
import { LoginApi } from "@store/Api/AuthApi";
import login from "@images/login.jpeg"
const { parentCon, imgSign, parentToText, title, styleForm } = styles;
import {toast} from "react-toastify"
export default function Login() {
  const initialValues: Omit<objAuth, "Name" | "ConfirmPassword"> = {
    Email: "",
    Password: "",
  };
  const dispatch = useDispatch<AppDispatch>();
  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
     
      dispatch(LoginApi(values));
      
    },
  });

  return (
    <Container className={parentCon}>
      <div>
        <img className={imgSign} src={login} alt="" />
      </div>
      <div className={parentToText}>
        <div className={title}>
          <h1>Log in to Exclusive</h1>
          <span>Enter your details below</span>
        </div>
        <form className={styleForm} noValidate onSubmit={formik.handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="Email"
            autoComplete="off"
            value={formik.values.Email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="text-danger">{formik.errors.Email}</div>
          <input
            type="password"
            placeholder="Password"
            name="Password"
            value={formik.values.Password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="text-danger">
            {formik.touched.Password && formik.errors.Password}
          </div>
          <div>
            <button type="submit">Log in </button>
            <span>Forget Password?</span>
          </div>
        </form>
      </div>
    </Container>
  );
}
