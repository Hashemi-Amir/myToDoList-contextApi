import classes from "./Filter.module.css";
import TodoContext from "../../Contexts/Todo-Context";
import { useContext } from "react";
import PropTypes from "prop-types";

Filter.propTypes = {
  children: PropTypes.node.isRequired,
  filterType: PropTypes.string.isRequired,
};

function Filter({ children, filterType }) {
  const ctx = useContext(TodoContext);

  const clickHandler = () => {
    ctx.dispatch({ type: "CHANGE_FILTER", filterType });
  };

  return (
    <button
      onClick={clickHandler}
      className={`${classes.filter} ${
        filterType === ctx.filter ? classes.active : ""
      }`}
    >
      {children}
    </button>
  );
}
export default Filter;
