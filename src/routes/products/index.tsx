import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../root";
import ProductCard from "@/components/ProductCard";
import type { IProduct } from "@/types/product";
import { Filters } from "@/components/Filters";
import { useQueryGetRequest } from "@/components/api/useQueryGetRequest";
import ProductSkeleton from "@/components/ProductSkeleton";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ICategories } from "@/types/categories";

export const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: ProductsComponent,
});

function ProductsComponent() {
  const [category, setCategory] = useState<ICategories | string>("");

  const { data, isLoading, isError, isSuccess } = useQueryGetRequest<
    IProduct[]
  >({
    queryKey: ["products", category],
    path: "products",
    category: category || "",
  });

  return (
    <div className="flex">
      <Filters category={category} setCategory={setCategory} />
      <div
        className={cn(
          "grid grid-cols-3 gap-y-5 pl-10",
          isLoading ? "gap-x-12" : "gap-x-4"
        )}
      >
        {isLoading &&
          Array.from({ length: 15 }).map((_, i) => <ProductSkeleton key={i} />)}

        {isSuccess &&
          data?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
}
