import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Time from "../Loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

const Video = ({ video }) => {
  console.log("inside the video component ",video);
  return (
    <div className="mb-2" >
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col ">
          {/* thumbnail and duration*/}
          <div className="relative h-56 md:-56 md: rounded-xl hover:rounded-none duration-200 overflow-hidden ">
            <img
              className="h-full w-full"
              src={video?.thumbnails[0]?.url || video?.thumbnails[1]?.url}
              alt=""
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          {/* channel logo and title */}
          <div className="flex mt-3 space-x-2 ">
            <div className="flex items-start">
              <div className="flex h-9 w-9 rounded-full overflow-hidden  border">
                <img
                  className="aspect-square object-cover h-full w-full rounded-full overflow-hidden"
                  src={video?.author?.avatar[0]?.url}
                />
              </div>
            </div>

            <div>
              <span className="text-[15px] font-bold line-clamp-2">
                {video?.title}
              </span>
              <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-500">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[15px]"></BsFillCheckCircleFill>
                )}
              </span>

              <div className="flex text-gray-500 text-[15px] whitespace-nowrap">
                <span className="flex">
                {`${abbreviateNumber(video?.stats?.views || video?.stats?.viewers, 2)} views`}

                </span>
                <span className="flex text-[24px]  leading-none font-bold relative top-[-10px] mx-1">
                  .
                </span>
                <span>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Video;
