import { createRoute } from "@tanstack/react-router";
import { authRoute } from ".";

export const registerRoute = createRoute({
  getParentRoute: () => authRoute,
  path: "register",
  component: () => <h1>Register</h1>,
});
