import { useSearchParams } from "react-router";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  console.log(searchParam.get("v"));

  return (
    <div className="px-5">
      <iframe
        width="800"
        height="515"
        src={"https://www.youtube.com/embed/" + searchParam.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
