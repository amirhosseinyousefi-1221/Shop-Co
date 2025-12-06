import { createRoute, useLoaderData } from "@tanstack/react-router";
import type { Product } from "../../types/product";
import { rootRoute } from "../root";
import { ProductPage } from "../../components/ProductPage";

export const productDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products/$id",
  loader: async ({ params }) => {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    return res.json();
  },
  component: ProductDetailComponent,
});

function ProductDetailComponent() {
  const product: Product = useLoaderData({ from: productDetailRoute.id });
  return <ProductPage product={product} />;
}
