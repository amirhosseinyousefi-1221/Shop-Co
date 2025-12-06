import { createRoute, useLoaderData } from "@tanstack/react-router";
import { rootRoute } from "../root";
import ProductCard from "../../components/ProductCard";
import type { Product } from "../../types/product";
import { Filters } from "../../components/Filters";

export const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  loader: async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    return res.json();
  },
  component: ProductsComponent,
});

function ProductsComponent() {
  const products: Product[] = useLoaderData({ from: productsRoute.id });
  return (
    <div className="flex">
      <Filters />
      <div className="grid grid-cols-3 gap-y-5 gap-x-4 pl-10 pt-5 mb-4 ">
        {products.map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
