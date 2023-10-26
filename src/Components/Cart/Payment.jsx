import React from "react";
import cardLogo from "../../assets/images/Group 16.png";

const Payment = () => {
  return (
    <div className="w-full grid grid-cols-2 p-5 ring-[1.5px] ring-gray-200 rounded-md">
      <div className="flex justify-center flex-col">
        <div className="mb-2">
          <h4 className=" text-sm font-medium">Payment Details</h4>
        </div>
        <div className="w-full flex justify-start items-center gap-3">
          <img className=" " src={cardLogo} alt="" />
          <p className=" capitalize text-sm font-normal">John doe</p>
          <p className="text-xs">123456789012</p>
        </div>
      </div>
      <div className="flex justify-center flex-col">
        <div className="flex justify-center flex-col">
          <h4 className="text-base text-black font-semibold mb-2">Delivery</h4>
          <span className="text-base text-gray-600 font-medium mb-1">Address</span>
          <p className="text-sm text-black font-light ">
            International House, 64 Nile Street, London, NI 7SR, United Kingdom
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
