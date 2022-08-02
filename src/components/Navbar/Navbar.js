import { useRef } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "../../assets/profile.png";
import { useAuthContext } from "../../contexts/AuthContext";
import Button from "../Button/Button";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const dropDownRef = useRef();

  const showDropDown = () => {
    dropDownRef.current.style.display = "flex";
  };

  const hideDropDown = () => {
    dropDownRef.current.style.display = "none";
  };

  const { currentUser, logout } = useAuthContext();

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
            {currentUser ? (
              <>
                <li>
                  <Button
                    type="button"
                    className={classes["cart-button"]}
                    onClick={props.onShowCart}
                  >
                    <span>
                      <AiOutlineShoppingCart className={classes["cart-icon"]} />{" "}
                      <span className={classes["cart-item-count"]}>0</span>
                    </span>
                  </Button>
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
                        Hello, <strong>{currentUser.displayName}</strong>
                      </p>
                      <Button onClick={logout}>Sign out</Button>
                    </div>
                  </span>
                </li>
              </>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
