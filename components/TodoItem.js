import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/todoSlice";
import { useRouter } from "next/router";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    router.push(`/todos/edit/${todo.id}`);
  };
  const handleView = () => {
    router.push(`/todos/${todo.id}`);
  };

  return (
    <div className="flex   justify-between text-gray-950   items-center gap-4 p-4 border-4  bg-white  rounded w-full sm:w-2/3 lg:w-1/2 mx-auto">
      <div>
        <h2 className="text-xl font-bold">{todo.title}</h2>
        <p>{todo.completed ? "Completed" : "Not Completed"}</p>
        <p>ID: {todo.id}</p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={handleView}
          className="bg-gray-500 text-white p-2 rounded"
        >
          View
        </button>
        <button
          onClick={handleEdit}
          className="bg-yellow-500 text-white p-2 rounded"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white p-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
