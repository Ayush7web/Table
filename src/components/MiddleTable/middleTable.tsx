// import React from 'react'
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";

const MiddleTable = () => {
  return (
    <>
      <div className="w-[1400px] h-[40px] mx-10 bg-gray-200 flex ">
        <div className="bg-gray-50 rounded-sm w-[32%] h-[32px] relative top-1 left-6 flex ">
          <div className="font-semibold mx-4 text-gray-500 ">
            {" "}
            <InsertLinkIcon sx={{ color: "blue" }} /> Q3 Financial Overview
          </div>
        </div>
        <RestartAltIcon
          sx={{
            color: "orange",
            position: "relative",
            left: "40px",
            top: "6px",
          }}
        />

        {/* right part of table  */}
        <div className="bg-white h-[40px] w-[10.5%] relative left-62"></div>
        {/* ABC column part  */}
        <div className="bg-green-100 h-[40px] w-[9.4%] relative left-62 ">
          <div className="text-center my-2 font-semibold text-gray-500">
            ABC
          </div>
          <div className=" relative bottom-8 mx-2">
            {" "}
            <SwapCallsIcon sx={{ color: "gray" }} />{" "}
          </div>
          <div className=" relative bottom-15 mx-24">
            {" "}
            <MoreHorizIcon sx={{ color: "gray" }} />{" "}
          </div>
        </div>

        {/* Answer a question column */}

        <div className="bg-purple-200 h-[40px] w-[14%] relative left-62 ">
          <div className="text-center my-2 font-semibold text-gray-500">
            Answer a question
          </div>
          <div className=" relative bottom-8 mx-1">
            {" "}
            <SwapCallsIcon sx={{ color: "white" }} />{" "}
          </div>
          <div className=" relative bottom-15 mx-42">
            {" "}
            <MoreHorizIcon sx={{ color: "gray" }} />{" "}
          </div>
        </div>

        {/* Extract */}
        <div className="bg-orange-200 h-[40px] w-[7.5%] relative left-62 ">
          <div className="text-center my-2 font-semibold text-gray-500">
            Extract
          </div>
          <div className=" relative bottom-8 mx-1">
            {" "}
            <SwapCallsIcon sx={{ color: "white" }} />{" "}
          </div>
          <div className=" relative bottom-15 mx-20">
            {" "}
            <MoreHorizIcon sx={{ color: "gray" }} />{" "}
          </div>
        </div>
        {/* ------------------------------------------ */}
        <div className=" h-[40px] w-[7.5%] relative left-62 ">
          <div className="text-center my-2 font-semibold">
            <AddIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default MiddleTable