import Dropdown from "react-bootstrap/Dropdown";
import styles from "./TopHeder.module.css";
const {Btn_lang}=styles
function DropDwonToLang() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        className={Btn_lang}
        variant="success"
        id="dropdown-basic">
        English
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">English</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Arabic</Dropdown.Item>
        <Dropdown.Item href="#/action-3">France</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDwonToLang;
