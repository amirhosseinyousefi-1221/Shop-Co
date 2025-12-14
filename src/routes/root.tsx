import {
  createRootRoute,
  createRouter,
  RouterProvider,
  Outlet,
} from "@tanstack/react-router";
import { Nav } from "../components/Nav";
import { Footer } from "@/components/Footer";
import { authRoute } from "./auth"; // parent /auth
import { loginRoute } from "./auth/login";
import { registerRoute } from "./auth/register";
import { productsRoute } from "./products";
import { productDetailRoute } from "./products/productDetail";
import { cartRoute } from "./cart";
import { homeRoute } from "./home";
import { checkoutRoute } from "./checkout";

export const rootRoute = createRootRoute({
  component: () => (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  ),
});

const routeTree = rootRoute.addChildren([
  authRoute.addChildren([loginRoute, registerRoute]),
  productsRoute.addChildren([productDetailRoute]),
  cartRoute,
  homeRoute,
  checkoutRoute,
]);

const router = createRouter({ routeTree });

export function AppRouter() {
  return <RouterProvider router={router} />;
}
