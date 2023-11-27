import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./redux/appThunk";
import CreateTodo from "./components/CreateTodo";
import TodoCard from "./components/TodoCard";

function App() {
  const { todos } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="min-h-screen flex flex-col items-center py-20">
      <CreateTodo />
      <ul className="mt-12">
        {todos?.map((v, i) => (
          <TodoCard
            key={i}
            index={i}
            isDone={v.isDone}
            title={v.title}
            id={v.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
