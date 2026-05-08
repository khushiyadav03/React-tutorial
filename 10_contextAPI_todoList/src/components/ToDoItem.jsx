import { useState } from 'react';
import { useToDoContext } from '../context';

function TodoItem({ todo }) {
    // Edit mode sirf is item ke liye local UI state hai.
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    // Todo actions context se aa rahe hain, App se props pass nahi karne pad rahe.
    const {updateTodo, deleteTodo, toggleComplete} = useToDoContext()

    const editTodo = () => {
        const trimmedTodo = todoMsg.trim()

        if (!trimmedTodo) return;

        // Existing todo object me sirf text update kar rahe hain.
        updateTodo(todo.id, {...todo, todo: trimmedTodo})
        setTodoMsg(trimmedTodo)
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`group flex items-center gap-x-3 rounded-lg border px-3 py-3 shadow-sm duration-300 ${
                todo.completed ? "border-emerald-200 bg-emerald-50 text-slate-500" : "border-slate-200 bg-white text-slate-900 hover:-translate-y-0.5 hover:shadow-md"
            }`}
        >
            <input
                type="checkbox"
                className="h-5 w-5 shrink-0 cursor-pointer accent-emerald-600"
                checked={todo.completed}
                onChange={toggleCompleted}
                aria-label="Mark todo complete"
            />
            <input
                type="text"
                className={`min-w-0 w-full rounded-md border bg-transparent py-1.5 text-sm font-medium outline-none transition sm:text-base ${
                    isTodoEditable ? "border-emerald-300 bg-emerald-50 px-2 text-slate-950 shadow-inner ring-4 ring-emerald-100" : "border-transparent"
                } ${todo.completed ? "text-slate-500 line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <button
                className={`inline-flex h-9 shrink-0 items-center justify-center rounded-md border px-3 text-xs font-semibold shadow-sm transition disabled:cursor-not-allowed disabled:opacity-45 ${
                    isTodoEditable ? "border-emerald-200 bg-emerald-600 text-white hover:bg-emerald-500" : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
                title={isTodoEditable ? "Save todo" : "Edit todo"}
            >
                {isTodoEditable ? "Save" : "Edit"}
            </button>
            <button
                className="inline-flex h-9 shrink-0 items-center justify-center rounded-md border border-rose-200 bg-rose-50 px-3 text-xs font-semibold text-rose-700 shadow-sm transition hover:bg-rose-100"
                onClick={() => deleteTodo(todo.id)}
                title="Delete todo"
            >
                Delete
            </button>
        </div>
    );
}

export default TodoItem;
