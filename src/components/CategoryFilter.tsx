import type { ICategories } from "@/types/categories";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { CategoryOption } from "./CategoryOption";
import RemoveFilter from "./RemoveFilter";

export function CategoryFilter({
  category,
  setCategory,
}: {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}) {
  const categories: ICategories[] = [
    "Electronics",
    "Clothes",
    "Furniture",
    "Miscellaneous",
    "Shoes",
    "Giocattoli",
  ];

  return (
    <div className="flex items-center gap-1 justify-center">
      <Select value={category} onValueChange={setCategory}>
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

      <RemoveFilter
        category={category}
        setCategory={setCategory}
        resetCategory=""
      />
    </div>
  );
}
