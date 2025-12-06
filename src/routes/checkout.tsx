import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root";

export const checkoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/checkout",
  component: () => <h1>Checkout</h1>,
});
