import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  Email: Yup.string().required("email is required").email(),
  Password: Yup.string().required("password is required"),
  Name: Yup.string().required("name is required").min(3).max(100),
  ConfirmPassword: Yup.string()
    .required("confirm password is required")
    .min(3)
    .max(100)
    .oneOf([Yup.ref("Password")], "password does not match"),
});


export default RegisterSchema;