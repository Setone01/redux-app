import React from "react";
import cartProduct from "../../../assets/images/Frame 1000001910.png";

const Product = () => {
  return (
    <div className="w-full h-48 flex justify-start flex-col py-2">
      <div className="w-full flex mb-6">
        <div className=" w-32 h-24 flex items-center">
          <img className="w-full h-full" src={cartProduct} alt="" />
        </div>
        <div className="w-full h-full pr-3">
          <span className=" text-gray-500 text-sm font-normal mb-4">
            Order ID: #26328
          </span>
          <div className="w-full flex justify-between items-center flex-col gap-4">
            <div className="w-full flex justify-between text-[17px] text-black font-medium">
              <span className="">Efo Riro</span>
              <span className="capitalize">£14.99</span>
            </div>
            <div className="w-full flex justify-between text-gray-500 text-sm font-normal">
              <span>Delivered on: </span>
              <span>24-08-2023</span>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <button className="w-full bg-[#db3c25] text-white text-base font-normal rounded-3xl py-3 ">
          Repeat Order
        </button>
      </div>
    </div>
  );
};

export default Product;
