# React JS Overall Notes



## 1. React App Start Kaise Hoti Hai

- React app ka entry point mostly `src/main.jsx` hota hai.
- `createRoot(document.getElementById("root")).render(<App />)` React app ko HTML ke `root` div ke andar mount karta hai.
- `App.jsx` usually main component hota hai jahan se baaki components use hote hain.
- `StrictMode` development me extra checks karta hai, production UI par direct effect nahi hota.

## 2. Components

- Component ek JavaScript function hota hai jo JSX return karta hai.
- Component ka naam capital letter se start hona chahiye, jaise `App`, `Card`, `Todo`.
- Components ko export/import karke reuse kar sakte hain.
- Ek big UI ko small reusable components me todna React ka main pattern hai.

```jsx
function Chai() {
  return <h3>Chai with React</h3>
}
```

## 3. JSX

- JSX HTML jaisa dikhta hai, par JavaScript ke andar UI describe karta hai.
- JSX me JavaScript expression `{}` ke andar likhte hain.
- Component ek parent element return karta hai. Extra wrapper avoid karna ho to Fragment use hota hai:

```jsx
<>
  <Chai />
  <p>Hello</p>
</>
```

## 4. Props

- Props parent component se child component ko data bhejne ka tareeka hai.
- Props read-only hote hain, child directly props ko change nahi karta.
- Destructuring se code clean hota hai:

```jsx
function Card({ username, btnText }) {
  return <button>{btnText || "Learn more"}</button>
}
```

- Same component ko different props ke saath multiple times use kar sakte hain.

## 5. State - `useState`

- `useState` component ki changing value ko remember karta hai.
- State update hone par component re-render hota hai.
- Form input, counter, theme, todos, selected currency jaise data state me rakhte hain.

```jsx
const [counter, setCounter] = useState(0)
```

- Agar new value previous value par depend karti hai, functional update better hai:

```jsx
setCounter((prev) => prev + 1)
```

## 6. Events

- User actions handle karne ke liye events use hote hain: `onClick`, `onChange`, `onSubmit`.
- Form submit normally page reload karta hai, React app me `e.preventDefault()` use karte hain.

```jsx
const handleSubmit = (e) => {
  e.preventDefault()
}
```

## 7. Controlled Inputs

- Controlled input me input ki `value` React state se aati hai.
- Typing par `onChange` state update karta hai.

```jsx
<input
  value={todo}
  onChange={(e) => setTodo(e.target.value)}
/>
```

- Isse React form data ka single source of truth ban jata hai.

## 8. Conditional Rendering

- Condition ke basis par UI show/hide karna conditional rendering hai.

```jsx
{copied && <span>Copied!</span>}
```

```jsx
{todos.length === 0 ? <Empty /> : <TodoList />}
```

- Status messages, loading state, empty list, error UI me useful hota hai.

## 9. List Rendering

- Array ko UI me dikhane ke liye `map` use hota hai.
- Har list item ko unique `key` prop dena zaroori hai.

```jsx
{todos.map((todo) => (
  <TodoItem key={todo.id} todo={todo} />
))}
```

- `key` React ko list items efficiently track karne me help karti hai.

## 10. Updating Arrays In State

- State ko directly mutate nahi karna chahiye.
- Add ke liye spread:

```jsx
setTodos((prev) => [{ id: Date.now(), todo }, ...prev])
```

- Update ke liye `map`:

```jsx
setTodos((prev) =>
  prev.map((item) => item.id === id ? updatedTodo : item)
)
```

- Delete ke liye `filter`:

```jsx
setTodos((prev) => prev.filter((item) => item.id !== id))
```

## 11. `useEffect`

- `useEffect` side effects ke liye hota hai.
- Side effect matlab React render ke bahar ka kaam: API call, localStorage, document class update, etc.

```jsx
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])
```

- Empty dependency array `[]` ka matlab effect first render ke baad ek baar chalega.
- Dependency array me value dene ka matlab effect us value ke change hone par chalega.

## 12. `useRef`

- `useRef` kisi DOM element ko directly access karne ke liye useful hai.
- Ref update hone par component re-render nahi hota.
- Password copy project me input select karne ke liye use hua.

```jsx
const inputRef = useRef(null)
inputRef.current?.select()
```

## 13. `useCallback`

- `useCallback` function ko memoize karta hai.
- Function tabhi recreate hota hai jab dependencies change hoti hain.
- Useful jab function `useEffect` dependency me ho ya child component ko pass ho raha ho.

