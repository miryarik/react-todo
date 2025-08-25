import type Todo from "../types/todo";

interface TodoSummaryProps {
  todos: Todo[];
  onDeleteCompleted: () => void;
}

const TodoSummary = ({ todos, onDeleteCompleted }: TodoSummaryProps) => {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <>
      <div className="space-y-2 flex justify-between">
        <p className="text-sm font-medium">
          {completedTodos.length + "/" + todos.length} completed
        </p>
        {completedTodos.length > 0 && (
          <button
            className="text-red-500 hover:underline text-sm font-medium"
            onClick={() => onDeleteCompleted()}
          >
            Delete completed
          </button>
        )}
      </div>
      <p className="text-gray-400 italic">
        "Doing what you love is the cornerstone of having abundance in your
        life."
      </p>
    </>
  );
};

export default TodoSummary;
