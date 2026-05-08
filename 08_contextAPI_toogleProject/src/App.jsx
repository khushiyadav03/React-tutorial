import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    // UserContextProvider makes the user state available to Login and Profile.
    <UserContextProvider>
      <main className="app-shell">
        <section className="intro-panel">
          <p className="eyebrow">React Context API</p>
          <h1>Login state shared across components</h1>
          <p className="intro-text">
            Enter a username in the login form and the profile card will update
            using the same context value.
          </p>
        </section>

        <section className="content-grid" aria-label="Context API demo">
          <Login />
          <Profile />
        </section>
      </main>
    </UserContextProvider>
  )
}

export default App
