// import React from 'react'
import AddIcon from "@mui/icons-material/Add";
const Footer = () => {
  return (
    <div className="w-[1440px] flex bg-gray-200 h-[50px]">
      <div className="flex h-[30px] bg-green-200  px-2 font-semibold text-xl border-t-3 mx-11">
        All order
      </div>
      <div className="flex h-[30px] text-gray-500  px-2 font-semibold text-xl -mx-6">
        Pending
      </div>
      <div className="flex h-[30px] text-gray-500  px-2 font-semibold text-xl mx-8">
        Reviewed
      </div>
      <div className="flex h-[30px] text-gray-500   px-2 font-semibold text-xl -mx-5">
        Arrived
      </div>
      <div className="mx-9">
        <AddIcon/>
      </div>
    </div>
  );
}

export default Footer