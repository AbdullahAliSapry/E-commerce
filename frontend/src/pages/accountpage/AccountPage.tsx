import SideBarAccount from "@components/sidebaraccount/SideBarAccount";
import styles from "./AccountPage.module.css";
import { Container } from "react-bootstrap";
import { useState } from "react";
import FormEditAccount from "@components/formeditaccount/FormEditAccount";
import AddressCom from "@components/addresscom/AddressCom";
import PayMentOption from "@components/paymentComp/PayMentOption";
import MoreDetails from "@components/moredetailstoaccount/MoreDetails";
const { title, contentStyle, name, parentDev, styleConCom } = styles;
export default function AccountPage() {
  const [com, setCom] = useState("");
  return (
    <Container className={parentDev}>
      <div className={title}>
        Welcome!
        <span className={name}> Md Rimel</span>
      </div>
      <div className={contentStyle}>
        <div>
          <SideBarAccount setCompName={setCom} />
        </div>
        <div className={styleConCom}>
          {com == "Profile" ? (
            <FormEditAccount />
          ) : com == "AddressBook" ? (
            <AddressCom />
          ) : com == "PaymentOptions" ? (
            <PayMentOption />
          ) : com == "MyReturns" ? (
            <MoreDetails />
          ) : com == "MyCancellations" ? (
            <MoreDetails />
          ) : com == "ItWasReceived" ? (
            <MoreDetails />
          ) : null}
        </div>
      </div>
    </Container>
  );
}
