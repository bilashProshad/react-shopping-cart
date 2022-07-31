import { useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "../../assets/profile-1.jpg";
import Button from "../Button/Button";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const dropDownRef = useRef();

  const showDropDown = () => {
    dropDownRef.current.style.display = "flex";
  };

  const hideDropDown = () => {
    dropDownRef.current.style.display = "none";
  };

  return (
    <header className={classes.header}>
      <div className={classes["nav-container"]}>
        <Link to="/" className={classes["main-logo"]}>
          Shopping Cart
        </Link>

        <form className={classes["search-form"]}>
          <input type="text" />
          <BiSearch className={classes["search-logo"]} />
        </form>

        <nav className={classes.navbar}>
          <ul className={classes["navbar-list"]}>
            <li>
              <Link to="/login" className={classes["navbar-link"]}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/registration" className={classes["navbar-link"]}>
                Registration
              </Link>
            </li>
            <li>
              <span
                className={classes["profile-logo"]}
                onMouseEnter={showDropDown}
                onMouseLeave={hideDropDown}
              >
                <img src={logo} alt="logo" />
                <div className={classes.dropdown} ref={dropDownRef}>
                  <p>
                    Hello, <strong>Bilash</strong>
                  </p>
                  <Button>Sign out</Button>
                </div>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
