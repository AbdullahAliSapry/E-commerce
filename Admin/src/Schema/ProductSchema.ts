import * as Yup from "yup";

const SchemaProduct = Yup.object().shape({
  title: Yup.string()
    .min(3, "Title must be at least 3 characters")
    .max(70, "Title must be at most 70 characters")
    .required("Title is required"),
  price: Yup.number()
    .required("Price is required")
    .positive("Price must be a positive number"),
  description: Yup.string()
    .min(3, "Description must be at least 3 characters")
    .max(70, "Description must be at most 70 characters")
    .required("Description is required"),
  category: Yup.string()
    .min(3, "Category must be at least 3 characters")
    .max(70, "Category must be at most 70 characters")
    .required("Category is required"),
  thumbnail: Yup.string()
    .url("Thumbnail must be a valid URL")
    .required("Thumbnail is required"),
  stock: Yup.number()
    .required("Stock is required")
    .integer("Stock must be an integer")
    .positive("Stock must be a positive number"),
  rating: Yup.number()
    .required("Rating is required")
    .min(0, "Rating must be at least 0")
    .max(5, "Rating must be at most 5"),
  brand: Yup.string()
    .min(3, "Brand must be at least 3 characters")
    .max(70, "Brand must be at most 70 characters")
    .required("Brand is required"),
  images: Yup.array()
    .of(Yup.string())
    .required("Images are required"),
  discountPercentage: Yup.number()
    .min(0, "Discount percentage must be at least 0")
    .max(100, "Discount percentage must be at most 100"),
});

export default SchemaProduct;
