import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  Email: Yup.string().required("email is required").email(),
  Password: Yup.string().required("password is required"),
});

export default LoginSchema;
