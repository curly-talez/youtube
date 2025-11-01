import type { VideoModel } from "../models/videoModel";

const VideoCard = (props: VideoModel) => {
  if (!props.info) {
    return null;
  }
  const { snippet, statistics } = props.info;
  const { channelTitle, title, thumbnails } = snippet; // publishedAt

  return (
    <div className="p-2 m-2 w-72 shadow-lg cursor-pointer">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold mb-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
        {/* <li>{publishedAt}</li> */}
      </ul>
    </div>
  );
};

export default VideoCard;
