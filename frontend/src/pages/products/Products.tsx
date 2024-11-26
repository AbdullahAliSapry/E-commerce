import styles from "./Products.module.css";
import { Container } from "react-bootstrap";
import CardToProducts from "./CardToProducts";
import PaginationProducts from "src/shared/PaginationProducts/PaginationProducts";
import { AppDispatch, RootState } from "@store/Store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  GetAllProductsApi,
  GetAllProductsApiWithCategory,
} from "@store/Api/ProductsApi";
import { useParams } from "react-router-dom";

const { mainConToProducts, parentPag } = styles;
export default function Products() {
  const { categoryName } = useParams();

  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state.Products);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    if (categoryName) {
      dispatch(GetAllProductsApiWithCategory(categoryName));
    } else {
      dispatch(GetAllProductsApi(currentPage, 8));
    }
  }, [currentPage]);
  return (
    <Container className={`${mainConToProducts}`}>
      {products.map((product) => {
        return (
          <CardToProducts
            key={product._id}
            product={product}
            showDiscount={false}
            showNew={false}
            ratingN={product.rating}
          />
        );
      })}
      {categoryName ? (
        <>

        </>
      ) : (
        <>
          {" "}
          <div className={parentPag}>
            <PaginationProducts
              currPage={currentPage}
              setCurrentPage={setCurrentPage}
              isLoading={false}
              totalElementsPerPage={8}
              route="/products"
            />
          </div>
        </>
      )}
    </Container>
  );
}
