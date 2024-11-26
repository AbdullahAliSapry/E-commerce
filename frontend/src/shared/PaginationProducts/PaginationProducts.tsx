import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import styles from "./PaginationProducts.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { getAllProductsCount } from "@store/Api/ProductsApi";
const { parent } = styles;
interface IPaginationInputs {
  totalElementsPerPage: number;
  currPage: number;
  route: string;
  isLoading: boolean;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function PaginationProducts({
  totalElementsPerPage,
  currPage,
  route,
  isLoading,
  setCurrentPage,
}: IPaginationInputs) {
  const dispatch = useDispatch<AppDispatch>();

  const { productsCount } = useSelector((state: RootState) => state.Products);
  useEffect(() => {
    dispatch(getAllProductsCount());
  }, [productsCount]);

  const numberItemPagination = Math.ceil(productsCount / totalElementsPerPage);
  const [active, setActive] = useState(1);
  const items = [];
  const navigate = useNavigate();

  const { page } = useParams();

  for (let number = 1; number <= numberItemPagination; number++) {
    items.push(
      <Pagination.Item
        color="green"
        key={number}
        active={number === active}
        style={{
          backgroundColor: "rgb(219, 68, 68)",
        }}>
        {number}
      </Pagination.Item>
    );
  }
  function goToPage(pageNum: number): void {
    navigate(route + "/" + pageNum);
  }

  // useEffect(() => {
  //   if (isLoading) return;
  //   if (currPage > numberItemPagination && currPage != 1) {
  //     goToPage(numberItemPagination || 1);
  //   }
  //   if (currPage < 1) {
  //     goToPage(1);
  //   }
  //   if (page != undefined && +page != active) {
  //     setActive(+page);
  //   }
  // }, [currPage, numberItemPagination, isLoading]);

  useEffect(() => {
    if (isLoading) return;

    if (page!=undefined&& + page != active) {
       setActive(+page);
       setCurrentPage(+page);
       goToPage(+page);
    }

  }, [page, isLoading]);

  return (
    <div className={parent}>
      <Pagination>
        <Pagination.Prev
          onClick={() => {
            if (active > 1) {
              setActive((a) => a - 1);
              setCurrentPage(active - 1);
              goToPage(active - 1);
            }
          }}
        />
        {items}
        <Pagination.Next
          onClick={() => {
            if (active < numberItemPagination) {
              setActive(active + 1);
              setCurrentPage(active + 1);
              goToPage(active + 1);
            }
          }}
        />
      </Pagination>
    </div>
  );
}
