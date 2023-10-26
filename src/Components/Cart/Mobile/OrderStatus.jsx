import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const OrderStatus = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className=" flex justify-between items-center">
        <div className="">
          <h4>Order Status</h4>
          <div className="">
            <button>
              <IoIosArrowUp />
            </button>
          </div>
        </div>
              <div className="">
                  <div className="">
                      <div className="">
                          
                      </div>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
