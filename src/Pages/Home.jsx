import React from "react";
import Sidebar from "../components/Sidebar";
import Video from "./Video";
import { useAuth } from "../context/AuthProvider";
import ListItem from "../components/ListItem";
const Home = () => {
  const { data } = useAuth();
  console.log(data);
  return (
    <div className="flex mt-16 ">
      
      <Sidebar />
      <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
        <ListItem />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-5">
          {data.map((item) => {
            if (item.type !== "video") return false;
            return <Video key={item.id} video={item?.video} />;
          })}
        </div>
      </div>
      </div>
  );
};

export default Home;
