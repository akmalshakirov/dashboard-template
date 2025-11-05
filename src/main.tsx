import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { AdminProvider } from "./hooks/adminContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <AdminProvider>
            <App />
        </AdminProvider>
    </BrowserRouter>
);
