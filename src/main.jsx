import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import SavedTrips from "./pages/SavedTrips.jsx";
import Planner from "./pages/Planner.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import TripDetailsPage from "./pages/TripDetailsPage.jsx";
import FeatureDetails from "./pages/FeatureDetails.jsx";
import Profile from "./pages/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "planner",
        element: <Planner />,
      },
      {
        path: "savedtrips",
        element: <SavedTrips />,
      },
      {
        path: "trips/:id",
        element: <TripDetailsPage />,
      },
      {
        path: "featured/trip/:id",
        element: <FeatureDetails />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
