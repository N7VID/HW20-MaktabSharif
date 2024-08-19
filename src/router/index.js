import { createBrowserRouter, Outlet } from "react-router-dom";
import ContactsAddPage from "../pages/contacts-add-page/ContactsAddPage";
import ContactsEditPage from "../pages/contacts-edit-page/ContactsEditPage";
import ContactsPage from "../pages/contacts-page/ContactsPage";
import HomePage from "../pages/home-page/HomePage";
import Login from "../pages/login-page/Login";
import SignUp from "../pages/signup-page/SignUp";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/contacts",
    element: <Outlet />,
    children: [
      { index: true, element: <ContactsPage /> },
      { path: "/contacts/edit/:id", element: <ContactsEditPage /> },
      { path: "/contacts/add", element: <ContactsAddPage /> },
    ],
  },
]);
