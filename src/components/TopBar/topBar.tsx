import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Image from "../../Image/ayush-image.jpg";
import Icon from "../../Icon/Shape.png";

const TopBar = () => {
  return (
    <div className="md: w-[115%] h-[60px] flex shadow-sm border-b border-gray-300 items-center justify-between px-2 py-2">
      {/* for left section  */}
      {/* for icon  */}
      <div className="w-[35%] h-[32px] flex items-center my-2 mx-7 gap-4 ">
        <div className="w-[24px] h-[24px]">
          <img src={Icon} alt="" className="h-[22px] w-[24px] " />
        </div>

        {/* for text  */}
        <div className="text-gray-500 font-medium">Workspace</div>
        <div className="ml-[-7px]">
          {" "}
          <ArrowForwardIosIcon sx={{ color: "gray", fontSize: "" }} />{" "}
        </div>
        <div className="text-gray-500 font-medium">Folder 2</div>
        <div className="ml-[-7px]">
          {" "}
          <ArrowForwardIosIcon sx={{ color: "gray", fontSize: "" }} />{" "}
        </div>
        <div className="font-medium">
          Spreadsheet <span className="ml-[5px]">3</span>
        </div>
        <div>
          <MoreHorizIcon sx={{ color: "gray" }} />
        </div>
      </div>

      {/* for Right part  */}

      <div className="w-[35%] h-[32px] flex items-center my-2 mx-7 gap-4">
        {/* searching for  */}
        <div className="relative max-w-sm ">
          {/* Icon */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pt-1 ">
            <SearchIcon sx={{ color: "gray", alignItems: "center" }} />
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder="Search within sheet"
            className="bg-gray-200 h-[35px] w-[180px] pl-10  rounded text-sm pt-0"
          />
        </div>

        <div className="relative">
          <NotificationsNoneIcon className="text-[27px]" />
          <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            2
          </span>
        </div>

        {/* -----Image--------- */}
        <div className="flex w-full gap-7 justify-center items-center">
          <img
            src={Image}
            alt=""
            className="w-9 h-9 rounded-full relative left-3 cursor-pointer"
          />
          <div className="font-medium">
            Ayush Kumar
            <div className="text-gray-400">Ayush.kumar.....</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
