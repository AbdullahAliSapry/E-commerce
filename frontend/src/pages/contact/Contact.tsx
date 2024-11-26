import { Form } from "react-bootstrap";
import styles from "./Contact.module.css";
import { useFormik } from "formik";
import ContactSchema from "src/schemas/ContactSchema";

const {
  headerStyleIcon,
  detailsStyle,
  parentDiv,
  formStyle,
  rightSec,
  styleButton,
} = styles;
type obj = {
  Name: string;
  Email: string;
  Phone: string;
  Message: string;
};
export default function Contact() {
  const initialValues: obj = {
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  };
  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema:ContactSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className={parentDiv}>
      <div className={rightSec}>
        <div>
          <div className={headerStyleIcon}>
            <i className="bi bi-telephone-fill"></i>
            <span>Call To Us</span>
          </div>
          <div className={detailsStyle}>
            <span>We are available 24/7, 7 days a week.</span>
            <span>Phone: +8801611112222</span>
          </div>
        </div>
        <div>
          <div className={headerStyleIcon}>
            <i className="bi bi-envelope"></i>
            <span>Write To US</span>
          </div>
          <div className={detailsStyle}>
            <span>
              Fill out our form and we will contact you within 24 hours.
            </span>
            <span>Emails: customer@exclusive.com</span>
            <span>Emails: support@exclusive.com</span>
          </div>
        </div>
      </div>
      <div className={formStyle}>
        <form className={formStyle} noValidate onSubmit={formik.handleSubmit}>
          <div>
            <div>
              <Form.Control
                placeholder="Your Name *"
                type="text"
                name="Name"
                value={formik.values.Name}
                onChange={formik.handleChange}
                isValid={formik.touched.Name && !formik.errors.Name}
              />
              <div>
                {formik.touched.Name && formik.errors.Name ? (
                  <div className="text-danger">{formik.errors.Name}</div>
                ) : null}
              </div>
            </div>
            <div>
              <Form.Control
                placeholder="Your Email *"
                type="email"
                name="Email"
                value={formik.values.Email}
                onChange={formik.handleChange}
                isValid={formik.touched.Email && !formik.errors.Email}
              />
              <div>
                {formik.touched.Email && formik.errors.Email ? (
                  <div className="text-danger">{formik.errors.Email}</div>
                ) : null}
              </div>
            </div>
            <div>
              <Form.Control
                placeholder="Your Phone *"
                type="text"
                name="Phone"
                value={formik.values.Phone}
                onChange={formik.handleChange}
                isValid={formik.touched.Phone && !formik.errors.Phone}
              />
              <div>
                {formik.touched.Phone && formik.errors.Phone ? (
                  <div className="text-danger">{formik.errors.Phone}</div>
                ) : null}
              </div>
            </div>
          </div>

          <Form.Control
            as="textarea"
            placeholder="Your Massage"
            rows={10}
            name="Message"
            value={formik.values.Message}
            onChange={formik.handleChange}
          />
          <div>
            {formik.touched.Message && formik.errors.Message ? (
              <div className="text-danger">{formik.errors.Message}</div>
            ) : null}
          </div>
          <div className={styleButton}>
            <button className="buttonMain" type="submit">
              Send Massage
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
