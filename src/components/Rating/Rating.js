import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import classes from "./Rating.module.css";

const Rating = ({ rating, ...rest }) => {
  return (
    <div className={classes.rating}>
      {[...Array(5)].map((_, i) => (
        <span key={i} {...rest}>
          {rating > i ? <AiFillStar /> : <AiOutlineStar />}
        </span>
      ))}
    </div>
  );
};

export default Rating;
