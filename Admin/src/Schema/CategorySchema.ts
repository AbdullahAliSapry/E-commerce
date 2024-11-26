import * as Yup from "yup";

const SchemaCategory = Yup.object().shape({
  name: Yup.string().min(3).max(40).required(),
  description: Yup.string().min(3).max(40).required(),
  totalAmount: Yup.number().required(),
  image: Yup.mixed()
    .required()

});

export default SchemaCategory;
