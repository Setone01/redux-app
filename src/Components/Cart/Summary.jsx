import React from "react";

const Summary = () => {
  return (
    <div className="w-full h-max grid grid-cols-2 justify-between p-4 flex-wrap ring-[1.3px] ring-gray-200 outline-none rounded-md">
      <div className="w-full flex flex-col">
        <div className="mb-2">
          <h4 className="capitalize font-medium text-base text-black tracking-wider">
            Need Help
          </h4>
        </div>
        <div className="flex justify-center flex-col gap-2 text-sm font-light capitalize">
          <a href="" className="w-max flex items-center">
            <span className="mr-2">
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 10C8.55 10 9.021 9.804 9.413 9.412C9.80433 9.02067 10 8.55 10 8C10 7.45 9.80433 6.979 9.413 6.587C9.021 6.19567 8.55 6 8 6C7.45 6 6.97933 6.19567 6.588 6.587C6.196 6.979 6 7.45 6 8C6 8.55 6.196 9.02067 6.588 9.412C6.97933 9.804 7.45 10 8 10ZM8 20C5.31667 17.7167 3.31267 15.5957 1.988 13.637C0.662667 11.679 0 9.86667 0 8.2C0 5.7 0.804333 3.70833 2.413 2.225C4.021 0.741667 5.88333 0 8 0C10.1167 0 11.979 0.741667 13.587 2.225C15.1957 3.70833 16 5.7 16 8.2C16 9.86667 15.3377 11.679 14.013 13.637C12.6877 15.5957 10.6833 17.7167 8 20Z"
                  fill="#666666"
                />
              </svg>
            </span>
            contact us{" "}
            <span className="ml-2">
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 10C8.55 10 9.021 9.804 9.413 9.412C9.80433 9.02067 10 8.55 10 8C10 7.45 9.80433 6.979 9.413 6.587C9.021 6.19567 8.55 6 8 6C7.45 6 6.97933 6.19567 6.588 6.587C6.196 6.979 6 7.45 6 8C6 8.55 6.196 9.02067 6.588 9.412C6.97933 9.804 7.45 10 8 10ZM8 20C5.31667 17.7167 3.31267 15.5957 1.988 13.637C0.662667 11.679 0 9.86667 0 8.2C0 5.7 0.804333 3.70833 2.413 2.225C4.021 0.741667 5.88333 0 8 0C10.1167 0 11.979 0.741667 13.587 2.225C15.1957 3.70833 16 5.7 16 8.2C16 9.86667 15.3377 11.679 14.013 13.637C12.6877 15.5957 10.6833 17.7167 8 20Z"
                  fill="#666666"
                />
              </svg>
            </span>
          </a>
          <a href="" className=" w-max flex items-center">
            <span className="mr-2">
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 10C8.55 10 9.021 9.804 9.413 9.412C9.80433 9.02067 10 8.55 10 8C10 7.45 9.80433 6.979 9.413 6.587C9.021 6.19567 8.55 6 8 6C7.45 6 6.97933 6.19567 6.588 6.587C6.196 6.979 6 7.45 6 8C6 8.55 6.196 9.02067 6.588 9.412C6.97933 9.804 7.45 10 8 10ZM8 20C5.31667 17.7167 3.31267 15.5957 1.988 13.637C0.662667 11.679 0 9.86667 0 8.2C0 5.7 0.804333 3.70833 2.413 2.225C4.021 0.741667 5.88333 0 8 0C10.1167 0 11.979 0.741667 13.587 2.225C15.1957 3.70833 16 5.7 16 8.2C16 9.86667 15.3377 11.679 14.013 13.637C12.6877 15.5957 10.6833 17.7167 8 20Z"
                  fill="#666666"
                />
              </svg>
            </span>
            delivery Info{" "}
            <span className="ml-2">
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 10C8.55 10 9.021 9.804 9.413 9.412C9.80433 9.02067 10 8.55 10 8C10 7.45 9.80433 6.979 9.413 6.587C9.021 6.19567 8.55 6 8 6C7.45 6 6.97933 6.19567 6.588 6.587C6.196 6.979 6 7.45 6 8C6 8.55 6.196 9.02067 6.588 9.412C6.97933 9.804 7.45 10 8 10ZM8 20C5.31667 17.7167 3.31267 15.5957 1.988 13.637C0.662667 11.679 0 9.86667 0 8.2C0 5.7 0.804333 3.70833 2.413 2.225C4.021 0.741667 5.88333 0 8 0C10.1167 0 11.979 0.741667 13.587 2.225C15.1957 3.70833 16 5.7 16 8.2C16 9.86667 15.3377 11.679 14.013 13.637C12.6877 15.5957 10.6833 17.7167 8 20Z"
                  fill="#666666"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div className="w-full flex justify-center flex-col">
        <div className="mb-2">
          <h4 className="capitalize font-medium text-base text-black tracking-wider">
            order summary
          </h4>
        </div>
        <div className="w-full flex justify-center flex-col text-sm text-black font-light gap-2 pb-2 border-b-[1.5px]">
          <div className="flex justify-between">
            <p>Discount</p>
            <span>£5554</span>
          </div>
          <div className="flex justify-between">
            <p>Delivery</p>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between">
            <p>Tax</p>
            <span>+$221.88</span>
          </div>
        </div>
        <div className="flex justify-between text-base text-black my-3 font-semibblack">
          <p>Total</p>
          <span>$0.00</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
