import clasess from "./ListItem.module.css";
import { BsTrash } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import TodoContext from "../../Contexts/Todo-Context";
import { useContext } from "react";
import PropTypes from "prop-types";

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  todo: PropTypes.object.isRequired,
};

function ListItem({ children, todo }) {
  const ctx = useContext(TodoContext);

  const deleteHandler = () => {
    ctx.dispatch({ type: "DELETE_TODO", id: todo.id });
  };

  const doneHandler = () => {
    ctx.dispatch({ type: "CHANGE_STATUS_TO_DONE", id: todo.id });
  };

  return (
    <li className={clasess.listItem}>
      {children}
      <div className={clasess.icons}>
        <BsTrash onClick={deleteHandler} color="#FF6262" size={20} />
        <AiOutlineCheckCircle onClick={doneHandler} color="#05FF00" size={20} />
      </div>
    </li>
  );
}

export default ListItem;
