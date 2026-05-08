import AddTodo from './components/AddTodo'
import Todos from './components/Todo'

function App() {
  return (
    <main className="min-h-screen bg-[#f6f7f2] px-4 py-8 text-slate-950 sm:px-6 lg:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-3xl flex-col justify-center">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Redux Toolkit
          </p>
          <h1 className="text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
            Todo Board
          </h1>
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            Add tasks, keep your list focused, and remove items when they are done.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <AddTodo />
          <Todos />
        </div>
      </section>
    </main>
  )
}

export default App
