import React from "react";
import Product from "./Product";
import Summary from "./Summary";
import Payment from "./Payment";
import DeliveryInfo from "./DeliveryInfo";

const index = () => {
  return (
    <div className="w-screen h-screen bg-white overflow-x-hidden">
      <div className="w-[80%] mx-auto flex justify-normal flex-col gap-8 py-10">
        <div className="">
          <h3 className="font-medium text-lg">Order Details</h3>
        </div>
        <DeliveryInfo />
        <Product />
        <Payment />
        <Summary />
      </div>
    </div>
  );
};

export default index;
