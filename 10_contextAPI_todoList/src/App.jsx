import { useEffect, useState } from 'react'
import './App.css'
import { ToDoProvider } from './context'
import { ToDoForm, ToDoItem } from './components'

function App() {
  // Todos array state me hai, isliye add/edit/delete par UI re-render hoti hai.
  const [todos, setTodos] = useState([])
  const completedCount = todos.filter((todo) => todo.completed).length
  const pendingCount = todos.length - completedCount

  const addToDo = (todo) => {
    // New todo ko front me add kar rahe hain; Date.now simple unique id deta hai.
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    // map se sirf matching todo replace hota hai, baaki same rehte hain.
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    // filter matching id ko list se remove karta hai.
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    // Object spread se todo copy karke completed value flip kar rahe hain.
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)))
  }

  useEffect(() => {
    // First load par saved todos localStorage se read karte hain.
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0) {
      setTodos(todos.map((todo) => ({
        ...todo,
        todo: typeof todo.todo === "object" ? todo.todo.todo : todo.todo,
        completed: typeof todo.todo === "object" ? todo.todo.completed : todo.completed,
      })))
    }
  }, [])

  useEffect (() => {
    // Todos state badalte hi browser storage me latest list save hoti hai.
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  return (
    // Provider se todos aur actions har child component me useToDoContext se milenge.
    <ToDoProvider value={{todos, addToDo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="min-h-screen bg-[#f4f7fb] px-4 py-8 text-slate-900 sm:py-12">
                <div className="mx-auto w-full max-w-3xl">
                    <div className="mb-6 rounded-xl border border-white bg-white px-5 py-5 shadow-xl shadow-slate-200/80 sm:px-7">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">Daily planner</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Manage Your Todos</h1>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-center">
                                <div className="rounded-lg bg-slate-100 px-3 py-2">
                                    <p className="text-lg font-bold text-slate-950">{todos.length}</p>
                                    <p className="text-xs font-medium text-slate-500">Total</p>
                                </div>
                                <div className="rounded-lg bg-amber-50 px-3 py-2">
                                    <p className="text-lg font-bold text-amber-700">{pendingCount}</p>
                                    <p className="text-xs font-medium text-amber-700/70">Open</p>
                                </div>
                                <div className="rounded-lg bg-emerald-50 px-3 py-2">
                                    <p className="text-lg font-bold text-emerald-700">{completedCount}</p>
                                    <p className="text-xs font-medium text-emerald-700/70">Done</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl border border-white bg-slate-950 px-4 py-5 text-white shadow-2xl shadow-slate-300/80 sm:px-6">
                    <div className="mb-5">
                        {/* Todo form goes here */} 
                        <ToDoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem 
                        here */}

                        {todos.length === 0 && (
                          <div className="w-full rounded-lg border border-dashed border-slate-700 bg-slate-900 px-5 py-10 text-center">
                            <p className="text-lg font-semibold text-white">No todos yet</p>
                            <p className="mt-1 text-sm text-slate-400">Add your first task and it will appear here.</p>
                          </div>
                        )}

                        {todos.map((todo) => (
                          <div key={todo.id} className='w-full'>
                            <ToDoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                    </div>
                </div>
      </div>
    </ToDoProvider >
  )
}

export default App
