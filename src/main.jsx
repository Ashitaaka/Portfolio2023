import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './sass/styles.scss'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import ToDoList from './components/ToDoList';
import Home from './components/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children:[
            {
                path:'home',
                element: <Home />,
            },
            {
                path:'todolist',
                element: <ToDoList />,
            },
        ],
    },
]);
  

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
