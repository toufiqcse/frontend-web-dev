// @ts-nocheck
import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./router/Router";

const App = () => {
  return (
    <div
      className="bg-slate-700 font-[Poppins] h-auto
    "
    >
      {/*===== provide Header context === */}
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
};

export default App;
