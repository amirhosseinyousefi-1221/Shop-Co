import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export function PriceFilter() {
  const [range, setRange] = useState<number[]>([0, 500]);
  const [filterRange, setFilterRange] = useState<number[]>();
  const onFilter = () => {
    setFilterRange(range);
    // console.log(filterRange);
  };
  return (
    <Popover>
      <PopoverTrigger className="w-[180px] border rounded-2xl mt-4 py-1.5 hover:cursor-pointer">
        Price
      </PopoverTrigger>
      <PopoverContent className="w-[220px] flex flex-col gap-2 ">
        <p className="mb-2 text-sm">Price Range</p>
        <Slider
          value={range}
          onValueChange={setRange}
          min={0}
          max={1000}
          step={10}
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
