import { createBrowserRouter, Outlet } from "react-router-dom";
import ContactsAddPage from "../pages/contacts-add-page/ContactsAddPage";
import ContactsEditPage from "../pages/contacts-edit-page/ContactsEditPage";
import ContactsPage from "../pages/contacts-page/ContactsPage";
import HomePage from "../pages/home-page/HomePage";
import Login from "../pages/login-page/Login";
import SignUp from "../pages/signup-page/SignUp";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    path: "/login",
    element: (
      <ProtectedRoute>
        <Login />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <ProtectedRoute>
        <SignUp />
      </ProtectedRoute>
    ),
  },
  {
    path: "/contacts",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <ContactsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/contacts/edit/:id",
        element: (
          <PrivateRoute>
            <ContactsEditPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/contacts/add",
        element: (
          <PrivateRoute>
            <ContactsAddPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
