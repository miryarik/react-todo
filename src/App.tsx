import AddTodoForm from "./components/AddTodoForm";
import { Todolist } from "./components/Todolist";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

function App() {
  const { todos, setTodoCompleted, addTodo, deleteTodo, deleteCompletedTodos } =
    useTodos();

  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <div className="max-w-lg mx-auto p-5 space-y-6">
        <h1 className="font-bold text-3xl text-start text-slate-700">
          Your To Do
        </h1>
        <AddTodoForm onSubmit={addTodo} />
        <Todolist
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
        />
        <TodoSummary todos={todos} onDeleteCompleted={deleteCompletedTodos} />
      </div>
    </main>
  );
}

export default App;
