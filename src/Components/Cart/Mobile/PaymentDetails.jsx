import React from "react";
import cardLogo from "../../../assets/images/Group 16.png"

const PaymentDetails = () => {
  return (
    <div className="w-full border-y-[1.3px] border-gray-300 py-3">
          <div className=" flex justify-center flex-col">
              <div className="mb-2">
                  <h4 className="text-base text-black font-semibold">Payment Details</h4>
              </div>
              <div className="flex items-center gap-x-4 text-base text-black font-normal">
                  <img src={cardLogo} alt="" />
                  <p>John Doe</p>
                  <span className="text-sm font-light">******1234</span>
              </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
