"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../redux/todoSlice";
import TodoItem from "../../components/TodoItem";
import TodoForm from "@/components/TodoForm";

const TodoList = () => {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-950 text-center">
        Todo List
      </h1>
      <TodoForm />

      <div>
        {list.length === 0 ? (
          <p>No todos available</p>
        ) : (
          list.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        )}
      </div>
    </div>
  );
};

export default TodoList;
