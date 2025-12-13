import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { HomePage } from "@/components/HomePage";

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <HomePage />,
});
