import { createBrowserRouter, Outlet } from "react-router-dom";
import ContactsAddPage from "../pages/contacts-add-page/ContactsAddPage";
import ContactsEditPage from "../pages/contacts-edit-page/ContactsEditPage";
import ContactsPage from "../pages/contacts-page/ContactsPage";
import HomePage from "../pages/home-page/HomePage";
import Login from "../pages/login-page/Login";
import SignUp from "../pages/signup-page/SignUp";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import ContactsSinglePage from "../pages/contacts-single-page/ContactsSinglePage";
import Header from "../components/Header/Header";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactLayout = () => (
  <>
    <Header />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      rtl
      draggable
      theme={"light"}
      transition={Slide}
      limit={1}
    />
    <Outlet />
  </>
);
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
        path: ":id",
        element: (
          <PrivateRoute>
            <ContactsSinglePage />
          </PrivateRoute>
        ),
      },
      {
        path: "edit/:id",
        element: (
          <PrivateRoute>
            <ContactsEditPage />
          </PrivateRoute>
        ),
      },
      {
        path: "add",
        element: (
          <PrivateRoute>
            <ContactsAddPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
