import { useDispatch, useSelector } from "react-redux";
import { client } from "./clinet";
import { increaseCounter } from "./store/counter";
import { loadTodo } from "./store/todo";

function App() {
  // get state from store
  const count = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  const increase = () => {
    // make action from action creator
    const increaseAction = increaseCounter();

    // dispatch action to store
    dispatch(increaseAction);
  };

  const todos = useSelector((store) => store.todo.todos);

  const getTodos = (dispatch) => {
    client.get("todos").then((todos) => dispatch(loadTodo(todos)));
  };

  const requestTodo = () => {
    dispatch(getTodos);
  };

  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={requestTodo}>get todo</button>
      <section>
        <ul>
          {todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
