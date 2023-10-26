import React from "react";

const ProductCard = ({ image, ProductName, amount }) => {
  return (
    <>
      <div className=" w-64 h-60 bg-white flex justify-center items-center flex-col p-3 shadow-md rounded-md">
        <div className=" w-56 h-44 mb-1 overflow-hidden rounded-md">
          <img className="w-full h-full object-fill" src={image} alt="" />
        </div>
        <div className="flex items-center flex-col">
          <h4 className="text-base font-semibold capitalize tracking-wide">{ProductName}</h4>
          <p className="text-sm text-gray-500 font-medium mb-2">${amount}</p>
          <button className=" bg-green-800 hover:bg-green-800/90 text-white text-sm px-4 py-2 rounded-md">Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
