import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { HiCheck } from "react-icons/hi2";

const OrderStatus = () => {
  const handleDropdown = () => {
    setOpen(!open);
  };

  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className=" flex justify-between flex-col border-y-[1.3px] py-2">
        <div className="flex justify-between items-center">
          <h4 className="text-base text-black font-medium">Order Status</h4>
          <div className="flex items-center">
            <button onClick={handleDropdown}>
              {open ? <IoIosArrowDown size={18} /> : <IoIosArrowUp size={18} />}
            </button>
          </div>
        </div>
        {open ? (
          " "
        ) : (
          <div className="flex justify-center flex-col mt-3">
            <div className="flex items-center gap-x-6">
              <div className=" flex justify-center items-center flex-col">
                <div className="w-8 h-8 flex justify-center items-center text-white font-semibold bg-[#db3c25] m-[3px] rounded-full">
                  <HiCheck />
                </div>
                <div className="w-1 h-14 bg-[#db3c25]"></div>
              </div>
              <div className="flex justify-center flex-col mb-2">
                <h4 className="text-black text-base font-medium">
                  Order Comfirmed
                </h4>
                <span className="text-sm text-gray-400 font-light">
                  Your Order is being processed
                </span>
                <span className="text-sm text-gray-400 font-light">
                  Estimated time: 3 days
                </span>
              </div>
            </div>
            <div className="flex items-center gap-x-6">
              <div className=" flex items-center flex-col">
                <div className="w-8 h-8 flex justify-center items-center text-white font-semibold bg-[#db3c25] m-[3px] rounded-full">
                  <HiCheck />
                </div>
                <div className="w-1 h-12 bg-[#db3c25]"></div>
              </div>
              <div className="flex justify-center flex-col mb-3">
                <h4 className="text-black text-base font-medium">
                  Order Shipped
                </h4>
                <span className="text-sm text-gray-400 font-light">
                  Your Order is being processed
                </span>
                <span className="text-sm text-gray-400 font-light">
                  Estimated time: 3 days
                </span>
              </div>
            </div>
            <div className="flex gap-x-6">
              <div className=" flex justify-start flex-col">
                <div className="w-8 h-8 flex justify-center items-center text-white font-semibold bg-[#db3c25] m-[3px] rounded-full">
                  <HiCheck />
                </div>
              </div>
              <div className="flex justify-center flex-col mb-3">
                <h4 className="text-black text-base font-medium">
                  Order Delivered
                </h4>
                <span className="text-sm text-gray-400 font-light">
                  Your Order is being processed
                </span>
                <span className="text-sm text-gray-400 font-light">
                  Estimated time: 3 days
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderStatus;
