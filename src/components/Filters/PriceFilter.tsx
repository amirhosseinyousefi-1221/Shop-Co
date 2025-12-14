import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { useFilters } from "./FiltersContext";

export function PriceFilter() {
  const { filters, setFilters } = useFilters();
  const [range, setRange] = useState<number[]>([0, 500]);
  const [open, setOpen] = useState<boolean>(false);
  const onFilter = () => {
    setFilters((prev) => ({
      ...prev,
      price_max: range[1],
      price_min: range[0],
    }));
    setOpen(false);
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="w-[180px] border rounded-2xl mt-4 py-1.5 hover:cursor-pointer ">
        Price Range
      </PopoverTrigger>
      <PopoverContent className="w-[200px] flex flex-col gap-2  ">
        <p className="mb-3 text-sm">Price Range</p>
        <Slider
          value={range}
          onValueChange={setRange}
          min={0}
          max={500}
          step={20}
        />
        <div className="flex justify-between text-xs mt-2">
          <span>${range[0]}</span>
          <span>${range[1]}</span>
        </div>
        <button
          className="border rounded-2xl px-5 py-2 hover:cursor-pointer hover:bg-red-400 hover:text-white "
          onClick={onFilter}
        >
          Filter
        </button>
      </PopoverContent>
    </Popover>
  );
}
