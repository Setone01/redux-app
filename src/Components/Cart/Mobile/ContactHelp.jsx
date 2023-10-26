import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";

const ContactHelp = () => {
  return (
    <div className="w-full border-y-[1.3px] py-3">
      <div className="">
        <div className="mb-7">
          <h4 className="text-base text-black font-medium">Need Help?</h4>
        </div>
        <div className="flex justify-between items-center text-sm text-[#db3c25]">
          <a href="" className="flex items-center gap-x-3">
            <span>
              <IoCallOutline size={18} />
            </span>
            <p>Contact Us</p>
            <span>
              <HiArrowUpRight size={16} />
            </span>
          </a>
          <a href="" className="flex items-center gap-x-3">
              <span>
                <TbTruckDelivery size={22} />
              </span>
              <p>Delivery Info</p>
              <span>
                <HiArrowUpRight size={16} />
              </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactHelp;
