import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import { ChangeEvent, useRef, useState } from "react";
import { IProduct } from "../../../utilities/Interfaces";
import SchemaProduct from "../../../Schema/ProductSchema";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/Store";
import { createProductApi } from "../../../store/api/ProductApi";

export default function AddNewProduct() {
  const [openModal, setOpenModal] = useState(false);
  const titleInputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch<AppDispatch>();

  const initialValues: IProduct = {
    title: "",
    price: 0,
    description: "",
    category: "",
    thumbnail: "",
    stock: 0,
    rating: 0,
    brand: "",
    images: [],
    discountPercentage: 0,
  };
  const formik = useFormik({
    initialValues,
    validationSchema: SchemaProduct,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values: IProduct) => {
      dispatch(createProductApi(values));
    },
  });

  return (
    <div>
      <Button
        className="!bg-mainColor border-none"
        onClick={() => setOpenModal(true)}>
        Add New Product
      </Button>
      <Modal
        show={openModal}
        popup
        onClose={() => setOpenModal(false)}
        initialFocus={titleInputRef}>
        <Modal.Header />
        <Modal.Body className="!bg-white">
          <h3 className="text-xl font-medium dark:text-white text-center text-mainColor">
            Add a New Product
          </h3>
          <form noValidate onSubmit={formik.handleSubmit}>
            <div className="space-y-6 flex w-[100%] items-baseline justify-center gap-[100px]">
              <div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="title" value="Product Title" />
                  </div>
                  <TextInput
                    id="title"
                    className="w-[250px]"
                    ref={titleInputRef}
                    placeholder="Product Title"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                    name="title"
                  />
                  {formik.touched.title && formik.errors.title && (
                    <div className="text-red-500">{formik.errors.title}</div>
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="price" value="Price" />
                  </div>
                  <TextInput
                    id="price"
                    type="number"
                    placeholder="Price"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.price}
                    name="price"
                  />
                  {formik.touched.price && formik.errors.price && (
                    <div className="text-red-500">{formik.errors.price}</div>
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="description" value="Description" />
                  </div>
                  <TextInput
                    className="w-[250px]"
                    id="description"
                    placeholder="Description"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                    name="description"
                  />
                  {formik.touched.description && formik.errors.description && (
                    <div className="text-red-500">
                      {formik.errors.description}
                    </div>
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="category" value="Category" />
                  </div>
                  <TextInput
                    id="category"
                    placeholder="Category"
                    className="w-[250px]"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.category}
                    name="category"
                  />
                  {formik.touched.category && formik.errors.category && (
                    <div className="text-red-500">{formik.errors.category}</div>
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="thumbnail" value="Thumbnail URL" />
                  </div>
                  <TextInput
                    id="thumbnail"
                    placeholder="Thumbnail URL"
                    className="w-[250px]"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.thumbnail}
                    name="thumbnail"
                  />
                  {formik.touched.thumbnail && formik.errors.thumbnail && (
                    <div className="text-red-500">
                      {formik.errors.thumbnail}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="stock" value="Stock" />
                  </div>
                  <TextInput
                    id="stock"
                    type="number"
                    placeholder="Stock"
                    className="w-[250px]"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.stock}
                    name="stock"
                  />
                  {formik.touched.stock && formik.errors.stock && (
                    <div className="text-red-500">{formik.errors.stock}</div>
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="rating" value="Rating" />
                  </div>
                  <TextInput
                    id="rating"
                    type="number"
                    placeholder="Rating"
                    className="w-[250px]"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.rating}
                    name="rating"
                  />
                  {formik.touched.rating && formik.errors.rating && (
                    <div className="text-red-500">{formik.errors.rating}</div>
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="brand" value="Brand" />
                  </div>
                  <TextInput
                    id="brand"
                    placeholder="Brand"
                    className="w-[250px]"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.brand}
                    name="brand"
                  />
                  {formik.touched.brand && formik.errors.brand && (
                    <div className="text-red-500">{formik.errors.brand}</div>
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="images"
                      value="Images URLs (comma separated)"
                    />
                  </div>
                  <TextInput
                    id="images"
                    placeholder="Images URLs (comma separated)"
                    className="w-[250px]"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      const values = e.currentTarget.value.split(",");
                      formik.setFieldValue("images", values);
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.images}
                    name="images"
                  />
                  {formik.touched.images && formik.errors.images && (
                    <div className="text-red-500">{formik.errors.images}</div>
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="discountPercentage"
                      value="Discount Percentage"
                    />
                  </div>
                  <TextInput
                    id="discountPercentage"
                    type="number"
                    placeholder="Discount Percentage"
                    className="w-[250px]"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.discountPercentage}
                    name="discountPercentage"
                  />
                  {formik.touched.discountPercentage &&
                    formik.errors.discountPercentage && (
                      <div className="text-red-500">
                        {formik.errors.discountPercentage}
                      </div>
                    )}
                </div>
              </div>
            </div>
            <div className="w-fit mx-auto my-3">
              <Button  type="submit" className="!bg-mainColor">Add New Product</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
