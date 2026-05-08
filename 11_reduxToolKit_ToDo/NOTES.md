# 11 Redux Toolkit Todo - Short Overview

## Kya implement kiya
- Todo app using Redux Toolkit.
- Add todo and remove todo actions banaye.
- Redux store app ke saath connect kiya.
- Components ne Redux state read aur update ki.

## Kya sikha
- `configureStore` Redux store create karta hai.
- `createSlice` state, reducers, aur actions ek jagah define karta hai.
- `Provider` Redux store ko poori app me available karta hai.
- `useSelector` store se data read karta hai.
- `useDispatch` action ko store tak bhejta hai.
- `action.payload` dispatch ke time bheja hua data hota hai.
- Redux Toolkit Immer use karta hai, isliye reducer me `state.todos.push(...)` allowed hota hai.
