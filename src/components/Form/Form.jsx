import { useRef, useContext } from "react";
import classes from "./Form.module.css";
import TodoContext from "../../Contexts/Todo-Context";

function Form() {
  const inputRef = useRef("");

  const ctx = useContext(TodoContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const userInp = inputRef.current.value;
    inputRef.current.value = "";
    ctx.dispatch({ type: "ADD_TODO", value: userInp, status: "progress" });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <input ref={inputRef} type="text" placeholder="Enter your task..." />
      <button type="submit">Save</button>
    </form>
  );
}

export default Form;
