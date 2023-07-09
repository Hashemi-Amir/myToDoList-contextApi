import classes from "./App.module.css";
import Form from "./components/Form/Form";
import Lists from "./components/Lists/Lists";
import Filters from "./components/Filters/Filters";
import { TodoContextProvider } from "./Contexts/Todo-Context";

function App() {
  return (
    <TodoContextProvider>
      <div className={classes.container}>
        <header className={classes.header}>MY TO DO LIST</header>
        <Form />
        <Filters />
        <Lists />
      </div>
    </TodoContextProvider>
  );
}

export default App;
