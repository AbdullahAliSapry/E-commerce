import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  Email: Yup.string().required("email is required").email(),
  Name: Yup.string().required("name is required"),
  Phone: Yup.string().matches(/\d{11}/,"Enter Correct phone number").required("Phone  number is required"),
  Message: Yup.string(),
});

export default ContactSchema;
