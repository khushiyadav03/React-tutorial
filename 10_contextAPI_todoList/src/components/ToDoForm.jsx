import React, { useState } from 'react';
import { useToDoContext } from '../context';

function TodoForm() {
    // Input text local state me rakha hai jab tak user Add na kare.
    const [todo, setTodo] = useState("")
    // Context se addToDo action mil raha hai, props drilling nahi chahiye.
    const {addToDo} = useToDoContext()

    const add = (e) => {
        // Form submit browser reload karta hai, React app me usko rokna hota hai.
        e.preventDefault()
        const trimmedTodo = todo.trim()

        if(!trimmedTodo) return;

        addToDo({todo: trimmedTodo, completed: false})
        // Add ke baad input clear kar dete hain.
        setTodo("")
    }


    return (
        <form onSubmit={add} className="flex overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/20 focus-within:border-emerald-400 focus-within:ring-4 focus-within:ring-emerald-400/20">
            <input
                type="text"
                placeholder="Add a task..."
                className="w-full min-w-0 px-4 py-3.5 text-sm font-medium text-slate-800 outline-none duration-150 placeholder:text-slate-400 sm:text-base"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="shrink-0 bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500 active:bg-emerald-700 sm:px-6">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

