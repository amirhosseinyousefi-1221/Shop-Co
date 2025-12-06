import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";

// Optional: global layout components
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

function App() {
  return (
    <>
      {/* Provide the router to your app */}
      <RouterProvider router={router} />

      {/* Devtools (optional, remove in production) */}
      <TanStackRouterDevtools router={router} />
    </>
  );
}

export default App;