```jsx
const generatePassword = useCallback(() => {
  // logic
}, [length, includeNumber])
```

## 14. Custom Hooks

- Custom hook normal function hota hai jiska naam `use` se start hota hai.
- Reusable stateful logic ko component se separate karne ke liye use hota hai.
- Examples:
  - `useColor`
  - `useCurrenyInfo`
  - `useTheme`
  - `useToDoContext`

```jsx
function useCurrencyInfo(currency) {
  const [data, setData] = useState({})
  // fetch logic
  return data
}
```

## 15. API Fetching

- API se data lane ke liye `fetch` use kiya.
- Usually `useEffect` me fetch karte hain, taki dependency change hone par data reload ho.

```jsx
useEffect(() => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => setData(data))
}, [url])
```

- Error handle karna important hai, warna app crash ho sakti hai.

## 16. localStorage

- `localStorage` browser me data save karta hai.
- Page refresh ke baad bhi data yaad rehta hai.
- Data string form me save hota hai, objects/arrays ke liye `JSON.stringify` aur `JSON.parse` use karte hain.

```jsx
localStorage.setItem("todos", JSON.stringify(todos))
const saved = JSON.parse(localStorage.getItem("todos"))
```

## 17. Context API

- Context API props drilling avoid karne ke liye use hoti hai.
- Jab same data multiple components ko chahiye ho, context useful hota hai.
- Flow:
  - `createContext()` context banata hai.
  - `Provider` data provide karta hai.
  - `useContext()` data read/update karta hai.

```jsx
const UserContext = createContext()

<UserContext.Provider value={{ user, setUser }}>
  <App />
</UserContext.Provider>
```

- Login/Profile, Theme Switcher, Todo List me Context API use hui.

## 18. React Router

- React Router single page app me multiple pages jaisa behavior deta hai.
- Page reload ke bina navigation hoti hai.

Important parts:

- `createBrowserRouter` routes define karta hai.
- `RouterProvider` router ko app se connect karta hai.
- `Route` URL aur component map karta hai.
- `Outlet` child routes ko parent layout ke andar render karta hai.
- `Link` navigation ke liye use hota hai.
- `NavLink` active route ka style de sakta hai.
- `useParams` dynamic route values read karta hai.
- Loader route render hone se pehle data fetch kar sakta hai.

```jsx
<Route path="user/:userId" element={<User />} />
```

```jsx
const { userId } = useParams()
```

## 19. Redux Toolkit

- Redux global state management ke liye use hota hai.
- Context se zyada structured hota hai jab app state/actions large ho jaye.

Important parts:

- `configureStore` store banata hai.
- `createSlice` state, reducers, actions ko ek jagah define karta hai.
- `Provider` Redux store ko app me available karta hai.
- `useSelector` store se data read karta hai.
- `useDispatch` action dispatch karta hai.
- `action.payload` dispatched data hota hai.

```jsx
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: nanoid(), text: action.payload })
    }
  }
})
```

- Redux Toolkit internally Immer use karta hai, isliye reducers me mutable-looking code allowed hota hai.

## 20. Common React Data Flow

React me data flow usually top to bottom hota hai:

- Parent state rakhta hai.
- Child ko props milte hain.
- Child event ke through parent function call karta hai.
- Parent state update karta hai.
- React UI re-render karta hai.

Example:

```text
User types -> onChange -> setState -> re-render -> updated UI
```

## 21. Kab Kya Use Kare

- Simple changing value: `useState`
- API call/localStorage/document update: `useEffect`
- DOM element access: `useRef`
- Function memoization: `useCallback`
- Reusable hook logic: Custom hook
- Parent to child data: Props
- Many components need same data: Context API
- Large/global structured state: Redux Toolkit
- Multi-page navigation: React Router

## 22. Projects Me Overall Kya Sikha

- React app setup with Vite.
- Components banana and reuse karna.
- JSX and Fragments.
- Props se data pass karna.
- State management with `useState`.
- Events and controlled forms.
- Conditional rendering and list rendering.
- Custom hooks.
- Effects, API fetching, and browser storage.
- Context API for shared state.
- Theme switching.
- React Router for navigation.
- Redux Toolkit for global state.

## Quick Revision Line

React ka main idea: UI ko components me todna, changing data ko state me rakhna, events se state update karna, aur state ke hisaab se UI automatically re-render hona.
