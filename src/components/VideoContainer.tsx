import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_URL } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEO_URL);
      const json = await data.json();
      setVideos(json.items);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video, index) => (
        <VideoCard info={video} key={index} />
      ))}
    </div>
  );
};

export default VideoContainer;
