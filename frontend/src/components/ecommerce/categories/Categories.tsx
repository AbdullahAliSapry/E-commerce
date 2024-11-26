import Category from "@components/categries/Category";
import HeaderToProducts from "../hedaerToProducts/HeaderToProducts";
import SliderToCart from "@components/slidertocart/SliderToCart";
import { useSelector } from "react-redux";
import {  RootState } from "@store/Store";
import { ReactNode } from "react";
import { JSX } from "react/jsx-runtime";


export default function Categories() {
  const { categories } = useSelector((state: RootState) => state.Category);
  const categoriesCon: JSX.Element[] | ReactNode[] = [];
  categories.forEach((category) => {
    categoriesCon.push(
      <Category
        key={category._id}
        name={category.name}
        image={category.imgCategory.url}
      />
    );
  });

  return (
    <div className="borderMain">
      <HeaderToProducts title="Categories" />
      <h3
        style={{
          fontSize: "25px",
          fontWeight: "600",
          color: "#000000",
        }}>
        Browse By Category
      </h3>
      <SliderToCart SwiperThing={categoriesCon} />
    </div>
  );
}
