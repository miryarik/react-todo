import type Todo from "../types/todo";
import { Trash2 } from "lucide-react";

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({ todo, onCompletedChange, onDelete }: TodoItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <label className="flex grow min-w-0 items-center gap-2 border-2 rounded-2xl px-6 py-3 border-gray-400 bg-white hover:bg-slate-50 hover:cursor-pointer">
        <input
          type="checkbox"
          className="scale-125"
          checked={todo.completed}
          onChange={(event) => onCompletedChange(todo.id, event.target.checked)}
        />
        <span
          className={`truncate ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.title}
        </span>
      </label>
      <button className="p-2" onClick={() => onDelete(todo.id)}>
        <Trash2 size={20} className="text-gray-600" />
      </button>
    </div>
  );
};

export default TodoItem;
