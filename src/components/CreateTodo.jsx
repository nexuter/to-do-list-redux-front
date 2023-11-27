import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/appThunk";

function CreateTodo() {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  function onSubmitCreateTodo(e) {
    e.preventDefault();
    if (!newTodo) return;

    dispatch(createTodo({ title: newTodo }));
    setNewTodo("");
  }

  return (
    <form onSubmit={onSubmitCreateTodo}>
      <input
        className="px-2 py-1 border focus:outline:none focus:border-blue-300"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <input
        className="ml-2 border border-blue-500 text-blue-500 px-2 py-1 rounded-md hover-bg-blue-200 active:bg-white"
        type="submit"
        value="Create"
      />
    </form>
  );
}

export default CreateTodo;
