import { useDispatch } from "react-redux";
import {
  deleteTodo,
  getTodos,
  toggleDone,
  updateTodo,
} from "../redux/appThunk";
import { useState } from "react";

function TodoCard({ index, isDone, title, id }) {
  const [updateToggle, setUpdateToggle] = useState(false);
  const [newTodo, setNewTodo] = useState(title);

  const dispatch = useDispatch();

  async function onClickToggleDone() {
    await dispatch(toggleDone({ todoId: id }));
    dispatch(getTodos());
  }

  function onClickUpdateToggle() {
    setUpdateToggle(!updateToggle);
  }

  async function onSubmitUpdateTodo(e) {
    e.preventDefault();
    if (!newTodo) return;
    await dispatch(updateTodo({ todoId: id, title: newTodo }));
    setUpdateToggle(false);
    dispatch(getTodos());
  }

  async function onClickDeleteTodo() {
    await dispatch(deleteTodo({ todoId: id }));
    dispatch(getTodos());
  }

  return (
    <li className={`${index % 2 ? "bg-gray-100" : "bg-white"} w-96 py-1`}>
      <span className="w-1/12 inline-block text-center">{id}</span>
      {updateToggle ? (
        <form className="inline-block w-7/12" onSubmit={onSubmitUpdateTodo}>
          <input
            className="w-3/4 focus:outline-none"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <input className="w-1/4" type="submit" value="Submit" />
        </form>
      ) : (
        <button
          className={`w-6/12 inline-block ${isDone && "line-through"}`}
          onClick={onClickToggleDone}
        >
          {title}
        </button>
      )}
      <button
        className="w-2/12 hover:font-semibold"
        onClick={onClickUpdateToggle}
      >
        {updateToggle ? "Cancel" : "Modify"}
      </button>
      <span className="inline-block text-center">/</span>
      <button
        className="w-2/12 hover:font-semibold"
        onClick={onClickDeleteTodo}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoCard;
