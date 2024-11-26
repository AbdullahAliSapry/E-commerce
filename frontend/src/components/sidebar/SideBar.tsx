import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { useEffect } from "react";
import { GetAllCategoriesApi } from "@store/Api/CatgoryApi";

export default function SideBar() {
  const dispatch = useDispatch<AppDispatch>();
  const { categories } = useSelector((state: RootState) => state.Category);

  useEffect(() => {
    dispatch(GetAllCategoriesApi());
  }, []);

  return (
    <div>
      {categories.map((category) => {
        return (
          <Link to={`/products/category/${category.name}`} key={category._id}>
            {category.name}
          </Link>
        );
      })}
    </div>
  );
}
