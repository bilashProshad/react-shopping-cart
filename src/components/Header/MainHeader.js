import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainHeader = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainHeader;
