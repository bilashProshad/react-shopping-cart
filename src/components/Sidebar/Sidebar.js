import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <h2>Filter Products</h2>

      <div className={classes.filters}>
        <div>
          <input type="radio" name="sort" id="ascending" value="ascending" />
          <label htmlFor="ascending">Ascending</label>
        </div>
        <div>
          <input type="radio" name="sort" id="descending" value="descending" />
          <label htmlFor="descending">Descending</label>
        </div>
        <div>
          <input type="checkbox" name="outOfStock" id="outOfStock" />
          <label htmlFor="outOfStock">Include Out of Stock</label>
        </div>
        <div>
          <input type="checkbox" name="fastDelivery" id="fastDelivery" />
          <label htmlFor="fastDelivery">Fast Delivery Only</label>
        </div>

        <button>Clear Filters</button>
      </div>
    </aside>
  );
};

export default Sidebar;
