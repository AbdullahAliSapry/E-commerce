import styles from "./Category.module.css";
const { parent } = styles;
export default function Category({ image, name }: { image: string; name: string }) {
  return (
    <div className={parent}>
      <img src={`${image}`} alt="img" />
      <h3 className="name">{name}</h3>
    </div>
  );
}
