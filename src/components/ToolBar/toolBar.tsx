// import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import FilterListIcon from "@mui/icons-material/FilterList";
import RepeatIcon from "@mui/icons-material/Repeat";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import VerticalAlignBottomOutlinedIcon from "@mui/icons-material/VerticalAlignBottomOutlined";
import VerticalAlignTopOutlinedIcon from "@mui/icons-material/VerticalAlignTopOutlined";

const ToolBar = () => {
  const handleAction = (action: string) => {
    console.log(`${action} button clicked`);
  };

  return (
    <div className="flex w-[1440px] h-[50px] items-center gap-6 border-b px-8 py-2 border-gray-200 pb-1 text-sm font-medium text-black shadow-sm justify-between">
      {/* Left side */}
      <button
        className="flex items-center gap-1"
        onClick={() => handleAction("Toolbar Navigation")}
      >
        <span>Tool bar</span>
        <KeyboardDoubleArrowRightIcon />
        <div className="border-r border-gray-500 h-6"></div>
      </button>

      {/* Middle Controls */}
      <div className="flex relative right-29 gap-6">
        <button
          className="flex items-center gap-1 hover:underline cursor-pointer"
          onClick={() => handleAction("Hide Fields")}
        >
          <VisibilityOffIcon className="w-4 h-4" />
          <span>Hide fields</span>
        </button>
        <button
          className="flex items-center gap-1 hover:underline cursor-pointer"
          onClick={() => handleAction("Sort")}
        >
          <ImportExportIcon className="w-4 h-4" />
          <span>Sort</span>
        </button>
        <button
          className="flex items-center gap-1 hover:underline cursor-pointer"
          onClick={() => handleAction("Filter")}
        >
          <FilterListIcon className="w-4 h-4" />
          <span>Filter</span>
        </button>
        <button
          className="flex items-center gap-1 hover:underline cursor-pointer"
          onClick={() => handleAction("Cell View")}
        >
          <RepeatIcon className="w-4 h-4" />
          <span>Cell view</span>
        </button>
      </div>

      {/* Right side actions */}
      <div className="flex flex-col gap-4 text-sm font-medium text-black">
        <div className="flex items-center gap-3">
          <button
            className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-gray-700 bg-white hover:bg-gray-100 cursor-pointer"
            onClick={() => handleAction("Import")}
          >
            <VerticalAlignBottomOutlinedIcon className="w-4 h-4" />
            <span>Import</span>
          </button>
          <button
            className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-gray-700 bg-white hover:bg-gray-100 cursor-pointer"
            onClick={() => handleAction("Export")}
          >
            <VerticalAlignTopOutlinedIcon className="w-4 h-4" />
            <span>Export</span>
          </button>
          <button
            className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-gray-700 bg-white hover:bg-gray-100 cursor-pointer"
            onClick={() => handleAction("Share")}
          >
            <ScreenShareIcon className="w-4 h-4" />
            <span>Share</span>
          </button>
          <button
            className="flex items-center gap-2 rounded-md bg-green-700 px-4 py-2 text-white hover:bg-green-800 cursor-pointer"
            onClick={() => handleAction("New Action")}
          >
            <RepeatIcon className="w-4 h-4" />
            <span>New Action</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
