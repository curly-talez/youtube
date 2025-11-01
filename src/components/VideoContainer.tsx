import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router";
import type { VideoModel } from "../models/videoModel";

const VideoContainer = () => {
  const [videos, setVideos] = useState<VideoModel[]>([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEO_URL);
      const json = await data.json();
      const items: VideoModel[] = json.items;
      setVideos(items);
      console.log(items[0].id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard info={video} key={video.id} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
