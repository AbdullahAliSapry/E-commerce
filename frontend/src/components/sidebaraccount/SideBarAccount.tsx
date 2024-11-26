import { Link } from "react-router-dom";
import styles from "./SideBarAccount.module.css";
const { parentDiv, parentCon, active } = styles;
type obg = {
  text: string;
  ComponentName: string;
};
const buttons: obg[] = [
  {
    text: "My Profile",
    ComponentName: "Profile",
  },
  {
    text: "Address Book",
    ComponentName: "AddressBook",
  },
  {
    text: "My Payment Options",
    ComponentName: "PaymentOptions",
  },
  {
    text: "My Returns",
    ComponentName: "MyReturns",
  },
  {
    text: "My Cancellations",
    ComponentName: "MyCancellations",
  },
  {
    text: "It was received",
    ComponentName: "ItWasReceived",
  },
];
export default function SideBarAccount({
  setCompName,
}: {
  setCompName(name: string): void;
}) {
  const handleClick = (nameOfCom: string) => {
    setCompName(nameOfCom);
  };
  return (
    <div className={parentCon}>
      <div className={`parentDiv ${parentDiv}`}>
        <h3>Manage My Account</h3>
        {buttons.map((obj, index) => {
          return index < 3 ? (
            <button
              className={`btn ${index === 0 ? active : null}`}
              key={index}
              onClick={(e) => {
                const buttons = document.querySelectorAll(".parentDiv .btn");
                buttons.forEach((btn) => {
                  btn.classList.remove(active);
                });
                e.currentTarget.classList.add(active);
                handleClick(obj.ComponentName);
              }}>
              {obj.text}
            </button>
          ) : null;
        })}
      </div>

      <div className={`parentDiv ${parentDiv}`}>
        <h3>My Orders</h3>
        {buttons.map((obj, index) => {
          return index > 2 ? (
            <button
              className={`btn`}
              key={index}
              onClick={(e) => {
                const buttons = document.querySelectorAll(".parentDiv .btn");
                buttons.forEach((btn) => {
                  btn.classList.remove(active);
                });
                e.currentTarget.classList.add(active);
                handleClick(obj.ComponentName);
              }}>
              {obj.text}
            </button>
          ) : null;
        })}
      </div>
      <Link to={"/wishList"}>My WishList</Link>
    </div>
  );
}
