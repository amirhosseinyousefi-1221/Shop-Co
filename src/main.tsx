// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { FiltersProvider } from "./components/Filters/FiltersContext";
import { AppRouter } from "./routes/root";


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <FiltersProvider>
        <AppRouter />
      </FiltersProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
