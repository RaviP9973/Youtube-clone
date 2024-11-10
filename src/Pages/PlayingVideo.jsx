import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../Utils/RapidApi";
import ReactPlayer from "react-player";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { RiDownloadFill, RiShareForwardLine } from "react-icons/ri";
import { HiDotsHorizontal } from "react-icons/hi";
import Suggestions from "../components/Suggestions";
import Loading from "../Loader/Loading";

const PlayingVideo = () => {
  const [video, setVideo] = useState();
  const [relatedVideo, setRealtedVideo] = useState();
  const { id } = useParams();
  const [channel, setChannel] = useState(null);
  const [load, setLoad] = useState(false);

  const fetchVideoDetails = () => {
    console.log(id);
    fetchData(`video/details/?id=${id}`).then((res) => {
      console.log("inside the playing video tab");
      console.log(res);
      const channel = res?.author?.channelId;
      console.log(channel);
      fetchChannelDetails(channel);
      setVideo(res);
    });
  };

  const fetchChannelDetails = (channel) => {
    //   // /channel/details/?id=

    console.log(channel);
    fetchData(`channel/details/?id=${channel}`).then((res) => {
      console.log(res);
      setChannel(res);
    });
  };

  const fetchRelatedVideo = () => {
    setLoad(true);
    fetchData(`video/related-contents/?id=${id}`).then((res) => {
      console.log("inside the relation");
      console.log(res);
      setRealtedVideo(res);
      setLoad(false);
    });
  };

  useEffect(() => {
    fetchVideoDetails();
    //og code
    fetchRelatedVideo();

    // fake code
    // setRealtedVideo({
    //   contents: [
    //     {
    //       type: "video",
    //       video: {
    //         author: {
    //           avatar: [
    //             {
    //               height: 68,
    //               url: "https://yt3.ggpht.com/CTfOdlZna-MN3ZJ84ee7mIqPVdhBssMDRXxfbkf-Tz_lV44oUTL_ZVEUIBoFoet4aWh3e1TO3A=s68-c-k-c0x00ffffff-no-rj",
    //               width: 68,
    //             },
    //           ],
    //           badges: [
    //             {
    //               text: "Verified",
    //               type: "VERIFIED_CHANNEL",
    //             },
    //           ],
    //           title: "Saturday Night Live",
    //         },
    //         isLiveNow: false,
    //         lengthSeconds: 540,
    //         publishedTimeText: "3 hours ago",
    //         stats: {
    //           views: 578930,
    //         },
    //         thumbnails: [
    //           {
    //             height: 94,
    //             url: "https://i.ytimg.com/vi/Ur7KlIYh8rM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBayWrr8psly-Um5jWNRUJGVSXF7w",
    //             width: 168,
    //           },
    //           {
    //             height: 188,
    //             url: "https://i.ytimg.com/vi/Ur7KlIYh8rM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3rJmzXY6CEmYE6rmm3I7c9LeIFw",
    //             width: 336,
    //           },
    //         ],
    //         title: "Fox News Kamala Harris Interview Cold Open - SNL",
    //         videoId: "Ur7KlIYh8rM",
    //       },
    //     },
    //     {
    //       type: "video",
    //       video: {
    //         author: {
    //           avatar: [
    //             {
    //               height: 68,
    //               url: "https://yt3.ggpht.com/hSROS24f8AQOxkLPcsQUow-qGJ84bME1xA7epUR_Qj57VRyk5dDDV1RLq0Rtdob9YqC4p1hPFw=s68-c-k-c0x00ffffff-no-rj",
    //               width: 68,
    //             },
    //           ],
    //           badges: [
    //             {
    //               text: "Verified",
    //               type: "VERIFIED_CHANNEL",
    //             },
    //           ],
    //           title: "Arizona’s Family (3TV / CBS 5) ",
    //         },
    //         isLiveNow: false,
    //         lengthSeconds: 217,
    //         publishedTimeText: "2 days ago",
    //         stats: {
    //           views: 8710,
    //         },
    //         thumbnails: [
    //           {
    //             height: 94,
    //             url: "https://i.ytimg.com/vi/AekYUo5MsZs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAJnw9FklNGF9fc6vmppWYafeyopw",
    //             width: 168,
    //           },
    //           {
    //             height: 188,
    //             url: "https://i.ytimg.com/vi/AekYUo5MsZs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIIUEHX5FEwI2OSNZqS9FOOmu38Q",
    //             width: 336,
    //           },
    //         ],
    //         title: "Which real estate scams are on the rise?",
    //         videoId: "AekYUo5MsZs",
    //       },
    //     },
    //     {
    //       type: "video",
    //       video: {
    //         author: {
    //           avatar: [
    //             {
    //               height: 68,
    //               url: "https://yt3.ggpht.com/ytc/AIdro_kwFxfJF-fQml8fUIvrd36ZstE2RO-C-IwDB-0qxQoc3Q=s68-c-k-c0x00ffffff-no-rj",
    //               width: 68,
    //             },
    //           ],
    //           badges: [
    //             {
    //               text: "Verified",
    //               type: "VERIFIED_CHANNEL",
    //             },
    //           ],
    //           title: "Mark Rober",
    //         },
    //         isLiveNow: false,
    //         lengthSeconds: 1601,
    //         publishedTimeText: "2 years ago",
    //         stats: {
    //           views: 101349754,
    //         },
    //         thumbnails: [
    //           {
    //             height: 94,
    //             url: "https://i.ytimg.com/vi/xsLJZyih3Ac/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBcm7zML8sQ_oq7mN2EFunNkBUe_g",
    //             width: 168,
    //           },
    //           {
    //             height: 188,
    //             url: "https://i.ytimg.com/vi/xsLJZyih3Ac/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBDkXuz7PUPQgrET50jaA0Kc-hkjQ",
    //             width: 336,
    //           },
    //         ],
    //         title: "Pranks Destroy Scam Callers- GlitterBomb Payback",
    //         videoId: "xsLJZyih3Ac",
    //       },
    //     },
    //     {
    //       type: "video",
    //       video: {
    //         author: {
    //           avatar: [
    //             {
    //               height: 68,
    //               url: "https://yt3.ggpht.com/OOT0eq8LoW8V3PMURGYuk0kRSgRGP7EsuGZoODhHBcg1jCB1qkuIAxS-XGnjKX9Q6rf-WKTvkQ=s68-c-k-c0x00ffffff-no-rj",
    //               width: 68,
    //             },
    //           ],
    //           badges: [
    //             {
    //               text: "Verified",
    //               type: "VERIFIED_CHANNEL",
    //             },
    //           ],
    //           title: "ABC News",
    //         },
    //         isLiveNow: false,
    //         lengthSeconds: 551,
    //         publishedTimeText: "1 day ago",
    //         stats: {
    //           views: 120111,
    //         },
    //         thumbnails: [
    //           {
    //             height: 94,
    //             url: "https://i.ytimg.com/vi/6i_dafqJjGQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBhW960Ozsq9719huPk2D9M_8So9w",
    //             width: 168,
    //           },
    //           {
    //             height: 188,
    //             url: "https://i.ytimg.com/vi/6i_dafqJjGQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCI5CYLUtPc4klc7h5-8koOs2UewQ",
    //             width: 336,
    //           },
    //         ],
    //         title:
    //           "Foster parents to Turpin children sentenced on child abuse charges",
    //         videoId: "6i_dafqJjGQ",
    //       },
    //     },
    //     {
    //       type: "video",
    //       video: {
    //         author: {
    //           avatar: [
    //             {
    //               height: 68,
    //               url: "https://yt3.ggpht.com/cexkusY_WDfoU04VaLRfZkPpwaFsopQ43v_g-6Na1U2eO-HV6J1pe3iEx5BI59tqqZou_zOeQw=s68-c-k-c0x00ffffff-no-rj",
    //               width: 68,
    //             },
    //           ],
    //           badges: [
    //             {
    //               text: "Verified",
    //               type: "VERIFIED_CHANNEL",
    //             },
    //           ],
    //           title: "MSNBC",
    //         },
    //         isLiveNow: false,
    //         lengthSeconds: 533,
    //         publishedTimeText: "1 day ago",
    //         stats: {
    //           views: 232441,
    //         },
    //         thumbnails: [
    //           {
    //             height: 94,
    //             url: "https://i.ytimg.com/vi/3RNUyDascbc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBye0qDnBpdqHlwWQnGKUnDPNY04A",
    //             width: 168,
    //           },
    //           {
    //             height: 188,
    //             url: "https://i.ytimg.com/vi/3RNUyDascbc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDkuUBnq03Mwtw3DX2r9DjoeuA0XQ",
    //             width: 336,
    //           },
    //         ],
    //         title:
    //           "‘The most dangerous closing argument we’ve ever seen’: Trump incoherent 18 days from Election Day",
    //         videoId: "3RNUyDascbc",
    //       },
    //     },
    //     {
    //       type: "video",
    //       video: {
    //         author: {
    //           avatar: [
    //             {
    //               height: 68,
    //               url: "https://yt3.ggpht.com/CTfOdlZna-MN3ZJ84ee7mIqPVdhBssMDRXxfbkf-Tz_lV44oUTL_ZVEUIBoFoet4aWh3e1TO3A=s68-c-k-c0x00ffffff-no-rj",
    //               width: 68,
    //             },
    //           ],
    //           badges: [
    //             {
    //               text: "Verified",
    //               type: "VERIFIED_CHANNEL",
    //             },
    //           ],
    //           title: "Saturday Night Live",
    //         },
    //         isLiveNow: false,
    //         lengthSeconds: 308,
    //         publishedTimeText: "2 hours ago",
    //         stats: {
    //           views: 203167,
    //         },
    //         thumbnails: [
    //           {
    //             height: 94,
    //             url: "https://i.ytimg.com/vi/TXNX_U1HK_k/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBErWKkuidtsTJpBF9EOG1NxnvHeg",
    //             width: 168,
    //           },
    //           {
    //             height: 188,
    //             url: "https://i.ytimg.com/vi/TXNX_U1HK_k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNnAIeOj27U43b2Z2IWY0APj2nXA",
    //             width: 336,
    //           },
    //         ],
    //         title:
    //           "Weekend Update: Trump Dances for 40 Minutes Straight at Campaign Rally - SNL",
    //         videoId: "TXNX_U1HK_k",
    //       },
    //     },
    //     {
    //       type: "video",
    //       video: {
    //         author: {
    //           avatar: [
    //             {
    //               height: 68,
    //               url: "https://yt3.ggpht.com/sPhNL3tZ0hBV2WYCvPAIGAYQ_E0fiunw2TQlyDJuYAQbyVnA6Ad3Ovbo-C7gJ7uU7fVnC39NSQ=s68-c-k-c0x00ffffff-no-rj",
    //               width: 68,
    //             },
    //           ],
    //           badges: [
    //             {
    //               text: "Verified",
    //               type: "VERIFIED_CHANNEL",
    //             },
    //           ],
    //           title: "CNBC",
    //         },
    //         isLiveNow: false,
    //         lengthSeconds: 859,
    //         publishedTimeText: "16 hours ago",
    //         stats: {
    //           views: 179165,
    //         },
    //         thumbnails: [
    //           {
    //             height: 94,
    //             url: "https://i.ytimg.com/vi/o_7XarmoDIw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBc45qHlwGbGg4fRFOEhKPL8FcJNQ",
    //             width: 168,
    //           },
    //           {
    //             height: 188,
    //             url: "https://i.ytimg.com/vi/o_7XarmoDIw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZaQvRXlPIfp1cjarM6YYvYf9Qyw",
    //             width: 336,
    //           },
    //         ],
    //         title:
    //           "Amazon Has A Counterfeit Problem — Here’s How It’s Fighting Back",
    //         videoId: "o_7XarmoDIw",
    //       },
    //     },
    //     {
    //       type: "video",
    //       video: {
    //         author: {
    //           avatar: [
    //             {
    //               height: 68,
    //               url: "https://yt3.ggpht.com/--dEIF_FL2i0WpLd2ydZmRRuZJPnPnJ9feNeNGRU_T70MiN_kbcN5jVDLw3Ite_Xy9Xi6U23VQ=s68-c-k-c0x00ffffff-no-rj",
    //               width: 68,
    //             },
    //           ],
    //           badges: [],
    //           title: "CBC British Columbia",
    //         },
    //         isLiveNow: false,
    //         lengthSeconds: 137,
    //         publishedTimeText: "7 hours ago",
    //         stats: {
    //           views: 161003,
    //         },
    //         thumbnails: [
    //           {
    //             height: 94,
    //             url: "https://i.ytimg.com/vi/KlPp-oZW_0Y/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBo3BNudtclPORLyyt3Di0_mgT8Bw",
    //             width: 168,
    //           },
    //           {
    //             height: 188,
    //             url: "https://i.ytimg.com/vi/KlPp-oZW_0Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5FuR2-fBIeqfQCpQOaIgYmMcWTg",
    //             width: 336,
    //           },
    //         ],
    //         title:
    //           "B.C. sees power outages, flooded roads as atmospheric river hits",
    //         videoId: "KlPp-oZW_0Y",
    //       },
    //     },
    //     {
    //       type: "video",
    //       video: {
    //         author: {
    //           avatar: [
    //             {
    //               height: 68,
    //               url: "https://yt3.ggpht.com/ytc/AIdro_mRo93kNoANrkOmq0qorIx1SseyWTiMrblkSUZLrEc0vX4=s68-c-k-c0x00ffffff-no-rj",
    //               width: 68,
    //             },
    //           ],
    //           badges: [
    //             {
    //               text: "Verified",
    //               type: "VERIFIED_CHANNEL",
    //             },
    //           ],
    //           title: "JacobslifeinVegas",
    //         },
    //         isLiveNow: false,
    //         lengthSeconds: 769,
    //         publishedTimeText: "2 years ago",
    //         stats: {
    //           views: 6337602,
    //         },
    //         thumbnails: [
    //           {
    //             height: 94,
    //             url: "https://i.ytimg.com/vi/xFsMMIieXH4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCsoRGS4Nr6exB0E9WS1oZwAvVV8w",
    //             width: 168,
    //           },
    //           {
    //             height: 188,
    //             url: "https://i.ytimg.com/vi/xFsMMIieXH4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBh0SLl6pMVBr7A111oHo49E4gL7A",
    //             width: 336,
    //           },
    //         ],
    //         title: "5 Ways Las Vegas Prostitutes Scam You",
    //         videoId: "xFsMMIieXH4",
    //       },
    //     },
    //     {
    //       type: "video",
    //       video: {
    //         author: {
    //           avatar: [
    //             {
    //               height: 68,
    //               url: "https://yt3.ggpht.com/cexkusY_WDfoU04VaLRfZkPpwaFsopQ43v_g-6Na1U2eO-HV6J1pe3iEx5BI59tqqZou_zOeQw=s68-c-k-c0x00ffffff-no-rj",
    //               width: 68,
    //             },
    //           ],
    //           badges: [
    //             {
    //               text: "Verified",
    //               type: "VERIFIED_CHANNEL",
    //             },
    //           ],
    //           title: "MSNBC",
    //         },
    //         isLiveNow: false,
    //         lengthSeconds: 668,
    //         publishedTimeText: "1 day ago",
    //         stats: {
    //           views: 1178460,
    //         },
    //         thumbnails: [
    //           {
    //             height: 94,
    //             url: "https://i.ytimg.com/vi/z-UgnGl28GU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD6eCMvnvTIh4tMzEzkf5VH8ECR3Q",
    //             width: 168,
    //           },
    //           {
    //             height: 188,
    //             url: "https://i.ytimg.com/vi/z-UgnGl28GU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5vwfn1gmHKnGMk5NopHnA7D9hOg",
    //             width: 336,
    //           },
    //         ],
    //         title: "‘Exhausted’ Trump appears to fall asleep at campaign event",
    //         videoId: "z-UgnGl28GU",
    //       },
    //     },
    //     {
    //       type: "video",
    //       video: {
    //         author: {
    //           avatar: [
    //             {
    //               height: 68,
    //               url: "https://yt3.ggpht.com/ytc/AIdro_kwFxfJF-fQml8fUIvrd36ZstE2RO-C-IwDB-0qxQoc3Q=s68-c-k-c0x00ffffff-no-rj",
    //               width: 68,
    //             },
    //           ],
    //           badges: [
    //             {
    //               text: "Verified",
    //               type: "VERIFIED_CHANNEL",
    //             },
    //           ],
    //           title: "Mark Rober",
    //         },
    //         isLiveNow: false,
    //         lengthSeconds: 963,
    //         publishedTimeText: "4 years ago",
    //         stats: {
    //           views: 75394464,
    //         },
    //         thumbnails: [
    //           {
    //             height: 94,
    //             url: "https://i.ytimg.com/vi/a_TSR_v07m0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDSH01oMDph7buN3s2KUxo3lwuMrA",
    //             width: 168,
    //           },
    //           {
    //             height: 188,
    //             url: "https://i.ytimg.com/vi/a_TSR_v07m0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4Tz0GPbsErqDyvAtoFPfX3LivIg",
    //             width: 336,
    //           },
    //         ],
    //         title: "Glitter Bomb 2.0 vs Porch Pirates",
    //         videoId: "a_TSR_v07m0",
    //       },
    //     },
    //     {
    //       type: "video",
    //       video: {
    //         author: {
    //           avatar: [
    //             {
    //               height: 68,
    //               url: "https://yt3.ggpht.com/CTfOdlZna-MN3ZJ84ee7mIqPVdhBssMDRXxfbkf-Tz_lV44oUTL_ZVEUIBoFoet4aWh3e1TO3A=s68-c-k-c0x00ffffff-no-rj",
    //               width: 68,
    //             },
    //           ],
    //           badges: [
    //             {
    //               text: "Verified",
    //               type: "VERIFIED_CHANNEL",
    //             },
    //           ],
    //           title: "Saturday Night Live",
    //         },
    //         isLiveNow: false,
    //         lengthSeconds: 268,
    //         publishedTimeText: "2 hours ago",
    //         stats: {
    //           views: 48725,
    //         },
    //         thumbnails: [
    //           {
    //             height: 94,
    //             url: "https://i.ytimg.com/vi/S9YO0RAKkWM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBenMYf54wYVQ_bYbtbhYY_OI3fVg",
    //             width: 168,
    //           },
    //           {
    //             height: 188,
    //             url: "https://i.ytimg.com/vi/S9YO0RAKkWM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8pjIjKGcsIfxbPcWG6aYNuPNpuA",
    //             width: 336,
    //           },
    //         ],
    //         title:
    //           "Weekend Update: Sarah Sherman on the Victoria's Secret Fashion Show - SNL",
    //         videoId: "S9YO0RAKkWM",
    //       },
    //     },
    //     {
    //       type: "video",
    //       video: {
    //         author: {
    //           avatar: [
    //             {
    //               height: 68,
    //               url: "https://yt3.ggpht.com/cexkusY_WDfoU04VaLRfZkPpwaFsopQ43v_g-6Na1U2eO-HV6J1pe3iEx5BI59tqqZou_zOeQw=s68-c-k-c0x00ffffff-no-rj",
    //               width: 68,
    //             },
    //           ],
    //           badges: [
    //             {
    //               text: "Verified",
    //               type: "VERIFIED_CHANNEL",
    //             },
    //           ],
    //           title: "MSNBC",
    //         },
    //         isLiveNow: false,
    //         lengthSeconds: 574,
    //         publishedTimeText: "1 day ago",
    //         stats: {
    //           views: 200529,
    //         },
    //         thumbnails: [
    //           {
    //             height: 94,
    //             url: "https://i.ytimg.com/vi/bpB4mdwQ9m8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD1vyLg25yienWafWpCcQqQGfA0kA",
    //             width: 168,
    //           },
    //           {
    //             height: 188,
    //             url: "https://i.ytimg.com/vi/bpB4mdwQ9m8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVMOb3s6uWi78KDFdhhWP6grHjIw",
    //             width: 336,
    //           },
    //         ],
    //         title:
    //           "‘Exhausted’: Donald Trump struggling keep up with demands of basic campaign media tour",
    //         videoId: "bpB4mdwQ9m8",
    //       },
    //     },
    //     {
    //       type: "video",
    //       video: {
    //         author: {
    //           avatar: [
    //             {
    //               height: 68,
    //               url: "https://yt3.ggpht.com/CTfOdlZna-MN3ZJ84ee7mIqPVdhBssMDRXxfbkf-Tz_lV44oUTL_ZVEUIBoFoet4aWh3e1TO3A=s68-c-k-c0x00ffffff-no-rj",
    //               width: 68,
    //             },
    //           ],
    //           badges: [
    //             {
    //               text: "Verified",
    //               type: "VERIFIED_CHANNEL",
    //             },
    //           ],
    //           title: "Saturday Night Live",
    //         },
    //         isLiveNow: false,
    //         lengthSeconds: 220,
    //         publishedTimeText: "1 hour ago",
    //         stats: {
    //           views: 31782,
    //         },
    //         thumbnails: [
    //           {
    //             height: 94,
    //             url: "https://i.ytimg.com/vi/zk4tnAHdd8k/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABet846J04mQUXDvzdpfQDSohTOQ",
    //             width: 168,
    //           },
    //           {
    //             height: 188,
    //             url: "https://i.ytimg.com/vi/zk4tnAHdd8k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsSGNFuk8Q_fY318kSu_DwOyYTDQ",
    //             width: 336,
    //           },
    //         ],
    //         title: "Tableside - SNL",
    //         videoId: "zk4tnAHdd8k",
    //       },
    //     },
    //     {
    //       type: "video",
    //       video: {
    //         author: {
    //           avatar: [
    //             {
    //               height: 68,
    //               url: "https://yt3.ggpht.com/ytc/AIdro_lrPi_nCcCtlY9fTbVMFw2PRIfJIIIFiNN8wbxhbXhcJA4=s68-c-k-c0x00ffffff-no-rj",
    //               width: 68,
    //             },
    //           ],
    //           badges: [],
    //           title: "Fabulous Magazine",
    //         },
    //         isLiveNow: false,
    //         lengthSeconds: 849,
    //         publishedTimeText: "2 weeks ago",
    //         stats: {
    //           views: 340489,
    //         },
    //         thumbnails: [
    //           {
    //             height: 94,
    //             url: "https://i.ytimg.com/vi/vrFGkkX52nM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBSKyA-T_DSQWVpJ7O8ifFueP66Ig",
    //             width: 168,
    //           },
    //           {
    //             height: 188,
    //             url: "https://i.ytimg.com/vi/vrFGkkX52nM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0YUWjm-JKWBT1V2fWt0QC4FDReg",
    //             width: 336,
    //           },
    //         ],
    //         title: "My ex is a paedophile | Life Stories",
    //         videoId: "vrFGkkX52nM",
    //       },
    //     },
    //     {
    //       type: "video",
    //       video: {
    //         author: {
    //           avatar: [
    //             {
    //               height: 68,
    //               url: "https://yt3.ggpht.com/ytc/AIdro_m65RzRXyEAIlIg5E84TdMr1Q-8uVzCoAjGOR4GjR9AnCQ=s68-c-k-c0x00ffffff-no-rj",
    //               width: 68,
    //             },
    //           ],
    //           badges: [
    //             {
    //               text: "Verified",
    //               type: "VERIFIED_CHANNEL",
    //             },
    //           ],
    //           title: "The Late Show with Stephen Colbert",
    //         },
    //         isLiveNow: false,
    //         lengthSeconds: 660,
    //         publishedTimeText: "2 days ago",
    //         stats: {
    //           views: 2716870,
    //         },
    //         thumbnails: [
    //           {
    //             height: 94,
    //             url: "https://i.ytimg.com/vi/MNV498SCouA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAfwS01DraL9M0Pay_-oegcblEXAA",
    //             width: 168,
    //           },
    //           {
    //             height: 188,
    //             url: "https://i.ytimg.com/vi/MNV498SCouA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_td35jozAQoqBeyQT0XLzpqpK3w",
    //             width: 336,
    //           },
    //         ],
    //         title:
    //           "Harris Doesn't Fall For Baier's Bait On Fox News | Trump Flops At Univision Town Hall",
    //         videoId: "MNV498SCouA",
    //       },
    //     },
    //     {
    //       type: "video",
    //       video: {
    //         author: {
    //           avatar: [
    //             {
    //               height: 68,
    //               url: "https://yt3.ggpht.com/8BpsTJXLNO5kpJtx3S-dZJSv5Q1AmQv8h74B2PdxREuG3nToJsm8BDajwtSDyKm7Hfoz2zpheLE=s68-c-k-c0x00ffffff-no-rj",
    //               width: 68,
    //             },
    //           ],
    //           badges: [
    //             {
    //               text: "Verified",
    //               type: "VERIFIED_CHANNEL",
    //             },
    //           ],
    //           title: "Jimmy Carr",
    //         },
    //         isLiveNow: false,
    //         lengthSeconds: 1269,
    //         publishedTimeText: "4 days ago",
    //         stats: {
    //           views: 127115,
    //         },
    //         thumbnails: [
    //           {
    //             height: 94,
    //             url: "https://i.ytimg.com/vi/8rLDTzmIAOk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDoo4PZmo-r7iXcPIic4oCIsk2twg",
    //             width: 168,
    //           },
    //           {
    //             height: 188,
    //             url: "https://i.ytimg.com/vi/8rLDTzmIAOk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBztFLd6GBAlcQE0p5f2ZfpBMxsLA",
    //             width: 336,
    //           },
    //         ],
    //         title:
    //           "Heckler Roasts Jimmy's Classic Pinstripe Suit! | Jimmy Carr Vs Hecklers | Jimmy Carr",
    //         videoId: "8rLDTzmIAOk",
    //       },
    //     },
    //     {
    //       type: "video",
    //       video: {
    //         author: {
    //           avatar: [
    //             {
    //               height: 68,
    //               url: "https://yt3.ggpht.com/d4B1O0xCl6DJx6h1aZLgLWr4MO5h44f-0JL5qosNoejntdVRoW0OKVk1iLIN_65Ghz1wUF0LeiQ=s68-c-k-c0x00ffffff-no-rj",
    //               width: 68,
    //             },
    //           ],
    //           badges: [
    //             {
    //               text: "Verified",
    //               type: "VERIFIED_CHANNEL",
    //             },
    //           ],
    //           title: "Jubilee",
    //         },
    //         isLiveNow: false,
    //         lengthSeconds: 6162,
    //         publishedTimeText: "4 weeks ago",
    //         stats: {
    //           views: 10769775,
    //         },
    //         thumbnails: [
    //           {
    //             height: 94,
    //             url: "https://i.ytimg.com/vi/68aej2qmCtw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA_n7yVteILDOamGRTQ5rKz7UIAow",
    //             width: 168,
    //           },
    //           {
    //             height: 188,
    //             url: "https://i.ytimg.com/vi/68aej2qmCtw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwIGHPUEyk3rCu9DxsPIVjp8Vs-Q",
    //             width: 336,
    //           },
    //         ],
    //         title: "Can 1 Woke Teen Survive 20 Trump Supporters? | Surrounded",
    //         videoId: "68aej2qmCtw",
    //       },
    //     },
    //     {
    //       type: "video",
    //       video: {
    //         author: {
    //           avatar: [
    //             {
    //               height: 68,
    //               url: "https://yt3.ggpht.com/ytc/AIdro_niRq8CFu_t0QX45kIzJ58GtS9zlO2SGo7wArxG9gy6uEc=s68-c-k-c0x00ffffff-no-rj",
    //               width: 68,
    //             },
    //           ],
    //           badges: [
    //             {
    //               text: "Verified",
    //               type: "VERIFIED_CHANNEL",
    //             },
    //           ],
    //           title: "The New York Times",
    //         },
    //         isLiveNow: false,
    //         lengthSeconds: 861,
    //         publishedTimeText: "2 years ago",
    //         stats: {
    //           views: 10615263,
    //         },
    //         thumbnails: [
    //           {
    //             height: 94,
    //             url: "https://i.ytimg.com/vi/hNDgcjVGHIw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCD0GFg40ZcX19KdOJylUyL6P5CWQ",
    //             width: 168,
    //           },
    //           {
    //             height: 188,
    //             url: "https://i.ytimg.com/vi/hNDgcjVGHIw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCvm3IUKdfeKxnkzL4GlatqEBQAaQ",
    //             width: 336,
    //           },
    //         ],
    //         title:
    //           "Liberal Hypocrisy is Fueling American Inequality. Here’s How. | NYT Opinion",
    //         videoId: "hNDgcjVGHIw",
    //       },
    //     },
    //     {
    //       type: "video",
    //       video: {
    //         author: {
    //           avatar: [
    //             {
    //               height: 68,
    //               url: "https://yt3.ggpht.com/Lp_xScDrAVlLdZ6J3Rlkl6RdVcIYf7JIKUnO483HlJAJERa_ExbzzJnJLL8YA6tGH9l0xQ3mvg=s68-c-k-c0x00ffffff-no-rj",
    //               width: 68,
    //             },
    //           ],
    //           badges: [
    //             {
    //               text: "Verified",
    //               type: "VERIFIED_CHANNEL",
    //             },
    //           ],
    //           title: "Katie Couric",
    //         },
    //         isLiveNow: false,
    //         lengthSeconds: 2793,
    //         publishedTimeText: "2 days ago",
    //         stats: {
    //           views: 11579,
    //         },
    //         thumbnails: [
    //           {
    //             height: 94,
    //             url: "https://i.ytimg.com/vi/rQJb323UvJo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDeqs7M3rUlfsEqHHzXw-_RIlSk6Q",
    //             width: 168,
    //           },
    //           {
    //             height: 188,
    //             url: "https://i.ytimg.com/vi/rQJb323UvJo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBXNc4RyTFU9H808L2BOseEWToxjQ",
    //             width: 336,
    //           },
    //         ],
    //         title:
    //           "As Marijuana Legalization Expands, so Are the Number of People Experiencing Harmful Effects",
    //         videoId: "rQJb323UvJo",
    //       },
    //     },
    //   ],
    // });
  }, [id],[]);
  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)] mt-16 ">
      <div className="w-full max-w-[1580px] flex flex-col lg:flex-row mx-24">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 ">
          <div className="h-[200px] md:h-[500px]  rounded-lg ml-[-16px] mr-[-16px] lg:mr-0 lg:ml-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height="100%"
              width="100%"
              controls
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
          {/* title */}
          <div className="mt-2">
            <span className="text-[22px] font-semibold line-clamp-2">
              {video?.title}
            </span>
            {/* channel name section,like dislike */}
            <div className="flex justify-between">
              <div className="flex gap-2 items-center mt-2">
                <div className="flex h-9 w-9 rounded-full overflow-hidden  border">
                  <img
                    className="aspect-square object-cover h-full w-full rounded-full overflow-hidden"
                    src={channel?.avatar[0]?.url}
                  />
                </div>
                <div className="flex flex-col justify-center ">
                  <span className=" flex items-center font-bold  text-[14px] ">
                    {video?.author?.title}
                    {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                      <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[15px]"></BsFillCheckCircleFill>
                    )}
                  </span>
                  <span className="flex items-center font-bold  text-[12px] text-gray-900">
                    {channel?.stats?.subscribersText}
                  </span>
                </div>
                {/* button subscribe */}
                <div className="bg-black px-3 py-1 rounded-3xl ml-3  hover:bg-gray-800">
                  <button className="text-white font-semibold text-center">
                    Subscribe
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex ">
                  <div className="flex bg-gray-300 px-4 py-2 rounded-l-3xl gap-3 justify-center items-center  cursor-pointer hover:bg-gray-400 duration-300">
                    <AiOutlineLike style={{ fontSize: "20px" }} />
                    {abbreviateNumber(
                video?.stats?.likes,
                2
              )}
                  </div>
                  <div className="flex bg-gray-300 px-4 py-2 rounded-r-3xl gap-3 justify-center items-center  cursor-pointer hover:bg-gray-400 duration-300">
                    <AiOutlineDislike style={{ fontSize: "20px" }} />
                  </div>
                </div>

                <div className="flex ">
                  <div className="flex bg-gray-300 px-4 py-2 rounded-3xl gap-3 justify-center items-center  cursor-pointer hover:bg-gray-400 duration-300">
                    <RiShareForwardLine style={{ fontSize: "20px" }} />
                    <span>Share</span>
                  </div>
                </div>
                <div className="flex ">
                  <div className="flex bg-gray-300 px-4 py-2 rounded-3xl gap-3 justify-center items-center  cursor-pointer hover:bg-gray-400 duration-300">
                    <RiDownloadFill style={{ fontSize: "20px" }} />
                    <span>Download</span>
                  </div>
                </div>

                <div className="flex rounded-full bg-gray-300 justify-center items-center w-10 h-10 cursor-pointer hover:bg-gray-400 duration-300">
                  <HiDotsHorizontal />
                </div>
              </div>
            </div>
          </div>

          {/* decription */}
          <div className="flex flex-col mt-5 bg-gray-200 p-3 rounded-lg">
            <div className="flex gap-2 font-semibold mt-3">
              <p>{`${abbreviateNumber(video?.stats?.views,2)} views`}</p>
              <p>{video?.publishedTimeText}</p>
            </div>

            <p>{video?.descriptionSnippet}</p>
          </div>

          {/* comments */}
          <div className="p-3">
            <p>{ video?.stats?.comments ? (`${video?.stats?.comments} comments`) : (`No comments`)}</p>
          </div>
        </div>

        <div className="flex flex-col px-2 py-6  w-full lg:w-4/12 overflow-x-hidden">
          {load ? (
            <Loading/>
          ) : (
            relatedVideo?.contents?.map((item, index) => {
              if (item?.type !== "video") return false;
              return <Suggestions key={index} video={item?.video} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayingVideo;
