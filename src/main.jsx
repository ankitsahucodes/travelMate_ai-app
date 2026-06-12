import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Login from "./pages/Login.jsx"
import './index.css'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import SavedTrips from './pages/SavedTrips.jsx'
import Planner from './pages/Planner.jsx'

const router = createBrowserRouter([
   {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/planner",
        element: <Planner />
      },
      {
        path: "/savedtrips",
        element: <SavedTrips />
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
