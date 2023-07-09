import Filter from "../Filter/Filter";
import clasess from "./Filters.module.css";
import TodoContext from "../../Contexts/Todo-Context";
import { useContext } from "react";

function Filters() {
  const ctx = useContext(TodoContext);
  return (
    <div className={clasess.filters}>
      {ctx.lists.length > 0 && (
        <>
          <Filter filterType={"progress"}>In progress todos</Filter>
          <Filter filterType={"done"}>Done todos</Filter>{" "}
        </>
      )}
    </div>
  );
}

export default Filters;
