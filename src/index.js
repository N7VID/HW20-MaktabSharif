import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import store from "./redux/store";
import { router } from "./router";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        rtl
        draggable
        theme={"light"}
        transition={Slide}
      />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
