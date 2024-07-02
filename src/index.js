import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./config/RouterConfig";
import {RouterProvider} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Routes}  />)
