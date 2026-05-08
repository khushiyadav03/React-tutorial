import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
  // Form input local state hai; Redux me sirf final todo save karenge.
  const [input, setInput] = useState('')
  // dispatch reducer action ko Redux store tak bhejta hai.
  const dispatch = useDispatch()

    const addTodoHandler = (e) => {
      // Submit par page reload stop karna zaroori hai.
      e.preventDefault()

      const trimmedInput = input.trim()

      if (!trimmedInput) return

      // addTodo action payload ke roop me trimmed text bhej raha hai.
      dispatch(addTodo(trimmedInput))
      setInput('')
    }

  return (
    <form onSubmit={addTodoHandler} className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor="todo-input" className="sr-only">
        Add a new todo
      </label>
      <div className="relative flex-1">
        <input
          id="todo-input"
          type="text"
          className="h-12 w-full rounded-md border border-slate-300 bg-white px-4 pr-12 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
          placeholder="What do you want to finish?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-lg text-slate-400">
          +
        </span>
      </div>
      <button
        type="submit"
        className="h-12 rounded-md bg-emerald-700 px-6 text-sm font-semibold text-white transition hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-100 active:scale-[0.98]"
      >
        Add Task
      </button>
    </form>
  )
}

export default AddTodo
