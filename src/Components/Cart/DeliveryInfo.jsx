import React from "react";

const DeliveryInfo = () => {
  return (
    <div className="w-full text-sm font-normal">
      <div className="flex justify-start items-center text-sm font-normal border-b-[1.2px] pb-2 mb-4 ">
        <span className=" text-gray-200 mr-2">Order Date:</span>
        <p>Feb 16, 2022</p>
        <div className="w-[1.3px] h-5 bg-gray-200 mx-4"></div>
        <div className="">
          <span></span>
          <p className="text-[#db3c25]">Estimated Delivery: May 16, 2022</p>
        </div>
      </div>
      <div className="w-full grid grid-cols-3">
        <div className="flex justify-start items-center">
          <div className="flex justify-start items-center flex-col gap-2">
            <p className="text-[#db3c25]">Order Comfirmed</p>
            <div className=" ">
              <div className="w-5 h-5 bg-[#db3c25] rounded-full"></div>
              {/* <div className="h-2 w-full bg-[#db3c25] -ml-2"></div> */}
            </div>
            <span>Wed 11th, Jan</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center flex-col gap-2">
            <p className="text-[#db3c25]">Shipped</p>
            <div className=" flex justify-center items-center ">
              <div className="w-5 h-5 bg-[#db3c25] rounded-full"></div>
              {/* <div className="h-2 w-full bg-[#db3c25] -ml-2"></div> */}
            </div>
            <span>Wed 11th, Jan</span>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex justify-center items-center flex-col gap-2">
            <p>Delivered</p>
            <div className=" flex justify-center items-center ">
              <div className="w-5 h-5 bg-[#db3c25] rounded-full"></div>
            </div>
            <span>Expected by, Mon 16th</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
