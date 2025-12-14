import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../root";
import { authRoute } from ".";

export const loginRoute = createRoute({
  getParentRoute: () => authRoute,
  path: "login",
  component: () => <h1>Login</h1>,
});
