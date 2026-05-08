import {createSlice, nanoid} from '@reduxjs/toolkit';

// Redux state ka starting data.
const initialState = {
    todos: [{id: 1, text: "hello world"}]
}

// Slice me state ka naam, initial state, aur reducers ek saath define hote hain.
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // action.payload me dispatch ke time bheja hua todo text aata hai.
            const todo = {
                // nanoid unique id generate karta hai.
                id: nanoid(), 
                text: action.payload
            }
            // Redux Toolkit Immer use karta hai, isliye push jaisa mutable code allowed hai.
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            // payload me id aati hai; filter se wahi todo remove hota hai.
            state.todos = state.todos.filter((todo) => todo.id != action.payload) 
        },
    }
})

// Actions components me dispatch karne ke liye export hote hain.
export const {addTodo, removeTodo} = todoSlice.actions

// Reducer store me attach hota hai.
export default todoSlice.reducer
