import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Notes from "./Components/Notes.jsx";
import Createnote from "./Components/Createnote.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import { FirebaseProvider } from "./Context/Firebase.jsx";
import ProtectedRoutes from "./Components/ProtectedRoutes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/notes",
        element: (
          <ProtectedRoutes>
            {" "}
            <Notes />{" "}
          </ProtectedRoutes>
        ),
      },
      {
        path: "/createnotes",
        element: (
          <ProtectedRoutes>
            {" "}
            <Createnote />{" "}
          </ProtectedRoutes>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </StrictMode>
);
