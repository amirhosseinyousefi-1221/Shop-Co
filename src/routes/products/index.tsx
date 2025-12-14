import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../root";
import ProductCard from "@/components/ProductCard";
import type { IProduct } from "@/types/product";
import { useQueryGetRequest } from "@/components/api/useQueryGetRequest";
import ProductSkeleton from "@/components/ProductSkeleton";
import { cn } from "@/lib/utils";
import { useFilters } from "@/components/Filters/FiltersContext";
import { Filters } from "@/components/Filters/Filters";

export const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: ProductsComponent,
});

function ProductsComponent() {
  const { filters } = useFilters();

  const { data, isLoading, isSuccess } = useQueryGetRequest<IProduct[]>({
    queryKey: [
      "products",
      filters.category,
      filters.title,
      filters.price_max?.toString() ?? "",
      filters.price_min?.toString() ?? "",
    ],
    path: "products",
    category: filters.category || "",
    title: filters.title || "",
    price_max: filters.price_max || 0,
    price_min: filters.price_min || 1,
  });

  return (
    <div className="flex">
      <Filters />
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
