import React from "react";

const DisplaySelectedContentsHeader = () => {
  return (
    <header className="body__left__header h-[30px] flex items-center w-full bg-[#B42A2B]">
      <div className="body__left__header-left w-[35px]"></div>
      <div className="body__left__header-middle flex items-center w-full text-[13px]">
        <span className="body__left__items body__left__header-title w-[40%] pl-[5px]">
          <h5
            className="text-left text-[#cccccc] uppercase pos-md:text-[14px]"
            style={{ paddingLeft: "15px", textAlign: "left" }}
          >
            Items
          </h5>
        </span>
        <span className="body__left__unitprice body__left__header-title w-[17%]">
          <h5 className="text-left text-[#cccccc] uppercase pos-md:text-[14px]">
            Unit Price
          </h5>
        </span>
        <span className="body__left__qty body__left__header-title w-[26%] flex items-center justify-evenly">
          <h5 className="text-center text-[#cccccc] uppercase pos-md:text-[14px]">
            Quantity
          </h5>
        </span>
        <span className="body__left__totalprice body__left__header-title w-[17%] ">
          <h5 className="text-center text-[#cccccc] uppercase pos-md:text-[14px]">
            Total Price
          </h5>
        </span>
      </div>
      <div className="body__left__header-right w-[35px]"></div>
    </header>
  );
};

export default DisplaySelectedContentsHeader;
