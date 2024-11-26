import Dropdown from "react-bootstrap/Dropdown";
import styles from "./AccountDrowp.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/Store";
import { logoutUser } from "@store/Api/AuthApi";

const {
  imageDrowpStyle,
  imageDrowpStyle2,
  styleItem,
  parentDrowp,
  logOutParent,
} = styles;
type obg = {
  icon: string;
  text: string;
  url?: string;
};
const icons: obg[] = [
  {
    icon: "bi bi-person",
    text: "Manage My Account",
    url: "personal-page/:id",
  },

  {
    icon: "bi bi-box2-heart",
    text: "My Order",
    url: "/orders/:id",
  },
  {
    icon: "bi bi-x-circle",
    text: "My Cancellations",
  },
  {
    icon: "bi bi-star",
    text: "My Reviews",
  },
  {
    icon: "bi bi-box-arrow-left",
    text: "Logout",
  },
];

function AccountDrowp() {
  const [color, setColor] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const handleToogle = (e: boolean) => {
    setColor(e);
  };
  return (
    <Dropdown onToggle={handleToogle} align={"end"}>
      <Dropdown.Toggle
        as={"span"}
        className={`${color ? imageDrowpStyle2 : imageDrowpStyle}`}>
        <i className="bi bi-person"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu className={parentDrowp}>
        {icons.map(({ icon, text, url }, index) => (
          <Dropdown.Item
            key={index}
            as={Link}
            to={`${url ? url : "/"}`}
            className={styleItem}>
            {text !== "Logout" ? (
              <>
                <i className={icon}></i>
                <span>{text}</span>
              </>
            ) : (
              <button
                className={logOutParent}
                onClick={() => dispatch(logoutUser())}>
                <i className={icon}></i>
                <span>{text}</span>
              </button>
            )}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default AccountDrowp;
