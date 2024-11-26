import AddNewProduct from "./components/AddNewProduct";
import AllProducts from "./components/AllProducts";

export default function Products() {
  return (
    <div className="overflow-x-auto w-[100%] bg-white">
      <div className="flex justify-between items-center px-3">
        <span className="text-[20px] font-[600] text-mainColor px-2 my-3 inline-block">
          All Products{" "}
        </span>
        <AddNewProduct />
      </div>
      <AllProducts />
    </div>
  );
}
