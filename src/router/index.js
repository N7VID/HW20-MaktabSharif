import { createBrowserRouter, Outlet } from "react-router-dom";
import ContactsAddPage from "../pages/contacts-add-page/ContactsAddPage";
import ContactsEditPage from "../pages/contacts-edit-page/ContactsEditPage";
import ContactsPage from "../pages/contacts-page/ContactsPage";
import HomePage from "../pages/home-page/HomePage";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
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
