import Item from "../Item/Item";
import classes from "./Items.module.css";

const Items = ({ products }) => {
  return (
    <div className={classes.items}>
      {products.map((product) => (
        <Item id={product.id} product={product} />
      ))}
    </div>
  );
};

export default Items;
