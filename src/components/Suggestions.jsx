import React, { useEffect } from 'react'
import Time from '../Loader/Time'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { abbreviateNumber } from 'js-abbreviation-number'
import { Link } from 'react-router-dom'
import "./Suggestions.css"
const Suggestions = ({ video }) => {
  useEffect(() => {
    console.log("inside the vieo")
    console.log(video)
  }, [])

  return (
    <div className='w-full my-2'>
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex">
          {/* Thumbnail and duration */}
          <div className="thumbnail-container">
            <img
              className="thumbnail"
              src={video?.thumbnails[0]?.url || video?.thumbnails[1]?.url}
              alt=""
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>

          {/* Channel logo and title */}
          <div className="flex flex-col justify-start ml-3">
            <span className="text-[15px] font-bold line-clamp-2">
              {video?.title}
            </span>
            <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-500">
              {video?.author?.title}
              {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (
                <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[15px]" />
              )}
            </span>

            <div className="flex text-gray-500 text-[15px] whitespace-nowrap mt-1">
              <span>{`${abbreviateNumber(
                video?.stats?.views || video?.stats?.viewers,
                2
              )} views`}</span>
              <span className="text-[24px] leading-none font-bold mx-1 relative top-[-5px]">
                •
              </span>
              <span>{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Suggestions
