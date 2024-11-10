import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import logo from "../../public/logo.png";
import { FaMicrophone } from "react-icons/fa6";
import { RiVideoUploadLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import profile from "../../public/IMG_20241104_101613.jpg";
import Avatar from "react-avatar";
import { useNavigate } from "react-router-dom";
import { useUtils } from "../context/UtilContext";
import { IoMdArrowBack } from "react-icons/io";


const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { setIsSidebar, isSidebar, mobileShow, setMobileShow } = useUtils();
  const [searchBar, setSearchbar] = useState(false);

  useEffect(() => {
    console.log(isSidebar, mobileShow);
  }, [isSidebar]);

  const navigate = useNavigate();
  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      console.log(searchQuery);
    }
  };

  const handleSidebar = () => {
    if (window.innerWidth <= 1280) {
      setIsSidebar(!isSidebar);
      setMobileShow(!mobileShow);
    } else {
      setIsSidebar(!isSidebar);
    }
  };

  if (searchBar) {
    return (
      <nav className="flex items-center px-6 py-2 fixed top-0 w-full bg-white justify-center">
        <IoMdArrowBack size={20} onClick={()=>{setSearchbar(!searchBar)}}/>
        <div className="flex sm:hidden flex-grow items-center">
          <div className="w-[100%] px-3 py-2 rounded-l-full border-[2px] border-gray-300">
            <input
              type="text"
              className=" w-[100%] outline-none"
              placeholder="Search"
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              onKeyUp={searchQueryHandler}
              value={searchQuery}
            />
          </div>
          <button
            className="px-4 py-2  rounded-r-full bg-gray-100 border-[2px]"
            onClick={() => {
              searchQueryHandler("searchButton");
            }}
          >
            <CiSearch size={"24px"} className="cursor-pointer " />
          </button>

          <div className="cursor-pointer ml-3 border rounded-full h-10 w-10 flex justify-center items-center hover:bg-gray-200 duration-200">
            <FaMicrophone style={{ color: "black", fontSize: "18px" }} />
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="flex justify-between px-6 py-2 fixed top-0 w-full bg-white">
      <div className="flex items-center space-x-4  ">
        <AiOutlineMenu
          className="text-xl cursor-pointer"
          onClick={handleSidebar}
        />
        <img src={logo} alt="" className="w-28 cursor-pointer" />
      </div>
      <div className="hidden sm:flex w-[35%]">
        <div className="w-[100%] px-3 py-2 rounded-l-full border-[2px] border-gray-300">
          <input
            type="text"
            className=" w-[100%] outline-none"
            placeholder="Search"
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          className="px-4 py-2  rounded-r-full bg-gray-100 border-[2px]"
          onClick={() => {
            searchQueryHandler("searchButton");
          }}
        >
          <CiSearch size={"24px"} className="cursor-pointer " />
        </button>

        <div className="cursor-pointer ml-3 border rounded-full h-10 w-10 flex justify-center items-center hover:bg-gray-200 duration-200">
          <FaMicrophone style={{ color: "black", fontSize: "18px" }} />
        </div>
      </div>
      <div className="flex space-x-5 items-center">
        <CiSearch
          className="text-2xl block sm:hidden"
          onClick={() => {
            setSearchbar(!searchBar);
          }}
        />
        <RiVideoUploadLine className="text-2xl cursor-pointer" />
        <FaRegBell className="text-2xl cursor-pointer" />
        <Avatar
          src={profile}
          size="32"
          round={true}
          className="cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
