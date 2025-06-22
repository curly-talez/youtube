import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      {/* <MainContainer /> */}
      <Outlet />
    </div>
  );
};

export default Body;
