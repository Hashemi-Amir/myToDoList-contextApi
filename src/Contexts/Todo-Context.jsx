import React, { useReducer } from "react";
import PropTypes from "prop-types";

const TodoContext = React.createContext({
  filter: "progress",
  lists: [],
  dispatch: () => {},
});

// REDUCER
const reducerToDos = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        lists: [
          ...state.lists,
          { value: action.value, status: action.status, id: Date.now() },
        ],
      };

    case "DELETE_TODO":
      return {
        ...state,
        lists: state.lists.filter((todo) => todo.id !== action.id),
      };

    case "CHANGE_STATUS_TO_DONE":
      return {
        ...state,
        lists: state.lists.map((todo) =>
          todo.id === action.id ? { ...todo, status: "done" } : todo
        ),
      };

    case "CHANGE_FILTER": {
      return {
        ...state,
        filter: action.filterType,
      };
    }

    default:
      return {
        filter: "progress",
        lists: [],
      };
  }
};

export const TodoContextProvider = ({ children }) => {
  const [todos, dispatchToDos] = useReducer(reducerToDos, {
    filter: "progress",
    lists: [],
  });

  TodoContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <TodoContext.Provider
      value={{
        filter: todos.filter,
        lists: todos.lists,
        dispatch: dispatchToDos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
