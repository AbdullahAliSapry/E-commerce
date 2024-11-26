import { Button, FileInput, Label, Modal, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import { ChangeEvent, useRef, useState } from "react";
import SchemaCategory from "../../../Schema/CategorySchema";
import { ICategory } from "../../../utilities/Interfaces";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/Store";
import { AddNewCategoryApi } from "../../../store/api/Category.calls";

export function AddNewCategory() {
  const [openModal, setOpenModal] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const initialValues: ICategory = {
    name: "",
    image: null,
    description: "",
    totalAmount: 0,
  };
  const formik = useFormik({
    initialValues,
    validationSchema: SchemaCategory,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values: ICategory) => {
      const formData = new FormData();
      formData.append("name", values.name);
      if (values.image) {
        formData.append("image", values.image);
      }
      formData.append("description", values.description);
      formData.append("totalAmount", values.totalAmount.toString());
      dispatch(AddNewCategoryApi(formData));
    },
  });

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Add New Category</Button>
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
        initialFocus={nameInputRef}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Add New Category
            </h3>
            <form onSubmit={formik.handleSubmit} noValidate>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="nameCategory" value="Name Category" />
                </div>
                <TextInput
                  id="nameCategory"
                  ref={nameInputRef}
                  placeholder="Name Category"
                  required
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="text-red-500">
                  {formik.touched.name && formik.errors.name}
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="DescriptionCategory"
                    value="Description Category"
                  />
                </div>
                <TextInput
                  id="DescriptionCategory"
                  placeholder="Description Category"
                  required
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="text-red-500">
                  {formik.touched.description && formik.errors.description}
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="TotalAmount" value="Total Amount" />
                </div>
                <TextInput
                  id="TotalAmount"
                  placeholder="Total Amount"
                  required
                  name="totalAmount"
                  value={formik.values.totalAmount}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="text-red-500">
                  {formik.touched.totalAmount && formik.errors.totalAmount}
                </div>
              </div>
              <div id="fileUpload" className="max-w-md">
                <div className="mb-2 block">
                  <Label htmlFor="file" value="Upload file" />
                </div>
                <FileInput
                  id="file"
                  helperText="Enter Img To Category"
                  name="image"
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const file = event.currentTarget.files?.[0];
                    formik.setFieldValue("image", file);
                  }}
                  onBlur={formik.handleBlur}
                />
                <div className="text-red-500">
                  {formik.touched.image && formik.errors.image}
                </div>
              </div>
              <div className="w-full">
                <Button type="submit">Add New Category</Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
