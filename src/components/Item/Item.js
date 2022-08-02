import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Rating from "../Rating/Rating";
import classes from "./Item.module.css";

const Item = ({ product }) => {
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();

  const addCartHandler = () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }
  };

  return (
    <Card className={classes.item}>
      <img src={product.image} alt="img" />
      <div className={classes["item-details"]}>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <p>4 days delivery</p>
        <Rating rating={product.rating} />
        <Button className={classes["btn-add"]} onClick={addCartHandler}>
          Add to cart
        </Button>
        {/* <Button className={classes["btn-remove"]}>Remove from cart</Button> */}
      </div>
    </Card>
  );
};

export default Item;
