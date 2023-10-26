import React from "react";
import ProductCard from "./ProductCard";
import { product } from "../assets/Dummydb";

const Product = () => {
  return (
    <div className="w-screen h-[70vh] bg-slate-100 flex justify-center flex-col">
      <div className="w-[90%] mx-auto flex justify-center gap-4 mb-12">
        {product.map((item) => (
          <div key={item.id} className=" w-[95%] mx-auto pt-10">
            <ProductCard
              image={item.image}
              ProductName={item.productName}
              amount={item.amount}
            />
          </div>
        ))}
          </div>
          <div className="w-[90%] mx-auto flex justify-end flex-col ">
              <p className="mb-3 text-sm">Total: $14,000</p>
              <button className=" w-32 capitalize bg-red-900 hover:bg-red-900/90 text-white text-sm py-2 px-4 rounded-md">
                  place order
              </button>
              
          </div>
    </div>
  );
};

export default Product;
