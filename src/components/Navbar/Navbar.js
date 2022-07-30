import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "../../assets/profile-1.jpg";
import classes from "./Navbar.module.css";

const Navbar = () => {
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
              <img src={logo} alt="logo" className={classes["profile-logo"]} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
