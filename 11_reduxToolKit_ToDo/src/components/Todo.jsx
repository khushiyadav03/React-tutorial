import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
    // useSelector Redux store se todos value read karta hai.
    const todos = useSelector(state => state.todos) 
    // useDispatch actions ko store tak bhejne ke liye hai.
    const dispatch = useDispatch()
    const todoCount = todos.length

    return (
        <section className="mt-6">
            <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                    <h2 className="text-lg font-semibold text-slate-950">Tasks</h2>
                    <p className="text-sm text-slate-500">
                        {todoCount === 0
                            ? 'Your list is clear.'
                            : `${todoCount} ${todoCount === 1 ? 'task' : 'tasks'} in your list`}
                    </p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                    {todoCount}
                </span>
            </div>

            {todoCount === 0 ? (
                <div className="rounded-md border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center">
                    <p className="font-medium text-slate-700">No tasks yet</p>
                    <p className="mt-1 text-sm text-slate-500">Add your first todo from the input above.</p>
                </div>
            ) : (
                <ul className="space-y-3">
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className="flex items-center justify-between gap-3 rounded-md border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-emerald-200 hover:bg-emerald-50/50"
                        >
                            <span className="min-w-0 flex-1 break-words text-slate-800">{todo.text}</span>
                            <button
                                type="button"
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-slate-200 bg-white text-lg font-semibold leading-none text-slate-500 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-700 focus:outline-none focus:ring-4 focus:ring-rose-100"
                                aria-label={`Delete ${todo.text}`}
                                title="Delete task"
                            >
                                x
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}

export default Todos
