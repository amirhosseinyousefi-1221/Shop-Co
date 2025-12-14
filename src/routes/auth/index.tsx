// routes/auth/index.tsx
import { createRoute, Outlet } from "@tanstack/react-router";
import { rootRoute } from "../root";

export const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth",
  component: () => <Outlet />,
});
