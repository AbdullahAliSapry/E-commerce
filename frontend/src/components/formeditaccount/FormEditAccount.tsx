import { Form } from "react-bootstrap";
import styles from "./FormEditAccount.module.css";
const { formStyle, styletitle, formParent, ButtonsStyle, cancelStyle } = styles;
export default function FormEditAccount() {
  return (
    <div>
      <h3 className={styletitle}>Edit Your Profile</h3>
      <form noValidate className={formParent}>
        <div className={formStyle}>
          <div>
            <Form.Label htmlFor="fName">First Name</Form.Label>
            <Form.Control placeholder="" type="text" id="fName" />
          </div>
          <div>
            <Form.Label htmlFor="lName">Last Name</Form.Label>
            <Form.Control placeholder="" type="text" id="lName" />
          </div>
        </div>
        <div className={formStyle}>
          <div>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control placeholder="" type="text" id="email" />
          </div>
          <div>
            <Form.Label htmlFor="address">Address</Form.Label>
            <Form.Control placeholder="" type="text" id="address" />
          </div>
        </div>

        <div className={formStyle}>
          <h3>Password Changes</h3>
          <Form.Control placeholder="Current Password" type="password" />
          <Form.Control placeholder="New Password" type="password" />
          <Form.Control placeholder="Confirm New Password" type="password" />
        </div>
        <div className={ButtonsStyle}>
          <button className={cancelStyle}>cancel</button>
          <button className="buttonMain">Save Changes</button>
        </div>
      </form>
    </div>
  );
}
