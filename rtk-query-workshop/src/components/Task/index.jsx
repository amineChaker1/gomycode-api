import React from "react";
import { useDeleteTodoMutation, useGetTodosQuery } from "../../app/apiSlice";

const Task = () => {
  const { data, isLoading } = useGetTodosQuery();
  console.log(data);
  const [deleteTaskMutation] = useDeleteTodoMutation();
  const deletingTask = (id) => {
    deleteTaskMutation(id);
  };
  if (isLoading) return <div>Loading ...</div>;
  return data?.map((task) => {
    return (
      <div className="border-indigo-700 border-2 rounded-lg p-2  m-3">
        <h3 className="text-center font-bold uppercase"> {task.title} </h3>
        <p>{task.desc}</p>
        <div className="text-right mt-2">
          <button onClick={() => deletingTask(task._id)}>
            <svg
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-indigo-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  });
};

export default Task;
