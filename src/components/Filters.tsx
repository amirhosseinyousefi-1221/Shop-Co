import { CategoryFilter } from "./CategoryFilter";
import { PriceFilter } from "./PriceFilter";
import { RatingFilter } from "./RatingFilter";

export const Filters = () => {
  return (
    <div className="border w-35/100 ml-5 rounded-2xl pl-3  py-2 flex flex-col gap-5 items-center ">
      <span className="text-2xl">Filters :</span>
      <CategoryFilter />
      <PriceFilter />
      <RatingFilter />
    </div>
  );
};
