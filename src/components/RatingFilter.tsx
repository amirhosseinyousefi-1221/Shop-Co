import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import RemoveFilter from "./RemoveFilter";
import clsx from "clsx";

export function RatingFilter() {
  const [rating, setRating] = useState("");
  useEffect(() => {
    console.log(rating);
  }, [rating]);
  return (
    <div className="border border-[#D7D7D7] rounded-3xl py-4  pl-3 mt-4">
      <div>
        <RadioGroup
          value={rating}
          onValueChange={setRating}
          className="flex flex-col gap-3"
        >
          <label className="flex items-center gap-2">
            <RadioGroupItem value="4" /> 4+ stars
          </label>
          <label className="flex items-center gap-2">
            <RadioGroupItem value="3" /> 3+ stars
          </label>
          <label className="flex items-center gap-2 mb-3">
            <RadioGroupItem value="2" /> 2+ stars
          </label>
        </RadioGroup>
      </div>
      <span
        className={clsx(
          " hover:cursor-pointer text-xs border rounded-3xl py-1 mx-3 hover:bg-red-400 hover:text-white",
          rating ? "flex justify-center items-center" : "hidden"
        )}
        onClick={() => setRating("")}
      >
        Remove Rating Filter
      </span>
    </div>
  );
}
