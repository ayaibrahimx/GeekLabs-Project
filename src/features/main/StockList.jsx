import { useState } from 'react';
import { GiPriceTag } from 'react-icons/gi';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { MdOutlineSsidChart } from 'react-icons/md';
import { HiDocumentText } from 'react-icons/hi2';
import { FaMoneyBills } from 'react-icons/fa6';

function StockList({ stock, children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <li
        onClick={toggleCollapse}
        className={`mx-2 mb-0  mt-4 flex h-12 w-[100%] justify-between rounded-md bg-lgray  bg-opacity-80 p-2 font-normal text-white ${isCollapsed ? '!bg-[#53ACFF] font-semibold' : ''}`}
      >
        <div className="flex w-[25%] justify-between px-2 text-center">
          <GiPriceTag className=" my-auto h-7 w-7 !p-0 text-white  max-sm:h-5 max-sm:w-5" />
          <span className="my-auto w-[50%] text-xs   max-sm:text-[0.5rem]">
            {stock.name}
          </span>
        </div>
        <div className="flex w-[25%] justify-between border-l-2  border-sborder px-2 text-center">
          <HiDocumentText className=" my-auto h-7 w-7 text-white  max-sm:h-5 max-sm:w-5 " />
          <span className="my-auto w-[40%] text-xs  max-sm:text-[0.5rem]">
            {stock.price}
          </span>
        </div>
        <div className="flex w-[25%] justify-between border-x-2 border-sborder px-2 text-center">
          <MdOutlineSsidChart className=" my-auto h-7 w-7 text-white  max-sm:h-5 max-sm:w-5 " />
          <span
            className={` my-auto w-[40%] text-xs font-bold max-sm:text-[0.5rem] ${stock.color === 'red' ? 'text-orange-700' : 'text-green-700'}`}
          >
            -0.25 %
          </span>
        </div>
        <div className="flex w-[25%] justify-between px-2 text-center max-sm:text-[0.5rem]">
          {stock.risk === 'Low' ? (
            <FaMoneyBillAlt className=" my-auto h-7 w-7 text-white  max-sm:h-5 max-sm:w-5" />
          ) : (
            <FaMoneyBills className=" my-auto h-7 w-7 text-white  max-sm:h-5 max-sm:w-5" />
          )}
          <span className="my-auto w-[40%]  text-xs max-sm:text-[0.5rem]">
            {stock.risk} Risk
          </span>
        </div>
      </li>
      {isCollapsed && <div className="block w-full ">{children}</div>}
    </>
  );
}

export default StockList;
