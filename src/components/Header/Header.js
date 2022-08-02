import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import clasees from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <Navbar onShowCart={props.onShowCart} />
      <div className={clasees.header}>
        <div>
          <Sidebar />
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Header;
