import type { categories } from "@/types/categories";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { CategoryOption } from "./CategoryOption";
import RemoveFilter from "./RemoveFilter";

export function CategoryFilter() {
  const [value, setValue] = useState<categories | string>("");

  return (
    <div className="flex items-center gap-1 justify-center">
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-[180px] border rounded-2xl mt-4 py-1.5 hover:text-red-500 hover:cursor-pointer">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <CategoryOption value="mens">Men's</CategoryOption>
          <CategoryOption value="womens">Women's</CategoryOption>
          <CategoryOption value="jewelery">Jewelery</CategoryOption>
          <CategoryOption value="electronics">Electronics</CategoryOption>
        </SelectContent>
      </Select>

      <RemoveFilter value={value} setValue={setValue} resetValue="" />
    </div>
  );
}
