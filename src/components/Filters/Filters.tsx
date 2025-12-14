import { CircleX } from "lucide-react";
import { CategoryFilter } from "./CategoryFilter";
import { useFilters } from "./FiltersContext";
import { PriceFilter } from "./PriceFilter";

export const Filters = () => {
  const { filters, setFilters } = useFilters();
  return (
    <div className="border w-35/100 max-w-70 ml-5 rounded-2xl pl-3  py-2 flex flex-col gap-5 items-center ">
      <span className="text-2xl">Filters :</span>
      <CategoryFilter />
      <PriceFilter />
      {filters.price_max !== null && filters.price_max > 0 && (
        <div className="flex items-center border px-3 py-1 rounded-xl -mt-3 text-sm font-normal">
          <span className="pr-2">From {filters.price_min}$ </span>
          <span>To {filters.price_max}$ </span>
          <CircleX
            className="ml-3 mt-0.5 text-red-500 hover:cursor-pointer"
            size={20}
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                price_min: 0,
                price_max: 0,
              }))
            }
          />
        </div>
      )}
    </div>
  );
};
