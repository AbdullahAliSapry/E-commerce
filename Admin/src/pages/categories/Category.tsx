import { AddNewCategory } from "./components/AddNewCategory";
import { CategoryTable } from "./components/CategoryTable";

export default function Category() {
  return (
    <div>
      <div className="flex justify-between items-center p-[10px]">
        <h3 className="text-[20px] text-mainColor">Categories</h3>
        <AddNewCategory />
      </div>
      <div>
        <CategoryTable />
      </div>
    </div>
  );
}
