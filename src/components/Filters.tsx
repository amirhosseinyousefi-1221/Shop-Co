import { CategoryFilter } from "./CategoryFilter";
import { PriceFilter } from "./PriceFilter";
import { RatingFilter } from "./RatingFilter";

export const Filters = () => {
  return (
    <div className="border w-3/8 ml-5 rounded-2xl px-3 py-2 flex flex-col gap-5">
      <span className="text-2xl">Filters :</span>
      <CategoryFilter />
      <PriceFilter />
      <RatingFilter />
    </div>
  );
};
