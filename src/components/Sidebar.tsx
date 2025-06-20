import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector(
    (store: { app: { isMenuOpen: boolean } }) => store.app.isMenuOpen
  );

  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="shadow-lg p-5 shadow-gray-200 w-50">
      <ul className="pt-5 ">
        <li>Home</li>
        <li>Shorts</li>
        <li>Live</li>
      </ul>

      <h1 className="font-bold pt-5"> You</h1>
      <ul>
        <li>History</li>
        <li>Playlists</li>
        <li>Your videos</li>
        <li>Watch later</li>
        <li>Liked videos</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Music</li>
        <li>Movies</li>
        <li>News</li>
        <li>Sports</li>
        <li>Podcasts</li>
      </ul>
    </div>
  );
};

export default Sidebar;
