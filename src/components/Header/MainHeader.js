import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MainHeader = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainHeader;
