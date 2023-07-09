import ListItem from "../ListItem/ListItem";
import classes from "./Lists.module.css";
import TodoContext from "../../Contexts/Todo-Context";
import { useContext } from "react";

function Lists() {
  const ctx = useContext(TodoContext);

  const filteredTodos = ctx.lists.filter((todo) => todo.status === ctx.filter);

  return (
    <div className={classes.lists}>
      <ul>
        {filteredTodos.map((todo) => (
          <ListItem todo={todo} key={todo.id}>
            {todo.value}
          </ListItem>
        ))}
      </ul>
    </div>
  );
}

export default Lists;
