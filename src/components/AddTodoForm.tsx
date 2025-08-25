import { useState } from "react";
import { Plus } from "lucide-react";

interface AddTodoFormProps {
  onSubmit: (title: string) => void;
}

const AddTodoForm = ({ onSubmit }: AddTodoFormProps) => {
  const [input, setInputValue] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim()) return;

    onSubmit(input);
    setInputValue("");
  }

  return (
    <form className="flex gap-5" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new todo here"
        className="bg-white grow p-2 px-5 border-b-2 border-gray-500 focus:outline-none"
        value={input}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="submit"
        className="p-2 rounded-2xl bg-gray-500 text-white hover:bg-slate-600 hover:cursor-pointer"
      >
        <Plus size={36}></Plus>
      </button>
    </form>
  );
};

export default AddTodoForm;
