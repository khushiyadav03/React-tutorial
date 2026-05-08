
# React Tutorial

This repository contains my React learning projects in tutorial order. Each folder focuses on one main React concept, starting from basic Vite setup and moving toward hooks, routing, Context API, and Redux Toolkit.

## Overall Notes

- [React Overall Notes](./REACT_OVERALL_NOTES.md) - one-file revision notes for all React concepts covered in this repo.
- Every project folder also has its own `NOTES.md` file with a short overview of what was implemented and learned.

## Projects

| Folder | Focus |
| --- | --- |
| `customReact` | Simple custom React-like renderer to understand how elements become DOM nodes |
| `01vitereact` | Vite + React setup, components, JSX, fragments |
| `02counter` | `useState`, events, conditional UI, dynamic styling |
| `03tailwindprops` | Props, reusable components, Tailwind CSS styling |
| `04_bg_changer` | Custom hook, random color state, localStorage, clipboard |
| `05_password_generator` | `useState`, `useEffect`, `useCallback`, `useRef`, controlled inputs |
| `06_cureny_project` | Custom hook, API fetching, currency conversion, `useId` |
| `07react_router_project` | React Router, routes, layout, `Outlet`, `Link`, `NavLink`, loaders, `useParams` |
| `08_contextAPI_toogleProject` | Context API basics, shared login state |
| `09_themeSwitcher` | Theme context, custom context hook, light/dark mode |
| `10_contextAPI_todoList` | Todo app with Context API, localStorage, add/edit/delete/complete |
| `11_reduxToolKit_ToDo` | Redux Toolkit, store, slice, actions, `useSelector`, `useDispatch` |

## Concepts Covered

- React app setup with Vite
- Components and JSX
- Props and reusable UI
- State management with `useState`
- Events and controlled forms
- Conditional rendering
- List rendering with `map` and `key`
- `useEffect`, `useRef`, `useCallback`, `useId`
- Custom hooks
- API fetching
- localStorage
- Context API
- React Router
- Redux Toolkit
- Tailwind CSS styling

## How To Run A Project

Open any project folder and run:

```bash
npm install
npm run dev
```

Example:

```bash
cd 11_reduxToolKit_ToDo
npm install
npm run dev
```

## Notes

`node_modules` and build output folders are ignored with `.gitignore`, so dependencies should be installed locally after cloning.
