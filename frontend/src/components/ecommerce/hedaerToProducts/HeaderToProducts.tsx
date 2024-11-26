import styles from "./HeaderToProducts.module.css";
const { parentContainer2 } = styles;

export default function HeaderToProducts({ title }: { title: string }) {
  return (
    <div className={parentContainer2}>
      {" "}
      <span></span>
      <h4>{title}</h4>
    </div>
  );
}
