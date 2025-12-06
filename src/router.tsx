import { createRouter } from "@tanstack/react-router";
import { cartRoute } from "./routes/cart";
import { checkoutRoute } from "./routes/checkout";
import { homeRoute } from "./routes/home";
import { productsRoute } from "./routes/products";
import { productDetailRoute } from "./routes/products/productDetail";
import { rootRoute } from "./routes/root";

const routeTree = rootRoute.addChildren([
  homeRoute,
  productsRoute.addChildren([productDetailRoute]),
  cartRoute,
  checkoutRoute,
]);

export const router = createRouter({ routeTree });
