import type { ICategories } from "@/types/categories";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import RemoveFilter from "./RemoveFilter";
import { useFilters } from "./FiltersContext";
import { CategoryOption } from "./CategoryOption";
import { useState } from "react";

export function CategoryFilter() {
  const categories: ICategories[] = [
    "Electronics",
    "Clothes",
    "Furniture",
    "Miscellaneous",
    "Shoes",
    "Giocattoli",
  ];
  const { filters, setFilters } = useFilters();

  return (
    <div className="flex items-center gap-1 justify-center">
      <Select
        value={filters.category}
        onValueChange={(value) =>
          setFilters((prev) => ({ ...prev, category: value }))
        }
      >
        <SelectTrigger className="w-[180px] border rounded-2xl mt-4 py-1.5 hover:text-red-500 hover:cursor-pointer">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          {categories &&
            categories.map((cat) => (
              <CategoryOption value={cat} key={cat}>
                {cat}
              </CategoryOption>
            ))}
        </SelectContent>
      </Select>

      <RemoveFilter />
    </div>
  );
}
