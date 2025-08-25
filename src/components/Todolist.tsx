import type Todo from "../types/todo";
import TodoItem from "./TodoItem";

interface TodolistProps {
  todos: Todo[];
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export const Todolist = ({
  todos,
  onCompletedChange,
  onDelete,
}: TodolistProps) => {
  const todosSorted = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }

    return a.completed ? 1 : -1;
  });

  return (
    <>
      <div className="space-y-4 max-h-100 overflow-y-scroll px-5">
        {todosSorted.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onCompletedChange={onCompletedChange}
            onDelete={onDelete}
          />
        ))}
      </div>

      {todosSorted.length === 0 && (
        <p className="text-center text-sm text-gray-500">Nothing to do. Yet!</p>
      )}
    </>
  );
};
