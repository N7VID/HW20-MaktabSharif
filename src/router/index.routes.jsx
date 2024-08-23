import { createBrowserRouter, Outlet } from "react-router-dom";
import ContactsAddPage from "../pages/contacts-add-page/ContactsAddPage";
import ContactsEditPage from "../pages/contacts-edit-page/ContactsEditPage";
import ContactsPage from "../pages/contacts-page/ContactsPage";
import HomePage from "../pages/home-page/HomePage";
import Login from "../pages/login-page/Login";
import SignUp from "../pages/signup-page/SignUp";
import PrivateRoute from "./PrivateRoute.routes";
import ProtectedRoute from "./ProtectedRoute.routes";
import ContactsSinglePage from "../pages/contacts-single-page/ContactsSinglePage";
import Header from "../components/Header/Header";
import { AppRoutes } from "../config/routs";

const ContactLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);
export const router = createBrowserRouter([
  { path: AppRoutes.HOME, element: <HomePage /> },
  {
    path: AppRoutes.LOGIN,
    element: (
      <ProtectedRoute>
        <Login />
      </ProtectedRoute>
    ),
  },
  {
    path: AppRoutes.SIGNUP,
    element: (
      <ProtectedRoute>
        <SignUp />
      </ProtectedRoute>
    ),
  },
  {
    path: AppRoutes.CONTACTS,
    element: <ContactLayout />,
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
        path: AppRoutes.SINGLE,
        element: (
          <PrivateRoute>
            <ContactsSinglePage />
          </PrivateRoute>
        ),
      },
      {
        path: AppRoutes.EDIT,
        element: (
          <PrivateRoute>
            <ContactsEditPage />
          </PrivateRoute>
        ),
      },
      {
        path: AppRoutes.ADD,
        element: (
          <PrivateRoute>
            <ContactsAddPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
