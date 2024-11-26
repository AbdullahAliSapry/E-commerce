import { useDispatch } from "react-redux";
import { objAuth } from "../../utilities/Interfaces";
import styles from "./Login.module.css";
import { AppDispatch } from "../../store/Store";
import { useFormik } from "formik";
import LoginSchema from "../../Schema/LoginSchema";
import { LoginApi } from "../../store/api/AuthApi";
const { parentCon, parentToText, title, styleForm } = styles;

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
    <div className={`${parentCon} container mx-auto w-fit`}>
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
    </div>
  );
}
