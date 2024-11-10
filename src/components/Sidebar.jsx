import React from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { FaScissors } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { BsFire } from "react-icons/bs";
import { RiShoppingBag4Line } from "react-icons/ri";
import { MdOutlineMusicNote } from "react-icons/md";
import { PiFilmSlateDuotone } from "react-icons/pi";
import { BsBroadcast } from "react-icons/bs";
import { SiYoutubegaming } from "react-icons/si";
import { TiNews } from "react-icons/ti";
import { GoTrophy } from "react-icons/go";
import { IoMdBulb } from "react-icons/io";
import { GiHanger } from "react-icons/gi";
import { MdPodcasts } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { useUtils } from "../context/UtilContext";
const Sidebar = () => {
  const sidebarItems = [
    {
      groupName: "Home",
      groupItems: [
        {
          id: 1,
          name: "Home",
          icon: <IoMdHome />,
        },
        {
          id: 2,
          name: "Shorts",
          icon: <SiYoutubeshorts />,
        },
        {
          id: 3,
          name: "Subscriptions",
          icon: <MdOutlineSubscriptions />,
        },
      ],
    },
    {
      groupName: "You",
      groupItems: [
        {
          id: 1,
          name: "Your channel",
          icon: <IoPersonSharp />,
        },
        {
          id: 2,
          name: "History",
          icon: <GoHistory />,
        },
        {
          id: 3,
          name: "Playlists",
          icon: <MdOutlinePlaylistPlay />,
        },
        {
          id: 4,
          name: "Your videos",
          icon: <GoVideo />,
        },
        {
          id: 5,
          name: "Watch Later",
          icon: <MdOutlineWatchLater />,
        },
        {
          id: 6,
          name: "Liked videos",
          icon: <AiOutlineLike />,
        },
        {
          id: 7,
          name: "Your clips",
          icon: <FaScissors />,
        },
      ],
    },
    {
      groupName: "Explore",
      groupItems: [
        {
          id: 1,
          name: "Trending",
          icon: <BsFire />,
        },
        {
          id: 2,
          name: "Shopping",
          icon: <RiShoppingBag4Line />,
        },
        {
          id: 3,
          name: "Music",
          icon: <MdOutlineMusicNote />,
        },
        {
          id: 4,
          name: "Films",
          icon: <PiFilmSlateDuotone />,
        },
        {
          id: 5,
          name: "Live",
          icon: <BsBroadcast />,
        },
        {
          id: 6,
          name: "Gaming",
          icon: <SiYoutubegaming />,
        },
        {
          id: 7,
          name: "News",
          icon: <TiNews />,
        },
        {
          id: 8,
          name: "Sport",
          icon: <GoTrophy />,
        },
        {
          id: 9,
          name: "Courses",
          icon: <IoMdBulb />,
        },
        {
          id: 10,
          name: "Fashion & beauty",
          icon: <GiHanger />,
        },
        {
          id: 11,
          name: "Podcasts",
          icon: <MdPodcasts />,
        },
      ],
    },
    {
      groupName: "More form Youtube",
      groupItems: [
        {
          id: 1,
          name: "YouTube Premium",
          icon: <FaYoutube color="red" />,
        },
        {
          id: 2,
          name: "YouTube Studio",
          icon: <SiYoutubestudio color="red" />,
        },
        {
          id: 3,
          name: "YouTube Music",
          icon: <SiYoutubemusic color="red" />,
        },
        {
          id: 4,
          name: "YouTube Kids",
          icon: <SiYoutubekids color="red" />,
        },
      ],
    },
  ];

  const { isSidebar, setIsSidebar, mobileShow, setMobileShow } = useUtils();


  const ModelOverlay = ()=>{
    return (
      <div className="flex fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30" onClick={()=>{
        setMobileShow(!mobileShow);
      }}>

      </div>
    )
  }

  return (
    <>
      <div className={`${mobileShow ? "fixed top-0 bottom-0 left-0 transition-all duration-300 bg-white z-40 h-screen w-[50%] sm:w-[30%]" : "hidden h-[calc(100vh-6.625rem)] w-[20%]"} xl:static xl:block px-2 lg:px-6 overflow-y-scroll overflow-x-hidden scrollbar-thin`}>
        <div className="mt-4 items-center">
          {sidebarItems.map((group) => {
            return (
              <div className="">
                <h1 className="font-bold ">{group.groupName}</h1>
                {group.groupItems.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex items-center space-x-6 hover:bg-gray-100 duration-300 rounded-xl px-3 py-2"
                    >
                      <div className="text-xl cursor-pointer">{item.icon}</div>
                      <span className="cursor-pointer">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <br />
        <hr />
        <br />
        <span className="text-xs font-semibold text-gray-500">
          About Press Copyright Contact us Creator Advertise Developers
          <br />
          <br />
          <p>
            Terms Privacy Policy & Safety <br /> How YouTube works Test new
            features
          </p>
        </span>
        <br />
        <p className="text-xs text-gray-800 mt-1">© 2024 Learn Coding</p>
      </div>

      {mobileShow ? <ModelOverlay/> : null}
    </>
  );
};

export default Sidebar;
