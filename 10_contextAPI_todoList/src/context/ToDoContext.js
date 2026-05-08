import { createContext, useContext } from "react";

// Context ka default shape: data plus functions jo app share karegi.
export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addToDo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
});

export const useToDoContext = () => {
  // Custom hook context read karne ka short and clean way hai.
  return useContext(ToDoContext);
}

// Provider component value ko children tak pass karta hai.
export const ToDoProvider = ToDoContext.Provider;
