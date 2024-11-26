import { FaArrowUp } from "react-icons/fa";
import { Progress } from "flowbite-react";

export function CategoryTable() {
  return (
    <div className="parent p-[10px] bg-white rounded-lg w-[350px]">
      <div className="header">
        <div className="flex gap-4">
          <div className="img">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="w-[100px] rounded-lg"
            />
          </div>
          <div className="details d-flex flex-col">
            <h1 className="name text-[20px] font-[600]">lorem</h1>
            <span className="price text-[#646464] font-[600]">$44</span>
          </div>
        </div>
        <div></div>
      </div>
      <div className="summarry">
        <h4 className="text-[20px]">summary</h4>
        <p className="pl-[5px] text-[14px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi dicta
        </p>
      </div>
      <div className="more-details flex flex-col border-[#bebebd] border-[2px] m-1 rounded-xl p-[10px]">
        <div className="flex justify-between items-center border-b-2 border-[#bebebd] py-2">
          <h1>Sales</h1>
          <div className="flex items-center gap-1">
            <FaArrowUp className="text-[#ffa52f] text-[20px]" />
            <span className="text-[#646464] text-[20px]">555</span>
          </div>
        </div>
        <div className="flex justify-between items-center py-2">
          <h1>Remaing</h1>
          <div className="flex items-center gap-1">
            <Progress progress={45} color="yellow" className="w-[140px]" />
            <span className="text-[#646464] text-[20px]">555</span>
          </div>
        </div>
      </div>
    </div>
  );
}
