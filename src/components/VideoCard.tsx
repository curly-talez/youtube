const VideoCard = ({
  info
}: {
  info?: {
    snippet: {
      publishedAt: string;
      channelTitle: string;
      title: string;
      thumbnails: { medium: { url: string } };
    };
    statistics: {
      viewCount: string;
    };
  };
}) => {
  if (!info) {
    return null;
  }
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet; // publishedAt

  const navigateToWatchPage = () => {};

  return (
    <div
      className="p-2 m-2 w-72 shadow-lg cursor-pointer"
      onClick={navigateToWatchPage}
    >
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
