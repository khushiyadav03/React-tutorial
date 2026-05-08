import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

// configureStore Redux store banata hai aur reducer ko connect karta hai.
export const store = configureStore({
    reducer: todoReducer
})
