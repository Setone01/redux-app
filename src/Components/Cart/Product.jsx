import React from "react";
import cartImg from "../../assets/images/Frame 1000001910.png"

const Product = () => {
  return (
    <div className="w-full grid grid-cols-3 items-center ring-[1.3px] ring-gray-200 p-5 rounded-md">
        <div className="w-full flex justify-start ">
          <div className=" w-32 h-32 bg-white overflow-hidden mr-10">
            <img className="w-full h-full" src={cartImg} alt="" />
          </div>
          <div className="flex justify-center flex-col gap-4">
            <h3 className=" capitalize text-base text-black font-medium">Efo Riro</h3>
            <p className="flex items-center text-sm text-gray-400 font-normal">
              Hot <div className="w-[1.3px] h-4 mx-3 bg-gray-400"></div>25kg
            </p>
          </div>
        </div>
      <div className="w-full flex justify-center items-center flex-col gap-2">
        <div className="">
          <h4 className="text-sm text-black font-medium">£14.99</h4>
          <p className="text-gray-400 text-sm font-normal">Qty:2</p>
        </div>
      </div>
      <div className="">
        <button className="w-full bg-[#db3c25] hover:bg-[#db3c25]/80 text-white text-sm font-medium  py-3 rounded-2xl">
          Repeat Order
        </button>
      </div>
    </div>
  );
};

export default Product;
