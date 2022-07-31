import products from "../../data";
import Items from "../Items/Items";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <Items products={products} />
    </div>
  );
};

export default Home;
