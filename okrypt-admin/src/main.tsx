import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext.tsx";
import { ReduxProvider } from "./redux/provider.tsx";
import { Toaster } from "react-hot-toast";

import { router } from "./Navigation/Routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthContextProvider>
      <ReduxProvider>
        <Toaster
          toastOptions={{
            duration: 5000,
            className: "",
            style: {
              fontSize: 16,
            },
          }}
          position="top-right"
        />
        <RouterProvider router={router} />
      </ReduxProvider>
    </AuthContextProvider>
  </StrictMode>
);
